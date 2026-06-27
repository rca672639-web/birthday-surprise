import Cursor from "./Cursor";

export default function Typewriter({
  text,
  progress,
}) {
  return (
    <>
      <div className="mb-10 h-2 rounded-full bg-pink-100">
        <div
          className="h-full rounded-full bg-pink-500 transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p
        className="
        whitespace-pre-wrap
        text-xl
        leading-10
        text-[#4B2E2B]
        "
      >
        {text}

        <Cursor />
      </p>
    </>
  );
}