import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let dropdownTimeout;

  const navigation = [
    { name: "Home", to: "/", current: true },
    { name: "Categories", to: "#", current: false, dropdown: true },
    { name: "Products", to: "/products", current: false },
    { name: "Contact", to: "/contact", current: false },
  ];

  const categories = [
    { name: "Clothes", to: "/categories/clothes" },
    { name: "Shoes", to: "/categories/shoes" },
    { name: "Jewelry", to: "/categories/jewelry" },
    { name: "Accessories", to: "/categories/accessories" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout); // Prevent dropdown from closing immediately
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Delay hiding to allow time for selection
  };

  return (
    <header className="bg-gray-900 text-gray-300 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
              className="h-10"
            />
            <span className="text-lg font-semibold">Shop Now</span>
          </div>

          {/* Navigation */}
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-6">
              {navigation.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Dropdown Button */}
                    <Link className="text-sm font-medium flex items-center py-2">
                      {item.name}
                    </Link>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute left-0 w-40 text-sm shadow-lg rounded-md z-10">
                        {categories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.to}
                            className="block px-4 py-2 text-gray-800 hover:bg-black"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-500 hover:bg-gray-200 hover:text-white",
                      "rounded-md px-2 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
