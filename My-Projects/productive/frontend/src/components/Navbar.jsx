import { Link } from "react-router-dom";

export function Navbar() {

  return (
    <header className="container mx-auto px-4 py-2">
      <div className="flex items-center justify-between">
        <ul className="flex gap-2 items-center">
          <li>
            <Link to="/report">
              <button className="flex items-center gap-1 bg-opacity-90 bg-white dark:bg-gray-800 text-white dark:text-gray-200 px-2 py-1 rounded transition-transform duration-100 ease-in-out transform hover:opacity-100 hover:translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span className="hidden sm:inline">Report</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <button className="flex items-center gap-1 bg-opacity-90 bg-white dark:bg-gray-800 text-white dark:text-gray-200 px-2 py-1 rounded transition-transform duration-100 ease-in-out transform hover:opacity-100 hover:translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span className="hidden sm:inline">Settings</span>
              </button>
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </header>
  );
}
