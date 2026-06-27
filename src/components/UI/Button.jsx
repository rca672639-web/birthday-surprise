import React from "react";

export default function Button({ children, className = "", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "inline-flex items-center justify-center rounded-full bg-[#6F4E37] px-6 py-3 text-white shadow-xl hover:brightness-110 " +
        className
      }
    >
      {children}
    </button>
  );
}