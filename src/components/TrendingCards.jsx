
import { motion } from "framer-motion";

const trendingDeals = [
  {
    id: 1,
    name: "Amazon",
    discount: "20% Off on Home & Kitchen",
    duration: "(Limited Time)",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    bgColor:"white"
  },
  {
    id: 2,
    name: "Fiverr",
    discount: "Get 10% OFF",
    duration: "(Just for Today)",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/1920px-Fiverr_Logo_09.2020.svg.png",
    bgColor:"green"
  },
  {
    id: 3,
    name: "Nykaa",
    discount: "Get Upto 40% Off",
    duration: "(Just for Today)",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Nykaa_New_Logo.svg",
  },
  {
    id: 4,
    name: "Ajio",
    discount: "10% Off On Clothing",
    duration: "(Just for Today)",
    link: "#",
    logo: "https://cdn.brandfetch.io/idr5xgDFc2/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TrendingCards = () => {
  return (
    <div className="flex justify-center">
      <div className="p-6 text-center w-[90%]">
        <h2 className="text-3xl font-bold mb-8">TOP TRENDING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trendingDeals.map((deal) => (
            <motion.div
              key={deal.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="border-[3px] h-[360px] bg-gray-900 border-green-500 rounded-[5%] shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center justify-between p-4"
            >
              <img
                src={deal.logo}
                alt={deal.name}
                className="w-full bg-white h-[184px] object-contain rounded-xl p-4"
              />
              <div className="flex-1 flex flex-col items-center justify-center">
                <p className="font-semibold text-white text-lg">
                  {deal.discount}
                </p>
                <p className="text-sm text-white mt-2">{deal.duration}</p>
              </div>
              <a
                href={deal.link}
                className="mt-3 inline-block bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition-colors"
              >
                Go To {deal.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCards;
