import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-fit flex-col rounded-lg border-2 border-pallette-50 bg-pallette-400 p-6 text-pallette-50 shadow-md shadow-zinc-500">
        <p>Not Found - This page does not exist</p>
        <Link to="/">
          <button className="btn btn-secondary m-2 border-2 border-pallette-50 bg-pallette-300 text-xl font-normal text-pallette-500 shadow-md shadow-zinc-500 hover:border-pallette-50 hover:bg-pallette-50 hover:text-pallette-500">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
