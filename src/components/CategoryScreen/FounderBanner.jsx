import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import giftImg from "./image.png";
import FunderVideo from "..//..//../public/videos/FunderPro.webm";
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

  function getDailyOffer() {
    const date = new Date();
    const seed =
      date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const random = (seed * 9301 + 49297) % 233280;
    const result = Math.floor((random / 233280) * (100 - 40 + 1)) + 42;
    return `$${result}`;
  }

  return (
    <div className="relative sm:h-[420px] h-[80vh] w-full flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden bg-[#0f1527] md:bg-transparent">
      {/* Background Video - Only visible on desktop */}
      <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={FunderVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black-50"></div>
      </div>

      {/* Mobile Background with Blur Effect */}
      <div className="md:hidden absolute top-0 right-0 w-32 h-32 bg-[#491a2d] rounded-full filter blur-3xl opacity-70"></div>

      {/* Decorative Ribbons */}
      {category.name === "Binance red packet" && (
        <div
          className={`absolute w-full h-full pointer-events-none ${
            isVisible ? "animate-ribbon" : "translate-y-full"
          }`}
        >
          <div className="ribbon left-[30%] bg-pink-400"></div>
          <div className="ribbon left-[40%] bg-yellow-400 animation-delay-150"></div>
          <div className="ribbon right-[30%] bg-orange-400 animation-delay-250"></div>
          <div className="ribbon right-[40%] bg-indigo-400 animation-delay-350"></div>
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="hidden md:flex md:absolute md:cursor-pointer top-6 left-6 text-white items-center gap-2 hover:text-gray-200 transition-colors"
      >
        <ArrowLeft size={24} />
        <span>Back</span>
      </button>

      {/* Title */}
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {category.code === "Click below" ? (
          <>{category.name} Latest Coupon Code — Grab It Now!</>
        ) : category.name !== "Binance red packet" ? (
          <>
            {category.name === "Mexc" ? "MEXC" : category.name} Coupon Code:{" "}
            <span className="text-[#e42338]">{category.code}</span>
          </>
        ) : (
          <>Binance Red Packet</>
        )}
      </h1>

      {/* Description */}

      {category.name !== "Binance red packet" && (
        <p
          className={`text-base sm:text-lg font-semibold max-w-2xl transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {category.name} Coupons And Discount Codes | {formattedDate}
        </p>
      )}
      {category.name !== "Binance red packet" && (
        <p
          className={`text-sm sm:text-base md:text-lg font-light max-w-2xl transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {category.name} total of active coupons today: {53}. The date of the
          last update {formattedDate}; The best active coupon:{""}
          {"-"}. You can use it to get the biggest discount & deal & free
          shipping on {category.name}, 100% verification of each Coupon & Deal.
        </p>
      )}

      {/* Call-to-Action Button */}
      {category.name === "Binance red packet" && (
        <div className="flex items-center justify-center flex-col">
          <p
            className={`text-lg font-light max-w-2xl transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Every day a red packed code for you only for new signup
          </p>
          <div className="relative w-46 h-38 mb-4">
            {/* Background with Image */}
            <div
              className="relative w-full h-46 rounded-md"
              style={{
                backgroundImage: `url(${giftImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Text Overlay */}
              <p className="absolute inset-0 top-20 flex items-center justify-center text-white font-bold text-[2rem]">
                {getDailyOffer()}
              </p>
            </div>
          </div>
        </div>
      )}

      <a
        href={category.link || "https://google.com"}
        target="_blank"
        className={`mt-4 md:mt-6 w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-xl font-semibold bg-[#e42338] rounded-full transition-all duration-200 delay-300 hover:opacity-60 flex items-center justify-center gap-2 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {category.name !== "Binance red packet" ? (
          <>
            Get {category.discount} Off{" "}
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </>
        ) : (
          <>
            Claim Your Coupon <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </>
        )}
      </a>
      {/* Footer Section */}
      <div
        className={`mt-4 md:mt-6 flex items-center gap-2 text-xs sm:text-sm transition-all duration-700 delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdG0yE3I-o0CyLsQqKrE37om-2l8gVbf4Fw&s"
          alt="Reviewer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
        />
        <span>
          Reviewed by <a href="#">Steven R. Boal</a> ✔ Fact Checked
        </span>
      </div>
    </div>
  );
};

export default BannerSection;
