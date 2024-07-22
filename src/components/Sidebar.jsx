import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/generate-recipe", label: "Generate Recipe" },
  { to: "/recipes", label: "Recipes" },
  { to: "/about", label: "About" },
];

function Sidebar() {
  return (
    <aside className="bg-pallette-300 w-64 p-4 text-cyan-950">
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
