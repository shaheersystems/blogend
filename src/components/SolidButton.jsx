import React from "react";

function SolidButton({ children, onClick }) {
  return (
    <button
      className="px-3 py-1 bg-black text-white border border-black rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SolidButton;
