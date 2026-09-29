import { FaInstagram, FaTelegramPlane, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 border-b-2 border-red-600">

      <div className="max-w-5xl mx-auto px-8 py-8">

        <div className="grid grid-cols-3 gap-20">

          <div>
            <h2 className="text-2xl font-bold italic mb-6">
              <span className="text-gray-900 font-lobster">Fake</span>
              <span className="text-red-600 font-lobster">Store</span>
            </h2>

            <p className="text-sm text-gray-700 leading-5 max-w-xs">
              Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Sapiente et minima facere
              tempora consequuntur dolorum.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Products
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>✓ Women's Clothing</li>
              <li>✓ Men's Clothing</li>
              <li>✓ Jewelery</li>
              <li>✓ Electronics</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact us
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">

              <li className="flex items-center gap-2">
                <FaInstagram />
                fake_shop
              </li>

              <li className="flex items-center gap-2">
                <FaTelegramPlane />
                online.shop
              </li>

              <li className="flex items-center gap-2">
                <FaTelegramPlane />
                online.shop
              </li>

              <li className="flex items-center gap-2">
                <FaFacebookF />
                online.shop
              </li>

            </ul>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;