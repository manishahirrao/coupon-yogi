
import { motion } from "framer-motion";

const Cards = () => {
  const cardsData = [
    {
      title: "Search",
      info: "Search through our extensive database of coupons, promo codes, and discount codes. We have offers on over 25,000 online retailers and receive exclusive promo codes for our followers.",
    },
    {
      title: "Discover",
      info: "Learn about new products, brands, and companies through our extensive list of categories. We help you find trending brands and line you up with their discount codes.",
    },
    {
      title: "Compare",
      info: "Explore our comparison charts to help you make informed decisions on your purchases. Check out our research and blog center to learn what’s best for you.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 p-8 mt-16 bg-green-500
                     py-20 px-10 rounded-lg shadow-2xl border border-green-700">
      {cardsData.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={index}
          viewport={{ once: true, amount: 0.3 }}
          className="w-[80%] cursor-pointer max-w-sm bg-white backdrop-blur-md p-8 rounded-3xl border border-green-600 
                     shadow-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-white
                     flex flex-col items-center space-y-4"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xl font-bold text-white">{index + 1}</span>
          </div>
          <h2 className="text-3xl font-extrabold mb-2 text-black-300 uppercase tracking-wide">{card.title}</h2>
          <p className="leading-relaxed">{card.info}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;