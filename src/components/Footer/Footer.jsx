import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2D1B18] py-12 text-center text-white">
      <FaHeart className="mx-auto mb-4 text-pink-500" size={28} />

      <h2
        className="text-4xl"
        style={{
          fontFamily: "Great Vibes",
        }}
      >
        Happy Birthday, Sharlyn ❤️
      </h2>

      <p className="mt-6 text-lg">
        Made with endless love,
        just for you.
      </p>

      <p className="mt-3 text-sm opacity-70">
        From your biggest supporter ❤️
      </p>
    </footer>
  );
}