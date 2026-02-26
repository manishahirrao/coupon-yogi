
import { motion } from "framer-motion";
import { GiftIcon } from "lucide-react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
const formatNumber = (num) => {
  if (num >= 1e9) return (num / 1e9).toFixed(1) + "B"; // Billion
  if (num >= 1e6) return (num / 1e6).toFixed(1) + "M"; // Million
  if (num >= 1e3) return (num / 1e3).toFixed(1) + "K"; // Thousand
  return num; // No formatting needed
};
const CompanyDescription = () => {
  const navigate = useNavigate();
  return (
    <motion.section className="overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 relative">
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.1),transparent)] pointer-events-none"></div> */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 mt-8 animate-float shadow-lg">
            <GiftIcon className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in">
            About Coupon <span className="text-green-600">Yogi</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl animate-slide-up leading-relaxed">
            We believe in the power of gifts. It looks like a smile, feels like
            a hug, and sounds like an ecstatic "Thank you!"
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-2">
                <CountUp
                  start={0}
                  end={1000000}
                  duration={2}
                  formattingFn={formatNumber} // Apply formatting
                />
                +
              </h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-2">
                <CountUp
                  start={0}
                  end={50000}
                  duration={2}
                  formattingFn={formatNumber} // Apply formatting
                />
                +
              </h3>
              <p className="text-gray-600">Active Coupons</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-2">
                <CountUp
                  start={0}
                  end={100}
                  duration={2}
                  formattingFn={formatNumber} // Apply formatting
                />
                +
              </h3>
              <p className="text-gray-600">Partner Brands</p>
            </div>
          </div>
          <button onClick = {() => {navigate('/about'), window.scroll(0,0)}} className="bg-white text-green-600 px-12 py-4 mt-15 cursor-pointer border-1 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors duration-300 transform hover:scale-105 shadow-xl">
            About Coupon Yogi
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default CompanyDescription;
