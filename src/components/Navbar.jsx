import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-900 bg-slate-990/98 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-teal-400"
        >
          ShopZone
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-slate-200 transition hover:text-teal-400"
          >
            Home
          </Link>

          <a
            href="#products"
            className="transition text-slate-300 hover:text-teal-400"
          >
            Products
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;