import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import backgroundImage from "../../assets/images/picture2.png"; // Import the image

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && navbarRef.current.contains(event.target)) {
      return;
    }
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar ref={navbarRef} toggleSidebar={toggleSidebar} />
      <div className="relative flex flex-grow">
        <Sidebar
          ref={sidebarRef}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <main className="relative flex-grow overflow-x-hidden text-center text-2xl text-cyan-950">
          <div
            className="absolute inset-0 -z-10 bg-pallette-200 bg-center bg-no-repeat opacity-50"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></div>
          <div className="relative z-10 p-6">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
