import { Link } from "react-router-dom";

const Card = ({ categories }) => {
  return (
    <div className="flex container mx-auto px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3 px-15">
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className="block">
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition flex flex-col justify-between h-full">
              {/* Product Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              
              {/* Product Name */}
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              
              {/* Product Description */}
              <p className="text-gray-600 mb-2">{category.description}</p>
              
              {/* Product Price */}
              <p className="text-xl font-semibold text-gray-900">${category.price}</p>
              
              {/* Product Rating */}
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < category.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 15l-3.5 2.3 1-4.8L3 8.6l4.8-.4L10 3l1.2 4.2 4.8.4-3.5 3.9 1 4.8L10 15z"
                    />
                  </svg>
                ))}
              </div>

              <button className="mt-4 text-blue-500 hover:text-blue-700">Shop Now</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
