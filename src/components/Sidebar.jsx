import React from "react";

function Sidebar() {
  return (
    <aside className="bg-pallette-300 w-64 p-4 text-cyan-950">
      <ul>
        <li className="mb-4">
          <a href="#">Home</a>
        </li>
        <li className="mb-4">
          <a href="#">Favorites</a>
        </li>
        <li className="mb-4">
          <a href="#">About</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
