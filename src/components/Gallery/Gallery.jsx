import gallery from "../../data/gallery";

import SectionTitle from "../ui/SectionTitle";
import PhotoCard from "./PhotoCard";

export default function Gallery() {
  return (
    <section
      className="
        bg-gradient-to-b
        from-[#FFF8F0]
        to-pink-50
        py-28
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="Beautiful Memories"
          subtitle="Some moments deserve to live forever."
        />

        <div
          className="
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {gallery.map((photo) => (
            <PhotoCard
              key={photo.id}
              {...photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}