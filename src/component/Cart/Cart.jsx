import { useCart } from "../../component/CartContext/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-[#c2410c]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h1 className="text-2xl font-semibold text-gray-700">Cart</h1>
        </div>


        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-6">سبد خرید شما خالی است</p>
            <Link
              to="/"
              className="bg-[#962a00] text-white px-6 py-3 rounded-md hover:bg-[#9a3412] transition"
            >
              Back to shop
            </Link>
          </div>
        ) : (
          <>
            {/* Table header */}
            <div className="grid grid-cols-12 gap-4 pb-3 border-b border-gray-200 text-sm font-semibold text-gray-800">
              <div className="col-span-2">Product</div>
              <div className="col-span-5">Title</div>
              <div className="col-span-1 text-center">Count</div>
              <div className="col-span-2 text-right">Price</div>
              <div className="col-span-2"></div>
            </div>

            {/* Cart items */}
            <div className="divide-y divide-gray-100">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 gap-4 py-5 items-center"
                >
                  {/* Product image */}
                  <div className="col-span-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <div className="col-span-5">
                    <p className="text-sm text-gray-800 line-clamp-2">
                      {item.title}
                    </p>
                  </div>

                  {/* Count */}
                  <div className="col-span-1 flex justify-center">
                    <div className="w-10 h-8 border border-gray-300 rounded flex items-center justify-center text-sm">
                      {item.quantity}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-right text-sm font-medium text-gray-800">
                    {(item.price * item.quantity).toFixed(2)}$
                  </div>

                  {/* Delete button */}
                  <div className="col-span-2 flex justify-end pl-12">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 border border-[#962a00] text-[#ffffff] rounded text-sm hover:bg-[#c2410c] hover:text-white transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total + Pay now */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-lg font-semibold text-gray-800">
                Total Price{" "}
                <span className="text-gray-900 ml-2">
                  {totalPrice.toFixed(2)} $
                </span>
              </div>

              <button className="bg-[#962a00] hover:bg-[#9a3412] text-white px-8 py-3 rounded-md flex items-center gap-2 transition text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Pay now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
