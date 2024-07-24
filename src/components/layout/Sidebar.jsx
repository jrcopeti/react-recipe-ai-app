import { forwardRef } from "react";
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

      className={`fixed left-0 z-40  w-full transform border-2 border-pallette-50 bg-pallette-300 p-4 text-center text-7xl text-pallette-500 transition-transform ${
        isOpen ? "translate-y-0 top-16" : "-translate-y-[100%] top-0"

      }`}

    >
      <ul>
        {links.map((link) => (
          <li key={link.label} className="py-2">
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
