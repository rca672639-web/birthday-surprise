import hero1Photo from "../../assets/images/hero1.jpeg";
import BackgroundGlow from "./BackgroundGlow";
import FloatingHearts from "./FloatingHearts";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";
import FloatingWords from "../effects/FloatingWords";
export default function Hero({ onReadLetter }) {
  return (
    <section
      className="
      relative
      flex
      min-h-screen
      align-center
      items-center
      justify-center
      overflow-hidden
      bg-[#FFF8F0]
      px-6
      "
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero1Photo}
          alt="Soft background"
          className="absolute inset-0 h-full w-full object-cover opacity-25 blur-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0]/80 via-[#FDE8F2]/50 to-pink-50/80" />
      </div>
      <BackgroundGlow />
      <FloatingWords />
      <FloatingHearts />

      <div
        className="
        relative
        z-20
        mx-auto
        flex
        w-full
        max-w-7xl
        flex-col-reverse
        items-center
        gap-16
        lg:flex-row
        lg:items-center
        lg:justify-between
        "
      >
        <div className="w-full min-w-0 lg:w-[55%]">
          <HeroContent onReadLetter={onReadLetter} />
        </div>

        <div className="w-full min-w-0 lg:w-[40%]">
          <HeroImage />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}