import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  return (
    <div className="container m-auto px-0  bg-gray-50 rounded-lg">
    <nav className="flex items-center gap-8 p-5 relative z-[10]">

      <a href="/">Home</a>

      <div className="relative">

        <input
          type="checkbox"
          id="products-menu"
          className="hidden peer"
        />

        <label
          htmlFor="products-menu"
          className="flex items-center gap-2 cursor-pointer "
        >
          Products
          <FaChevronDown className="text-sm" />
        </label>

        <div className="hidden peer-checked:block absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md">

          <a
            href="/electronics"
            className="block px-4 py-3 hover:bg-gray-100"
          >
            Electronics
          </a>

          <a
            href="/jewelery"
            className="block px-4 py-3 hover:bg-gray-100"
          >
            Jewelery
          </a>

          <a
            href="/mensclothing"
            className="block px-4 py-3 hover:bg-gray-100"
          >
            Men's Clothing
          </a>

          <a
            href="/womensclothing"
            className="block px-4 py-3 hover:bg-gray-100"
          >
            Women's Clothing
          </a>

        </div>

      </div>

      <a href="/contact">Login</a>

      <a href="/cart">Cart</a>

    <h2 className="font-bold italic mb-6 p-5 gap-8 text-4xl ml-auto">
        <span className="text-red-600 font-lobster">Logo</span>
    </h2>

    </nav>
    </div>
  );
}

export default Navbar;