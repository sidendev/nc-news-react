import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-600">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to={'/'} className="block text-white">
              <span className="font-bold">SUPERNEWS</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav>
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-white transition hover:underline" href="#"> Coding </Link>
                </li>
                <li>
                  <Link className="text-white transition hover:underline" href="#"> Football </Link>
                </li>
                <li>
                  <Link className="text-white transition hover:underline" href="#"> Cooking </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-red-600 shadow transition hover:underline"
              >
                Login
              </Link>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-red-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;