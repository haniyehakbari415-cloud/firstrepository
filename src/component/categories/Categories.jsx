import { NavLink } from "react-router-dom";

function Categories() {
  const categories = [
    { name: "Women's Clothing", path: "/womensclothing" },
    { name: "Men's Clothing", path: "/mensclothing" },
    { name: "Jewelery", path: "/jewelery" },
    { name: "Electronics", path: "/electronics" },
  ];

  return (
    <div className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sticky top-24">
        <h3 className="text-xl font-serif text-center text-rose-700 mb-4">
          Categories
        </h3>
        <div className="w-16 h-0.5 bg-rose-300 mx-auto mb-6"></div>

        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat.id || cat.path} to={cat.path}>
              <NavLink
                to={cat.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-1 transition ${
                    isActive
                      ? "text-rose-600 font-medium"
                      : "text-gray-700 hover:text-rose-600"
                  }`
                }
              >
                <span className="text-rose-500 text-sm">▶</span>
                {cat.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;

