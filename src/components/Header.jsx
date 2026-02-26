import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const togg = (item) => {
    if (item === "#") {
      navigate("/");
    } else {
      navigate(`${item.path}`);
    }
  };

  return (
    <motion.nav
      className="z-10 container mx-auto px-6 py-4 flex items-center justify-between tracking-wide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center space-x-2 cursor-pointer"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate("/")}
      >
        <span className="text-2xl font-extrabold drop-shadow-md">Coupon</span>
        <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-200 to-green-500 bg-clip-text text-transparent drop-shadow-md">
          Yogi
        </span>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Our Team", path: "/team" },
          { name: "Terms & Condition", path: "/terms-and-conditions" },
        ].map((item, index) => (
          <motion.button
            key={index}
            onClick={() => togg(item)}
            className="text-gray-700 font-bold hover:text-green-500 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {item.name}
          </motion.button>
        ))}

        <motion.a
          href="#coupons"
          onClick={() => togg("#")}
          className="hidden md:block text-gray-700 font-bold hover:text-green-500 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Coupons
        </motion.a>
      </div>

      {/* Contact Button */}
      <motion.button
        onClick={() => navigate("/contact")}
        className="hidden md:block text-white px-6 py-2 cursor-pointer rounded-full hover:bg-green-600 transition-colors"
        style={{ background: "linear-gradient(to right, #90fa3e, #21996c)" }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        Contact
      </motion.button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 z-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="text-black" size={30} />
        ) : (
          <Menu className="" size={30} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {[
              { name: "Home", path: "/" },
              { name: "Coupons", path: "/" },
              { name: "About", path: "/about" },
              { name: "Our Team", path: "/team" },
              { name: "Terms & Condition", path: "/terms-and-conditions" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  navigate(`${item.path}`);
                }}
                className="text-gray-900 text-xl font-bold hover:text-green-500"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
