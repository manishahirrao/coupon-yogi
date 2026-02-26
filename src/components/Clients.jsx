
import { motion } from "framer-motion";

const Clients = () => {
  const clients = [
    {
      name: "Udemy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
    },
    {
      name: "fiverr",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/1920px-Fiverr_Logo_09.2020.svg.png",
      color: "green",
    },
    {
      name: "Coursera",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coursera_logo_%282020%29.svg/1920px-Coursera_logo_%282020%29.svg.png",
    },
    {
      name: "Skill Share",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Skillshare_logo_2020.svg",
      color: "hsl(200deg 17.91% 26.27%)",
    },
    {
      name: "Nykaa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Nykaa_New_Logo.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Swiggy",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/27/Swiggy_logo_%28old%29.svg",
    },
    {
      name: "Flipkart",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg",
    },
    {
      name: "Ajio",
      logo: "https://cdn.brandfetch.io/idr5xgDFc2/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
  ];

    const cardVariants = {
      hidden: { opacity: 0, y: 50 }, // Start invisible & move up
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate in
      hover: { scale: 1.05, transition: { duration: 0.3 } }, // Add hover effect
    };

  return (
    <section className="container py-20 px-4 mx-auto overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase">
          Our Clients
        </h2>
      </div>
      <div className="relative">
        <div className="flex space-x-6 animate-marquee">
          {clients.map((client, index) => (
            <motion.div
              key={index} 
              variants={cardVariants} // Apply animation
              initial="hidden"
              whileHover="hover" // Add hover animation
              whileInView="visible" // Animate when it comes into view
              viewport={{ once: true, amount: 0.5 }} // Ensures smooth effect when 50% of the element is in view
              className="flex-shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{ backgroundColor: client.color }}
                className="p-2 w-32 h-16 object-contain rounded md:w-40 md:h-20 lg:w-48 lg:h-24 transition-all duration-300 ease-in-out transform hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
