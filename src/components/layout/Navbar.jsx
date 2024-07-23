import React from "react";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="z-15 flex items-center justify-between border-2 border-pallette-50 bg-pallette-400 p-4 text-pallette-500">
      <h1 className="flex-grow text-center text-4xl">Dinner Generator</h1>
      <button className="rounded px-5 py-2" onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
