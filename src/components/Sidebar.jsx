import React from "react";

function Sidebar() {
  return (
    <div className="w-64 flex items-center justify-center flex-col space-y-4">
      <button className="bg-black px-3 border border-black py-1 text-white rounded-full">
        Get Unlimited Access
      </button>
      <button className="bg-white border border-black px-3 py-1 rounded-full">
        Get Unlimited Access
      </button>
    </div>
  );
}

export default Sidebar;
