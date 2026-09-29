function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden 
                      hover:shadow-2xl transition-shadow duration-300 flex flex-col">

        <div className="h-52 flex items-center justify-center p-6 bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-4 min-h-[40px]">
            {product.title}
          </h3>
  
          <div className="flex items-center justify-between mb-5">
            
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-sm text-gray-600">{product.rating?.rate}</span>
            </div>

            <span className="text-sm font-semibold text-gray-800">
              {product.price}$
            </span>
          </div>

          <button className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 
                           text-gray-700 text-sm font-medium rounded-lg 
                           transition-colors duration-200 mt-auto">
            Show Details
          </button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;