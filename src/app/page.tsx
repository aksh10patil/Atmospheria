import Hero from "../../public/ui/Hero";
import Navbar from "../../public/ui/Navbar";


export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}
