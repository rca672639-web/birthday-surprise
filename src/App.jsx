import { useState } from "react";

import GiftBox from "./components/Gift/GiftBox";
import Intro from "./components/Intro/Intro";
import Hero from "./components/Hero/Hero";
import Letter from "./components/Letter/Letter";
import Gallery from "./components/Gallery/Gallery";
import Poem from "./components/Poem/Poem";
import Celebration from "./components/Celebration/Celebration";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import ScrollProgress from "./components/UI/ScrollProgress";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [started, setStarted] = useState(false);
  const [letterOpened, setLetterOpened] = useState(false);

  if (!giftOpened) {
    return (
      <GiftBox onOpen={() => setGiftOpened(true)} />
    );
  }

  if (!started) {
    return (
      <>
        <MusicPlayer startPlaying={started} />
        <Intro onFinish={() => setStarted(true)} />
      </>
    );
  }

  return (
    <>
      <ScrollProgress />
      <MusicPlayer startPlaying={started} />

      <Hero onReadLetter={() => {
        if (letterOpened) {
          document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        setLetterOpened(true);
        setTimeout(() => document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' }), 350);
      }} />
      <Letter visible={letterOpened} />
      <Gallery />
      <Poem visible={letterOpened} />
      <Celebration />
      <div align="center" className="mt-10">
        <Footer />
      </div>
    </>
  );
}