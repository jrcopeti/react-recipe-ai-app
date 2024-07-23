import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/generate-recipe", label: "Generate Recipe" },
  { to: "/recipes", label: "Recipes" },
  { to: "/about", label: "About" },
];

const Sidebar = forwardRef(({ isOpen }, ref) => {
  return (
    <aside
      ref={ref}
      className={`fixed left-0 h-screen w-64 transform border-2 border-pallette-50 bg-pallette-300 p-4 text-4xl text-pallette-500 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
});

export default Sidebar;
