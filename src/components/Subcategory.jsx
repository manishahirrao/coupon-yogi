import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Subcategory = ({ category }) => {
  const navigate = useNavigate();
  const popupRef = useRef(null);
  const [position, setPosition] = useState("left-0"); // Default position

  useEffect(() => {
    if (popupRef.current) {
      const rect = popupRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      if (rect.right > screenWidth) {
        setPosition("right-0"); // Shift left if overflowing
      } else if (rect.left < 0) {
        setPosition("left-0"); // Shift right if too left
      } else {
        setPosition("left-0"); // Default
      }
    }
  }, [category]); // Recalculate when category changes

  return (
    <div
      ref={popupRef}
      className={`absolute ${position} mt-2 md:w-[600px] w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}
    >
      <div className="bg-white rounded-lg shadow-xl p-6">
        <div className="grid grid-cols-2 gap-4">
          {category?.subcategories?.map((sub, subIndex) => (
            <div
              key={subIndex}
              className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
              onClick={() => {
                localStorage.setItem("category", JSON.stringify(sub));
                window.scrollTo(0, 0);
                navigate(
                  `/category/${sub.name.toLowerCase().replace(/\s+/g, "-")}`
                );
              }}
            >
              <img
                src={sub.img}
                alt={sub.name}
                className="w-26 h-16 rounded-lg"
              />
              <div className="flex-col">
                <p className="text-gray-700 font-medium">{"Upto 20% Off"}</p>
                <span className="text-gray-700 font-medium">{sub.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subcategory;
