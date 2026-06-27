import BackgroundGlow from "./BackgroundGlow";
import FloatingHearts from "./FloatingHearts";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImag";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-[#FFF8F0]
      px-6
      "
    >
      <BackgroundGlow />

      <FloatingHearts />

      <div
        className="
        relative
        z-20
        mx-auto
        flex
        max-w-7xl
        flex-col-reverse
        items-center
        gap-16
        lg:flex-row
        lg:justify-between
        "
      >
        <HeroContent />

        <HeroImage />
      </div>

      <ScrollIndicator />
    </section>
  );
}