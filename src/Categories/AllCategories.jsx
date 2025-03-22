import Heading from "../Components/Heading";
import CategoryCard from "./CategoryCard";

const AllCategories = () => {
  const categoriesData = [
    { name: "Clothes", link: "/categories/clothes" },
    { name: "Shoes", link: "/categories/shoes" },
    { name: "Jewelry", link: "/categories/jewelry" },
    { name: "Accessories", link: "/categories/accessories" },
  ];

  return (
    <div>
      <Heading>Browse Categories</Heading>
      <CategoryCard categories={categoriesData} />
    </div>
  );
};

export default AllCategories;
