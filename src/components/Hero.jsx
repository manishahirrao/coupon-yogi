import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { trendingStores } from "./Category";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  const [typewriterText, setTypewriterText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Deals", "Offers", "Many More"];
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [searchOncClick, setSearchOnClick] = useState("");
  const notavailable = () => {
    alert("Sorry, this category is not available");
  };
  function searchProduct(query) {
    if (!query.trim()) {
      setSearchedData([]);
      return;
    }
    const results = trendingStores.flatMap((category) =>
      category.subcategories.filter((sub) =>
        sub.name.toLowerCase().includes(query.toLowerCase())
      )
    );
    setSearchedData(results);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      searchProduct(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const onSearch = (searchOncClick) => {
    const results = trendingStores.flatMap((category) =>
      category.subcategories.filter((sub) =>
        sub.name.toLowerCase().includes(searchOncClick.toLowerCase())
      )
    );
    if (results.length > 0) {
      navigate(`/category/${results[0].name.toLowerCase()}`);
    } else {
      notavailable();
    }
  };

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (typingIndex < currentText.length) {
        setTypewriterText(currentText.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      } else {
        setTimeout(() => {
          setTypingIndex(0);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, 1000);
      }
    }, 150);
    return () => clearTimeout(timeout);
  }, [typingIndex, currentTextIndex]);

  return (
    <motion.div
      className="container mx-auto px-4 py-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The Top Coupon Codes, Discount codes, &
          <span className="text-green-500"> {typewriterText}</span>
          <span className="text-green-500">|</span>
        </h1>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Your source for coupons at checkout. CouponYogi offers the biggest
          working promo codes and exclusive discounts.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-none shadow-lg shadow-purple-500/50"></div>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value),
                    setSearchOnClick(e.target.value);
                }}
                placeholder="Search..."
                className="w-full px-6 py-4 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center gap-2">
                <Search
                  onClick={() => {
                    onSearch(searchOncClick);
                  }}
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>
          {/* Search Dropdown */}
          {searchedData.length > 0 && (
            <ul className="absolute left-0 w-full mt-2 bg-white shadow-lg rounded-md max-h-60 overflow-y-auto border border-gray-300 z-10">
              {searchedData.map((product, index) => (
                <li
                  key={index}
                  className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
                  onClick={() => {
                    // onSearch(product.name.toLowerCase());
                    localStorage.setItem("category", JSON.stringify(product));
                    navigate(`/category/${product.name.toLowerCase()}`);
                    setSearchedData([]);
                  }}
                >
                  <span className="text-gray-700 font-medium">
                    {product.name}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
