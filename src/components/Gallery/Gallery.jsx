import gallery from "../../data/gallery";
import PolaroidCard from "./PolaroidCard";

export default function Gallery({ progress }) {

  return (

    <div className="mt-20 grid gap-10 md:grid-cols-3">

      {gallery.map((photo, index) => {

        const visible =
          progress > (index + 1) * 25;

        return visible ? (

          <PolaroidCard
            key={photo.id}
            {...photo}
          />

        ) : (

          <div
            key={photo.id}
            className="h-[480px] rounded-xl border-2 border-dashed border-pink-300 bg-white/30"
          />

        );

      })}

    </div>

  );

}