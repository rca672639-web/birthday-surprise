import Cursor from "./Cursor";

export default function Typewriter({ text, progress }) {
  return (
    <div className="mb-8 w-full relative z-10">
      <div className="mb-4 h-2 rounded-full bg-pink-100 max-w-3xl mx-auto">
        <div
          className="h-full rounded-full bg-pink-500 transition-all"
          style={{ width: `${progress ?? 0}%` }}
        />
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm max-w-3xl mx-auto">
        <p className="whitespace-pre-wrap text-lg leading-8 text-[#4B2E2B] break-words text-left md:text-center">
          {text}
          <Cursor />
        </p>
      </div>
    </div>
  );
}