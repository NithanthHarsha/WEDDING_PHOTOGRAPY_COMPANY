const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'videos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const destPath = path.join(dir, 'wedding.mp4');
const file = fs.createWriteStream(destPath);

console.log('Downloading video asset from open developer CDN...');

const url = "https://vjs.zencdn.net/v/oceans.mp4";

https.get(url, function(response) {
   if (response.statusCode !== 200) {
       console.error('Download failed. Server returned status code:', response.statusCode);
       file.close();
       fs.unlinkSync(destPath);
       return;
   }

   response.pipe(file);
   file.on('finish', function() {
       file.close();
       console.log('Video downloaded successfully and saved to public/videos/wedding.mp4');
   });
}).on('error', function(err) {
   file.close();
   if (fs.existsSync(destPath)) {
       fs.unlinkSync(destPath);
   }
   console.error('Error downloading video:', err.message);
});
