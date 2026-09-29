import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // ← state تعداد
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity); // ← تعداد رو هم پاس می‌دیم
      alert(`${quantity} عدد از محصول به سبد خرید اضافه شد ✓`);
    }
  };

  // افزایش تعداد
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // کاهش تعداد (حداقل ۱)
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
          throw new Error("Product not found!");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loding...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-xl text-red-600">{error || "محصول یافت نشد"}</div>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to the homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">
            Products
          </Link>
          <span className="mx-2">›</span>
          <span className="capitalize hover:text-gray-700">
            {product.category}
          </span>
          <span className="mx-2">›</span>
          <span className="text-gray-800 font-medium line-clamp-1">
            {product.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {product.title}
            </h1>

            <p className="text-gray-600 leading-relaxed text-base mb-8">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-3xl font-bold text-gray-900">
                {product.price.toFixed(2)}$
              </span>

              <div className="flex items-center gap-3 border border-gray-300 rounded-md ">
                <button
                  onClick={decreaseQuantity}
                  className="w-3 h-3 flex items-center justify-center text-xl font-medium text-gray-50 hover:bg-gray-100 transition-colors ml-3"
                  aria-label="کاهش تعداد"
                >
                  −
                </button>
                <span className="w-10 text-center font-medium text-gray-900">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="w-3 h-3 flex items-center justify-center text-xl font-medium text-gray-50 hover:bg-gray-100 transition-colors mr-3"
                  aria-label="افزایش تعداد"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-[rgb(194,12,12)] hover:bg-[#9a3412] text-white font-medium px-8 py-3 rounded-md flex items-center justify-center gap-2 transition-colors duration-200 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add To Cart
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">دسته‌بندی:</span>{" "}
                <span className="capitalize">{product.category}</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                <span className="font-medium text-gray-700">امتیاز:</span>{" "}
                {product.rating?.rate} / 5 ({product.rating?.count} نظر)
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-gray-50 rounded-xl p-6">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;



