import { Link } from "react-router-dom";

const CategoryCard = ({ categories }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className="block">
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition h-full">
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
