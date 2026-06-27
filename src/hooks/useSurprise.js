import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Balloons from "./Balloons";

import FloatingHearts from "../FloatingHearts/FloatingHearts";
import FloatingParticles from "../FloatingParticles/FloatingParticles";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      <Balloons />

      <FloatingHearts />

      <FloatingParticles />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-16
          px-6
          py-20
          lg:flex-row
        "
      >
        <HeroContent />

        <HeroImage />
      </div>
    </section>
  );
}