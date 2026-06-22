import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedPortfolio from "@/components/FeaturedPortfolio";
import Services from "@/components/Services";
import SignatureStories from "@/components/SignatureStories";
import CinematicFilms from "@/components/CinematicFilms";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Destinations from "@/components/Destinations";
import InstagramFeed from "@/components/Instagram";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full relative bg-luxury-bg">
        <Hero />
        <About />
        <FeaturedPortfolio />
        <Services />
        <SignatureStories />
        <CinematicFilms />
        <Experience />
        <Testimonials />
        <Destinations />
        <InstagramFeed />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
