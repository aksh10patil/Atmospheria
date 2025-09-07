import AboutSection from "../../public/ui/AboutSection";
import Hero from "../../public/ui/Hero";
import Navbar from "../../public/ui/Navbar";
import ExquisiteFavorites from "../../public/ui/RestaurantCards";





export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ExquisiteFavorites />
    
    </main>
  );
}
