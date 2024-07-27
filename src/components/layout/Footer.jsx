function Footer() {
  return (
    <footer className="mt-auto border-2 border-pallette-50 bg-pallette-400 p-4 text-center text-2xl font-normal text-pallette-200">
      <p>
        &copy; 2024 Created by{" "}
        <a
          href="https://github.com/jrcopeti"
          target="_blank"
          className="transform text-pallette-500 duration-200 ease-in-out hover:text-pallette-200"
        >
          Jose Copeti
        </a>
        ,{" "}
        <a
          href="https://github.com/lamadelpolya"
          target="_blank"
          className="transform text-pallette-500 duration-200 ease-in-out hover:text-pallette-200"
        >
          Polina Yukhymenko
        </a>
        ,{" "}
        <a
          href="https://github.com/Ole-Guacamole"
          target="_blank"
          className="transform text-pallette-500 duration-200 ease-in-out hover:text-pallette-200"
        >
          Sven Ole Spindler
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
