import Card from "../Components/Card";
import Heading from "../Components/Heading";


const LatestProduct = () => {
  // Define the categories array with category data
  const categoriesData = [
    {
      name: "Men's Shirt",
      description: "Men's casual slim fit",
      price: 55,
      rating: 4,
      image: "https://picsum.photos/seed/42/200/300",
      link: "/categories/mens-shirt",
    },
    {
      name: "Casual Shoes",
      description: "Comfortable and stylish",
      price: 40,
      rating: 4,
      image: "https://picsum.photos/seed/43/200/300",
      link: "/categories/casual-shoes",
    },
    {
      name: "Gold Necklace",
      description: "Exquisite design for special occasions",
      price: 120,
      rating: 5,
      image: "https://picsum.photos/seed/44/200/300",
      link: "/categories/gold-necklace",
    },
    {
      name: "Leather Wallet",
      description: "Durable leather with elegant stitching",
      price: 30,
      rating: 3,
      image: "https://picsum.photos/seed/45/200/300",
      link: "/categories/leather-wallet",
    },
    {
        name: "Skirt",
        description: "Elegant look with floral patterns",
        price: 30,
        rating: 3,
        image: "https://picsum.photos/seed/46/200/300",
        link: "/categories/leather-wallet",
      },
      {
        name: "frock",
        description: "Nice linen Frocks with nice hand works",
        price: 30,
        rating: 3,
        image: "https://picsum.photos/seed/47/200/300",
        link: "/categories/leather-wallet",
      },
  ];

  return (
    <div>
      <Heading>Latest Products</Heading>
      <Card categories={categoriesData} />
    </div>
  );
};

export default LatestProduct;
