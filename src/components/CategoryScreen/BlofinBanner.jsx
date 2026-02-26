import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const BannerSection = ({ category }) => {
  const [isVisible, setIsVisible] = useState(false);
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative sm:h-[500px] h-[90vh] w-full flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-[#0a0a0a] pointer-events-none"></div>
      
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="hidden md:flex md:absolute md:cursor-pointer top-6 left-6 text-gray-400 items-center gap-2 hover:text-[#FF6B00] transition-colors z-10"
      >
        <ArrowLeft size={24} />
        <span>Back</span>
      </button>

      {/* Title */}
      <h1
        className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-700 relative z-10 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <span className="text-white">
          {category.name} Coupon Code: <span className="text-[#FF6B00]">{category.code}</span>
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className={`text-lg md:text-xl mb-2 transition-all duration-700 delay-100 relative z-10 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <span className="text-white">{category.name}</span> <span className="text-blue-400">Coupons And Discount Codes</span> | {formattedDate}
      </p>

      {/* Description */}
      <p
        className={`text-sm md:text-base text-gray-400 max-w-4xl mb-8 leading-relaxed transition-all duration-700 delay-200 relative z-10 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {category.name} total of active coupons today: 53. The date of the last update {formattedDate}; The best active coupon:-. You can use it to get the biggest discount & deal & free shipping on {category.name}, 100% verification of each Coupon & Deal.
      </p>

      {/* Call-to-Action Button */}
      <a
        href={category.link || "https://google.com"}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-2 px-8 py-3 text-lg font-semibold bg-[#FF6B00] hover:bg-[#FF8C00] text-white rounded-full transition-all duration-300 delay-300 flex items-center gap-2 shadow-lg shadow-orange-500/20 relative z-10 ${
          isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
        }`}
      >
        Get {category.discount} Off
        <ArrowRight size={20} />
      </a>

      {/* Trust Badge */}
      <div
        className={`mt-6 flex items-center gap-2 text-sm transition-all duration-700 delay-400 relative z-10 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdG0yE3I-o0CyLsQqKrE37om-2l8gVbf4Fw&s"
          alt="Reviewer"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <span className="text-white">
          Reviewed by <span className="text-blue-400">Steven R. Boal</span> ✔ Fact Checked
        </span>
      </div>
    </div>
  );
};

BannerSection.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    code: PropTypes.string,
    link: PropTypes.string,
    discount: PropTypes.string,
  }).isRequired,
};

export default BannerSection;
