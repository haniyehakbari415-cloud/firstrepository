import { useEffect, useState } from "react";
import ProductCard from "../ProductList/ProductCard"; 
import { Link } from "react-router-dom";
import Categories from "../categories/Categories";

function Electronics() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading products...
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="bg-gray-100 py-8">
        <h2 className="text-3xl font-serif text-center text-gray-800 font-lobster">
          Electronics
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="block h-full"
              >
                <ProductCard product={product} />
              </Link>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-64 flex-shrink-0">
            <Categories />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Electronics;