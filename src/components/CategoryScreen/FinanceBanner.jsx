import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const FinanceBanner = ({ link }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative sm:h-[420px] h-[80vh] w-full flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden"
      style={{
        background: "linear-gradient(to right,#21996c, #90fa3e)",
      }}
    >
      <button
        onClick={() => navigate("/")}
        className="hidden md:flex md:absolute md:cursor-pointer top-6 left-6 text-white items-center gap-2 hover:text-gray-200 transition-colors"
      >
        <ArrowLeft size={24} />
        <span>Back</span>
      </button>

      <h1
        className={`text-5xl font-bold mb-4 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Easy Capital Access
      </h1>

      <p
        className={`text-lg font-semibold max-w-2xl transition-all duration-700 delay-100 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Personalized guidance for your goals with fast-track solutions designed
        to simplify your growth journey.
      </p>

      <p
        className={`text-lg font-light max-w-2xl transition-all duration-700 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Our experts create personalized pathways tailored to your needs. Instant
        access, simplified steps, and maximum impact.
      </p>

      <a
        href={link || "https://google.com"}
        target="_blank"
        className={`mt-6 px-6 py-3 text-xl font-semibold bg-red-500 rounded-full transition-all duration-700 delay-300 hover:bg-red-600 flex items-center gap-2 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Start Your Journey Now <ArrowRight size={20} />
      </a>

      <div
        className={`mt-6 flex items-center gap-2 text-sm transition-all duration-700 delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <span className="text-yellow-300 font-bold">Trusted by Thousands</span>
        <span className="text-white">
          | Providing Expert Guidance Every Step of the Way
        </span>
      </div>
    </div>
  );
};

export default FinanceBanner;
