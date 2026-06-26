import Hero from "./components/Hero/Hero";
import LoveLetter from "./components/LoveLetter/LoverLetter";
import Gallery from "./components/Gallery/Gallery";
import QuoteCard from "./components/UI/QuoteCard";
import LovePoem from "./components/LoveLetter/LovePoem";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <>
      <Hero />
    
      <QuoteCard />
      <Gallery />
      <LovePoem />
      <Footer />
    </>
  );
}