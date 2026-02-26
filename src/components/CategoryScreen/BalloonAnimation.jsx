import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gift = ({ color, size, delay, duration, xOffset }) => {
  const sizeClasses = {
    small: "w-16 h-20",
    medium: "w-20 h-24",
    large: "w-24 h-28"
  };

  return (
    <motion.div
      initial={{ y: "100vh", x: xOffset, opacity: 0 }}
      animate={{ y: "-100vh", x: [xOffset - 50, xOffset + 50], opacity: [1, 1, 0] }}
      exit={{ opacity: 0 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
        x: {
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      className={`absolute ${sizeClasses[size]} bottom-0`}
      
    >
      {/* Gift Box */}
      <div className={`w-full h-3/4 ${color} shadow-lg rounded-lg relative`}>
        {/* Vertical Ribbon */}
        <div className="absolute top-0 left-1/2 w-1/5 h-full bg-white -translate-x-1/2 rounded-lg" />
        {/* Horizontal Ribbon */}
        <div className="absolute top-1/2 left-0 w-full h-1/5 bg-white -translate-y-1/2 rounded-lg" />
      </div>
      
      {/* Gift Bow */}
      <div className="relative flex justify-center -top-21">
        <div className="w-8 h-8 bg-white rounded-full shadow-md transform rotate-45" />
        <div className="w-8 h-8 bg-white rounded-full shadow-md transform -rotate-45 -ml-4" />
      </div>
    </motion.div>
  );
};

const GiftAnimation = ({ showForSeconds }) => {
  const [gifts, setGifts] = useState([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (showForSeconds) {
      const timer = setTimeout(() => setVisible(false), showForSeconds * 1000);
      return () => clearTimeout(timer);
    }
  }, [showForSeconds]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !visible) return;

    const colors = [
      "bg-pink-400",
      "bg-blue-400",
      "bg-purple-400",
      "bg-yellow-400",
      "bg-green-400",
      "bg-red-400",
      "bg-indigo-400",
      "bg-teal-400",
      "bg-orange-400",
      "bg-cyan-400"
    ];
    const sizes = ["small", "medium", "large"];

    const newGifts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      xOffset: (window.innerWidth / 30) * i
    }));

    setGifts(newGifts);

    const interval = setInterval(() => {
      setGifts(prevGifts => {
        const newGift = {
          id: Date.now(),
          color: colors[Math.floor(Math.random() * colors.length)],
          size: sizes[Math.floor(Math.random() * sizes.length)],
          delay: 0,
          duration: 3 + Math.random() * 2,
          xOffset: Math.random() * window.innerWidth
        };
        return [...prevGifts, newGift];
      });
    }, 500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, visible]);

  if (prefersReducedMotion || !visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <AnimatePresence>
        {gifts.map((gift) => (
          <Gift key={gift.id} {...gift} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default GiftAnimation;
