import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AjioCard from "../components/EcommerseImages/Ajio.png";
import Uber from "../components/FashionImages/Uber.png";
import AmazonShoppingVoucher from "../components/EcommerseImages/AmazonShoppingVoucher.svg";
import { Zomato, Dominos } from "./FoodImages/FoodImages";
import FlipkartGiftCard from "../components/EcommerseImages/FlipkartGiftCard.svg";
import { Nykaa } from "./EcommerseImages/EcommerseImages";

const FooterData = [
  {
    name: "Ajio",
    img: AjioCard,
    deals: [
      {
        heading: "Men's T-Shirt",
        description: "Stylish cotton T-shirts for daily wear and many more",
        image:
          "https://i.pinimg.com/550x/4a/d1/ea/4ad1eafbf4d5c2be7c86a26806afbd42.jpg",
      },
      {
        heading: "Happy Hours",
        description: "Get amazing discounts during happy hours.",
        image:
          "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
      },
      {
        heading: "Festive Offers",
        description: "Special discounts for festive seasons and many more.",
        image:
          "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
      },
      {
        heading: "Women's Handbag",
        description: "Trendy handbags with premium quality.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPm85N0ymHV3hn6nCeqqczjQi-p4HBDi-Qw&s",
      },
      {
        heading: "Sneakers",
        description: "Comfortable sneakers for all occasions and many more.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgoWRdP6-Jl7KDvGgQRk9JfKapm0TEhk3WQ&s",
      },
      {
        heading: "Denim Jacket",
        description: "Classic denim jackets for all seasons with many more.",
        image:
          "https://thumbs.dreamstime.com/b/jean-denim-female-jacket-isolated-long-sleeve-dark-blue-casual-fashion-women-clothing-91741998.jpg",
      },
    ],
  },
  {
    name: "Uber",
    img: Uber,
    deals: [
      {
        heading: "Uber Rentals",
        description: "Hourly car rental services at flexible rates.",
        image:
          "https://media.istockphoto.com/id/1328524448/photo/man-driving-his-car.jpg?s=612x612&w=0&k=20&c=-iUk9SrXxG8KTc18_F_ev97i9N5SPXKmRA9l7i86eZQ=",
      },
      {
        heading: "Uber XL",
        description: "Spacious rides for group travel and many more",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6ymKgcb16IapCSErEPmjP1eTMYI2nRM0iA&s",
      },
      {
        heading: "Uber Moto",
        description: "Affordable bike taxi rides for quick commutes.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQek1G1KecQIxw971ZmXbaA9axcmKzdMFn2fg&s",
      },
      {
        heading: "Uber Eats",
        description: "Fast food delivery from top restaurants.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBsK5Pt2gtiaKVMbulADPNMCgzuLMbM7Pqw&s",
      },
      {
        heading: "Uber Free Drive",
        description:
          "Fast drive from top uber transport, greate deals with free tokens",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBsK5Pt2gtiaKVMbulADPNMCgzuLMbM7Pqw&s",
      },
      {
        heading: "Uber Coupons",
        description:
          "free coupons from top restaurants of ubers and many mores.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBsK5Pt2gtiaKVMbulADPNMCgzuLMbM7Pqw&s",
      },
    ],
  },
  {
    name: "Amazon Shopping",
    img: AmazonShoppingVoucher,
    deals: [
      {
        heading: "Smartwatch",
        description: "Feature-packed smartwatch for fitness tracking.",
        image:
          "https://m.media-amazon.com/images/I/51XajvzAHGL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        heading: "Happy Hours",
        description: "Get amazing discounts during happy hours.",
        image:
          "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
      },
      {
        heading: "Festive Offers",
        description: "Special discounts for festive seasons and many more.",
        image:
          "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
      },
      {
        heading: "Bluetooth Earbuds",
        description: "Wireless earbuds with high-quality sound.",
        image: "https://m.media-amazon.com/images/I/51Oy4qcY9wL.jpg",
      },
      {
        heading: "Backpack",
        description: "Durable and spacious backpack for travel.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1TA4WlrkHJgXsqN1IgzQkKkw2OJxw4Klng&s",
      },
      {
        heading: "Kitchen Blender",
        description: "Powerful blender for daily cooking needs.",
        image:
          "https://media.istockphoto.com/id/1351622013/photo/electric-blender-with-fresh-homemade-fruit-smoothie-on-table.jpg?s=612x612&w=0&k=20&c=xV1WnJfVF0vmvx9SBZls-jyBla0nkESWgTOPylI0TBs=",
      },
    ],
  },
  {
    name: "Flipkart",
    img: FlipkartGiftCard,
    deals: [
      {
        heading: "Gaming Laptop",
        description: "High-performance laptop for gaming enthusiasts.",
        image:
          "https://media.istockphoto.com/id/1399174861/photo/gaming-laptop-computer-isolated-on-white.jpg?s=612x612&w=0&k=20&c=mBDSW82ipuMBFNqXZ5iq0PJwd_tl23XvEEnPkvaLRlA=",
      },
      {
        heading: "Happy Hours",
        description: "Get amazing discounts during happy hours.",
        image:
          "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
      },
      {
        heading: "Festive Offers",
        description: "Special discounts for festive seasons and many more.",
        image:
          "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
      },
      {
        heading: "Wireless Mouse",
        description: "Smooth and responsive wireless mouse.",
        image:
          "https://m.media-amazon.com/images/I/51s7Wdlj1GL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        heading: "Office Chair",
        description: "Ergonomic chair for long working hours.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3gc1lTT3XaoktZHyTbn6VBdTaMEYoe1GsA&s",
      },
      {
        heading: "Smart LED TV",
        description: "Full HD Smart LED TV with vibrant display.",
        image:
          "https://5.imimg.com/data5/SELLER/Default/2023/2/PA/DW/QY/61811538/zd-rtk0043s-43-inch-smart-led-tv-500x500.jpg",
      },
    ],
  },
  {
    name: "Nykaa",
    img: Nykaa,
    deals: [
      {
        heading: "Matte Lipstick",
        description: "Long-lasting, highly pigmented matte lipstick.",
        image:
          "https://m.media-amazon.com/images/I/41o9Q1TO1OL._AC_UF1000,1000_QL80_.jpg",
      },
      {
        heading: "Happy Hours",
        description: "Get amazing discounts during happy hours.",
        image:
          "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
      },
      {
        heading: "Festive Offers",
        description: "Special discounts for festive seasons and many more.",
        image:
          "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
      },
      {
        heading: "Face Serum",
        description:
          "Hydrating and brightening face serum with discount price.",
        image:
          "https://www.sageapothecary.in/cdn/shop/files/3_1.jpg?v=1702363934",
      },
      {
        heading: "Makeup Kit",
        description: "Complete makeup essentials in one kit.",
        image: "https://m.media-amazon.com/images/I/71IWdLegezL.jpg",
      },
      {
        heading: "Hair Straightener",
        description: "Salon-style straightening at home with extra care.",
        image:
          "https://media.istockphoto.com/id/1470788970/photo/hair-care-woman-studio-and-flat-iron-with-smile-happy-for-self-care-cosmetics-by-backdrop.jpg?s=612x612&w=0&k=20&c=b4gdUIloz0-sxbFtXcaapbjiRGJvnr6Uwjm3ccVErjw=",
      },
    ],
  },
  {
    name: "Dominos",
    img: Dominos,
    deals: [
      {
        heading: "Personal Pizza",
        description: "Small pizza at just ₹99.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyuoIiR7tDdmI5Kaq7iEtspXTo1MKQ2rs8w&s",
      },
      {
        heading: "Cheesy Treat",
        description: "Extra cheese at no extra cost.",
        image:
          "https://www.shutterstock.com/image-photo/cheese-fries-cheesy-chips-dish-600nw-2501622437.jpg",
      },
      {
        heading: "Party Combo",
        description: "Big savings on group meal deals.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUu9X1AtgDk6GIklF5ZGokXfP9sX54bHiUA&s",
      },
      {
        heading: "Cheesy Sticks",
        description: "Free cheesy sticks on orders ₹500+.",
        image:
          "https://t4.ftcdn.net/jpg/10/45/92/27/360_F_1045922783_vjSb56gP34PnLO3obPpScZq7kbKvxlKY.jpg",
      },
    ],
  },
  {
    name: "Zomato",
    img: Zomato,
    deals: [
      {
        heading: "Seasonal Sale",
        description: "Pizza Sale on top restaurants.",
        image:
          "https://media.istockphoto.com/id/1273709352/photo/pizza.jpg?s=612x612&w=0&k=20&c=6gNg2UHY55hgqpmXmo7nmsICSX1lYSkRr3MBQxpYRiw=",
      },
      {
        heading: "Free Delivery",
        description: "Enjoy meals with zero delivery fee.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQm6qa_mflJf2BIBmhpjB7wh8Jdv1QYjfEg&s",
      },
      {
        heading: "Weekend Special",
        description: "Exclusive weekend discounts.",
        image:
          "https://thumbs.dreamstime.com/b/weekend-special-rubber-stamp-text-inside-illustration-92114074.jpg",
      },
      {
        heading: "Combo Deals",
        description: "Buy 1 Get 1 on selected combos and other discounts",
        image:
          "https://www.shutterstock.com/image-vector/banner-combo-deal-flat-style-600nw-2207625021.jpg",
      },
      {
        heading: "Happy Hours",
        description: "Get amazing discounts during happy hours.",
        image:
          "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
      },
      {
        heading: "Festive Offers",
        description: "Special discounts for festive seasons and many more.",
        image:
          "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
      },
    ],
  },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-green-500 text-black p-8 rounded-t-[50px] mt-14"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Coupon Yogi Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2
            onClick={() => {
              navigate("/"), window.scroll(0, 0);
            }}
            className="text-xl font-bold cursor-pointer"
          >
            Coupon Yogi
          </h2>
          <p className="text-sm mt-2">
            We partner with thousands of retailers worldwide, with new merchants
            joining daily. Our team ensures the latest discount codes are
            available for you.
          </p>
        </motion.div>

        {/* Trending Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold relative pb-2 cursor-pointer">
            Trending
          </h3>

          {/* Slender Pipe (Underline) */}
          <div className="w-[75px] h-[4px] bg-black rounded-full relative overflow-hidden">
            <motion.div
              className="w-4 h-4 bg-white rounded-full absolute top-0 left-0"
              animate={{ x: ["0%", "450%"] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>

          <ul className="mt-2 space-y-1">
            {FooterData.map((item) => (
              <motion.li
                key={item}
                onClick={() => {
                  navigate(`/category/${item.name.toLowerCase()}`);
                  window.scrollTo(0, 0);
                  localStorage.setItem("category", JSON.stringify(item));
                }}
                className="hover:text-white transition duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {item.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold relative pb-2 cursor-pointer">
            Links
          </h3>

          <div className="w-[45px] h-[4px] bg-black rounded-full relative overflow-hidden">
            <motion.div
              className="w-4 h-4 bg-white rounded-full absolute top-0 left-0"
              animate={{ x: ["0%", "450%"] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>

          <ul className="mt-2 space-y-1">
            <motion.li
              onClick={() => {
                navigate("/"), window.scrollTo(0, 0);
              }}
              className="hover:text-white transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Home
            </motion.li>
            <motion.a
              href="#coupons"
              className="hover:text-white transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Coupons
            </motion.a>
            <motion.li
              onClick={() => {
                navigate("/about"), window.scrollTo(0, 0);
              }}
              className="hover:text-white transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              About
            </motion.li>
            <motion.li
              onClick={() => {
                navigate("/terms-and-conditions"), window.scrollTo(0, 0);
              }}
              className="hover:text-white transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Terms & Conditions
            </motion.li>
          </ul>
        </motion.div>

        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3
            onClick={() => {
              navigate("/contact"), window.scroll(0, 0);
            }}
            className="text-lg font-semibold relative pb-2 cursor-pointer"
          >
            Contact Us
          </h3>

          {/* Slender Pipe (Underline) */}
          <div className="w-[90px] h-[4px] bg-black rounded-full relative overflow-hidden">
            <motion.div
              className="w-4 h-4 bg-white rounded-full absolute top-0 left-0"
              animate={{ x: ["0%", "450%"] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </div>

          <p className="mt-2">
            Email:{" "}
            <a href="mailto:thecouponyogi@gmail.com" className="underline">
              thecouponyogi@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
      {/* Bottom Copyright Line */}
      <motion.div
        className="flex flex-wrap justify-evenly text-sm border-t border-black
border-t border-black  mt-6 pt-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="text-center text-sm pt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          © Copyright 2025 by Coupon Yogi.
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
