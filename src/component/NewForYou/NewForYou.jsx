import { useEffect, useState } from "react";
import ProductCard from "../ProductList/ProductCard";
import { Link } from "react-router-dom";

function NewForYou() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const randomProducts = [...data]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

      setProducts(randomProducts);
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="bg-red-50 py-10">
      
      <h2 className="text-center text-3xl font-bold mb-8 font-lobster">
        New For You
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
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
    </section>
  );
}

export default NewForYou;