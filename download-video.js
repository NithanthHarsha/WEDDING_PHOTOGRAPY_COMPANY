const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const { URL } = require('url');

const dir = path.join(__dirname, 'public', 'videos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const destPath = path.join(dir, 'wedding.mp4');
const file = fs.createWriteStream(destPath);

console.log('Downloading real wedding video asset...');

const videoUrl = "https://42biz.in/webar/wedding/wedding.mp4";

function download(urlStr) {
    const parsedUrl = new URL(urlStr);
    const client = parsedUrl.protocol === 'https:' ? https : http;

    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    };

    client.get(urlStr, options, function(response) {
        if (response.statusCode === 301 || response.statusCode === 302) {
            console.log(`Redirected to: ${response.headers.location}`);
            download(response.headers.location);
            return;
        }

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
}

download(videoUrl);
