import { useState } from "react";
import Subcategory from "./Subcategory";
import grow from "./EducationImages/grow.svg";
import simpli from "./EducationImages/simpli.svg";
import skillshare from "./EducationImages/skillshare.svg";
import udemy from "./EducationImages/udemy.png";
import coursera from "./EducationImages/coursera.png";
import edureka from "./EducationImages/edureka.jpg";
import {
  Zomato,
  Swiggy,
  PizzaHutt,
  Kfc,
  EatSure,
  Dominos,
  BehrouzBiryani,
  BurgerKing,
} from "./FoodImages/FoodImages";
import {
  AmazonShoppingVoucher,
  FlipkartGiftCard,
  Nykaa,
  AjioCard,
} from "./EcommerseImages/EcommerseImages.js";
import BodyShop from ".//HealthImages/BodyShop.svg";
import mamaearth from ".//HealthImages/mamaearth.jpeg";
import Man from "./HealthImages/Man.jpeg";
import BombayShaving from "./HealthImages/BombayShaving.png";
import WowSkin from "./HealthImages/WowSkin.jpeg";
import gift from "./FinanceImages/gifg.jpg";
// import Mexc from "./FinanceImages/Mexc.png";
import ByBit from "./FinanceImages/ByBit.png";
// import Bitget from "./FinanceImages/Bitget.png";
import Weex from "./FinanceImages/Weex.png";
import Bitvavo from "./FinanceImages/Bitvavo.png";
import OxBroker from "./FinanceImages/quotex.svg";
import Manven from "./FinanceImages/Manven.webp";
// import Funder from "./FinanceImages/Funder.jpg";
import SafePal from "./FinanceImages/SafePal.png";
// import E8 from "./FinanceImages/E8.png";
import Phemex from "./FinanceImages/Phemex.png";
import Shoppers from "./FashionImages/Shoppers.png";
import Wildcraft from ".//FashionImages/Wildcraft.png";
import SareesKart from "./FashionImages/SareesKart.jpg";
import Xyxx from "./FashionImages/Xyxx.jpeg";
import Souled from "./FashionImages/Souled.png";
import Uber from "./FashionImages/Uber.png";
import Ola from "./FashionImages/Ola.png";
import VidIQ from "./MarkingImages/VidIQ.png";
import GetResponse from "./MarkingImages/GetResponse.jpg";

const categories = [
  {
    img: "/images/education.jpg",
    discount: "UP TO 40% OFF",
    name: "Education",
    transform: "rotate-1 translate-y-2",
    subcategories: [
      {
        name: "Edureka",
        img: edureka,
        discount: "$2000",
        deals: [
          {
            heading: "Blockchain Development",
            description: "Understand smart contracts, decentralized apps.",
            image:
              "https://media.istockphoto.com/id/1319612751/photo/digital-blockchain-technology-concept.jpg?s=612x612&w=0&k=20&c=R2cAqshsaXJMA_9icCcFSjTWmJqPbtyM9SgJkkDiCYY=",
            cost: "50",
          },
          {
            heading: "AI & Deep Learning",
            description:
              "Dive into neural networks, NLP, and AI-driven applications.",
            image:
              "https://media.istockphoto.com/id/1195379783/photo/artificial-intelligence-ai-research-of-robot-and-cyborg-development-for-future-of-people.jpg?s=612x612&w=0&k=20&c=7REx5cCbXf_vyTrLUsH9doU3loBhLdoW8FcKKGt_iJw=",
            cost: "40",
          },
          {
            heading: "Full-Stack Course",
            description:
              "Learn MERN stack with hands-on projects and expert guidance.",
            image:
              "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg",
            cost: "52",
          },
        ],
      },
      {
        name: "Coursera",
        img: coursera,
        discount: "$1993",
        deals: [
          {
            heading: "AI Course",
            description: "Learn AI with top instructors.",
            image:
              "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?t=st=1739415956~exp=1739419556~hmac=0096e4fcf42178fed170a2ce372cbb8bed1a4ef84e894fd176b8bf7263d9a479&w=740",
            cost: "43",
          },
          {
            heading: "Data Science",
            description: "Master data analysis and ML.",
            image:
              "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cost: "21",
          },
          {
            heading: "Cloud Cert",
            description: "Get certified in cloud computing.",
            image:
              "https://img.freepik.com/free-vector/cloud-computing-infographic_23-2147488748.jpg?t=st=1739416120~exp=1739419720~hmac=58de321213b0b1050159fcbcbf259ed121dc8eb0804837fbf06153fb45e11200&w=740",
            cost: "23",
          },
        ],
      },
      {
        name: "Udemy",
        img: udemy,
        discount: "$1200",
        deals: [
          {
            heading: "Web Dev",
            description:
              "Learn full-stack web development with Ai and genrative skills",
            image:
              "https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?t=st=1739416721~exp=1739420321~hmac=d2c8480a7fc64cc075d10e8467c9a61a32ad3d13357fe46eb48c93de199d65f2&w=740",
            cost: "32",
          },
          {
            heading: "React Master",
            description:
              "Master React with hands-on work with real world prjects.",
            image:
              "https://img.freepik.com/premium-vector/hand-drawn-quantum-illustration_23-2149243395.jpg?w=740",
            cost: "32",
          },
          {
            heading: "Blockchain Development",
            description:
              "Understand smart contracts, decentralized apps and many more.",
            image:
              "https://media.istockphoto.com/id/1319612751/photo/digital-blockchain-technology-concept.jpg?s=612x612&w=0&k=20&c=R2cAqshsaXJMA_9icCcFSjTWmJqPbtyM9SgJkkDiCYY=",
            cost: "21",
          },
        ],
      },
      {
        name: "Skill Share",
        img: skillshare,
        discount: "$1250",
        deals: [
          {
            heading: "Graphic Design",
            description: "Learn design fundamentals.",
            image:
              "https://media.istockphoto.com/id/1415537875/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.jpg?s=612x612&w=0&k=20&c=9ufB0QZ-LPcz14zLh909QEEbmDmcfIYzhBsST3hXbMs=",
            cost: "32",
          },
          {
            heading: "Video Editing",
            description: "Master Premiere Pro & After Effects.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8sE0LQ-E9_zmSce98hrTPsPHmeWsY9FnvBQ&s",
            cost: "50",
          },
          {
            heading: "SQL Bootcamp",
            description: "Learn SQL from basics to advanced.",
            image:
              "https://img.freepik.com/free-vector/abstract-technology-sql-illustration_23-2149237139.jpg?t=st=1739416796~exp=1739420396~hmac=6107752f258542aa1f2e3dbeba162887b6a576e8a7039f0aba92e69227c292a4&w=740",
            cost: "10",
          },
        ],
      },
      {
        name: "SimpliLearn",
        img: simpli,
        discount: "$2000",
        deals: [
          {
            heading: "Data Science",
            description: "Explore machine learning and data analysis.",
            image:
              "https://c8.alamy.com/comp/2RJDKYN/big-data-science-analytics-analysis-information-technology-internet-concept-2RJDKYN.jpg",
            cost: "30",
          },
          {
            heading: "Cyber Security",
            description: "Learn ethical hacking and risk management.",
            image:
              "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=",
            cost: "23",
          },
          {
            heading: "Cyber Security",
            description: "Learn ethical hacking and other hacking tecqunic",
            image:
              "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=",
            cost: "30",
          },
        ],
      },
      {
        name: "Growthschool.io",
        img: grow,
        discount: "$1990",
        deals: [
          {
            heading: "Personal Branding",
            description: "Build a strong online presence and brand identity.",
            image:
              "https://media.istockphoto.com/id/1149852758/photo/personal-branding-word-on-wooden-cube.jpg?s=612x612&w=0&k=20&c=IHiVXcO1o5_qzYo_Yn5mV7LVfbTqMl6dp2LFNBz6dsM=",
            cost: "32",
          },
          {
            heading: "Content Creation",
            description: "Master content strategy for social media & blogs.",
            image:
              "https://media.istockphoto.com/id/1253222716/photo/content-writer.jpg?s=612x612&w=0&k=20&c=91wo8y2mXvboV6mdLE1E9bQKqJ0fgTfO0g1cojssvVU=",
            cost: "22",
          },
          {
            heading: "Startup Fund",
            description: "Learn startup funding & growth and many more.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Qzqu27AMzNcKQ0rMl__FovYs-GzPhEW5Gg&s",
            cost: "23",
          },
        ],
      },
    ],
  },
  {
    img: "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
    discount: "UP TO 50% OFF",
    name: "Food",
    transform: "rotate-1 translate-y-2",
    subcategories: [
      {
        name: "Zomato",
        img: Zomato,
        discount: "$1200",
        deals: [
          {
            heading: "Seasonal Sale",
            description: "Pizza Sale on top restaurants.",
            image:
              "https://media.istockphoto.com/id/1273709352/photo/pizza.jpg?s=612x612&w=0&k=20&c=6gNg2UHY55hgqpmXmo7nmsICSX1lYSkRr3MBQxpYRiw=",
            cost: "71",
          },
          {
            heading: "Free Delivery",
            description: "Enjoy meals with zero delivery fee.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQm6qa_mflJf2BIBmhpjB7wh8Jdv1QYjfEg&s",
            cost: "32",
          },
          {
            heading: "Weekend Special",
            description: "Exclusive weekend discounts.",
            image:
              "https://thumbs.dreamstime.com/b/weekend-special-rubber-stamp-text-inside-illustration-92114074.jpg",
            cost: "61",
          },
        ],
      },
      {
        name: "Swiggy",
        img: Swiggy,
        discount: "$1430",
        deals: [
          {
            heading: "Pizza Deals",
            description: "Save ₹100 on your first order.",
            image:
              "https://img.freepik.com/premium-vector/pizza-special-offers-with-dark-background-social-media-template_559221-102.jpg?semt=ais_hybrid",
            cost: "32",
          },
          {
            heading: "Express Delivery",
            description: "Get your food in under 30 minutes.",
            image:
              "https://media.istockphoto.com/id/849921508/vector/express-delivery-icon-concept-truck-with-stop-watch-icon-for-service-order-fast-free-and.jpg?s=612x612&w=0&k=20&c=HqxEhRqWAHW1_1iZPqumhAD1471RLH1b-B0XtQQ3gKc=",
            cost: "41",
          },
          {
            heading: "Happy Hours",
            description: "Get amazing discounts during happy hours.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",

            cost: "32",
          },
        ],
      },
      {
        name: "Pizza Hut",
        img: PizzaHutt,
        discount: "$1340",
        deals: [
          {
            heading: "Buy 1 Get 1",
            description: "Double the pizza, same price with great offers.",
            image:
              "https://i.pinimg.com/736x/a5/77/a1/a577a1d30853d67ff3810a00d5d83dfa.jpg",
            cost: "21",
          },
          {
            heading: "Cheese Burst",
            description: "Extra cheese at no extra cost with many more offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8hooFOUOp2E_hZLz9Mzbq05eWZEf_07eCg&s",
            cost: "11",
          },
          {
            heading: "Happy Hours",
            description: "Get amazing discounts during happy hours.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
          },
        ],
      },
      {
        name: "KFC",
        img: Kfc,
        discount: "$1000",
        deals: [
          {
            heading: "Bucket Offer",
            description: "half off on KFC chicken buckets.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUQH-8p5QvLnH4of-psDapvSuGVzMFBUkUg&s",
            cost: "51",
          },
          {
            heading: "Zinger Combo",
            description: "Zinger Burger + Fries + Drink deal.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmj4mv6BVCxQb4hL2QyNSt_z4IKxQf3Fk7VA&s",
            cost: "54",
          },
          {
            heading: "Popcorn Chicken",
            description: "Special discount on crispy popcorn.",
            image:
              "https://thumbs.dreamstime.com/b/container-popcorn-chicken-smooth-neutral-background-providing-appetizing-artistic-presentation-enhances-338240901.jpg",
            cost: "15",
          },
        ],
      },
      {
        name: "Eat Sure",
        img: EatSure,
        discount: "$2000",
        deals: [
          {
            heading: "Free Delivery",
            description: "No delivery charges on all orders.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQm6qa_mflJf2BIBmhpjB7wh8Jdv1QYjfEg&s",
            cost: "57",
          },
          {
            heading: "Healthy Bowls",
            description: "few % off on nutritious meal bowls.",
            image:
              "https://plus.unsplash.com/premium_photo-1705003210245-41b4773b5bb5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoeSUyMGJvd2x8ZW58MHx8MHx8fDA%3D",
            cost: "21",
          },
          {
            heading: "₹150 Off",
            description: "Save ₹150 on selected items.",
            image:
              "https://www.shutterstock.com/image-photo/various-delicious-foods-set-top-260nw-2476517817.jpg",

            cost: "37",
          },
        ],
      },
      {
        name: "Dominos",
        img: Dominos,
        discount: "$1200",
        deals: [
          {
            heading: "Personal Pizza",
            description: "Small pizza at just ₹99.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyuoIiR7tDdmI5Kaq7iEtspXTo1MKQ2rs8w&s",
            cost: "57",
          },
          {
            heading: "Cheesy Treat",
            description: "Extra cheese at no extra cost.",
            image:
              "https://www.shutterstock.com/image-photo/cheese-fries-cheesy-chips-dish-600nw-2501622437.jpg",
            cost: "53",
          },
          {
            heading: "Party Combo",
            description: "Big savings on group meal deals.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUu9X1AtgDk6GIklF5ZGokXfP9sX54bHiUA&s",
            cost: "17",
          },
        ],
      },
      {
        name: "Behrouz Biryani",
        img: BehrouzBiryani,
        discount: "$1000",
        deals: [
          {
            heading: "Royal Biryani",
            description: "Get ₹150 off on royal biryanis.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD6PF1Y-PCXVIAfsVQo7FpwXWbNxg2QjMLQ&s",
            cost: "17",
          },
          {
            heading: "Combo Box",
            description: "Perfect meal box for 2.",
            image:
              "https://www.shutterstock.com/image-photo/mutton-nihari-combo-dal-makhani-600nw-2176280477.jpg",
            cost: "67",
          },
          {
            heading: "Free Dessert",
            description: "Gulab Jamun free with large orders.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfA6GXa0E0PebyCGD65CS_XWUsaq3tYAzKQ&s",
            cost: "54",
          },
        ],
      },
      {
        name: "Burger King",
        img: BurgerKing,
        discount: "$1000",
        deals: [
          {
            heading: "Extra Fries",
            description: "Get free fries with your burger.",
            image:
              "https://www.shutterstock.com/image-photo/cheese-fries-cheesy-chips-dish-600nw-2501622437.jpg",
            cost: "27",
          },
          {
            heading: "Happy Hours",
            description: "Get amazing discounts.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
            cost: "17",
          },
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
            cost: "36",
          },
        ],
      },
    ],
  },
  {
    img: "https://static.vecteezy.com/system/resources/thumbnails/023/309/702/small/ai-generative-e-commerce-concept-shopping-cart-with-boxes-on-a-wooden-table-photo.jpg",
    discount: "FLAT 40% OFF",
    name: "E-Commerce",
    transform: "scale-99 translate-y-4",
    subcategories: [
      {
        name: "Ajio",
        discount: "$1050",
        img: AjioCard,
        deals: [
          {
            heading: "Men's T-Shirt",
            description: "Stylish cotton T-shirts for daily wear and many more",
            image:
              "https://i.pinimg.com/550x/4a/d1/ea/4ad1eafbf4d5c2be7c86a26806afbd42.jpg",
            cost: "17",
          },
          {
            heading: "Happy Hours",
            description: "Get amazing discounts during happy hours.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",

            cost: "7",
          },
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons and many more.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",

            cost: "17",
          },
        ],
      },
      {
        name: "Nykaa",
        img: Nykaa,
        discount: "$4000",
        deals: [
          {
            heading: "Matte Lipstick",
            description: "Long-lasting, highly pigmented matte lipstick.",
            image:
              "https://m.media-amazon.com/images/I/41o9Q1TO1OL._AC_UF1000,1000_QL80_.jpg",
            cost: "51",
          },
          {
            heading: "Happy Hours",
            description: "Get amazing discounts during happy hours.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
            cost: "17",
          },
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons and many more.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
            cost: "17",
          },
        ],
      },
      {
        name: "Amazon Shopping",
        img: AmazonShoppingVoucher,
        discount: "$1900",
        deals: [
          {
            heading: "Smartwatch",
            description: "Feature-packed smartwatch for fitness tracking.",
            image:
              "https://m.media-amazon.com/images/I/51XajvzAHGL._AC_UF1000,1000_QL80_.jpg",
            cost: "17",
          },
          {
            heading: "Happy Hours",
            description: "Get amazing discounts during happy hours.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
            cost: "57",
          },
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons and many more.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
            cost: "52",
          },
        ],
      },
      {
        name: "Flipkart",
        img: FlipkartGiftCard,
        discount: "$1950",
        deals: [
          {
            heading: "Gaming Laptop",
            description: "High-performance laptop for gaming enthusiasts.",
            image:
              "https://media.istockphoto.com/id/1399174861/photo/gaming-laptop-computer-isolated-on-white.jpg?s=612x612&w=0&k=20&c=mBDSW82ipuMBFNqXZ5iq0PJwd_tl23XvEEnPkvaLRlA=",
            cost: "52",
          },
          {
            heading: "Happy Hours",
            description: "Get amazing discounts during happy hours.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
            cost: "17",
          },
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons and many more.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
            cost: "17",
          },
        ],
      },
    ],
  },
  {
    img: "https://img.freepik.com/free-photo/attractive-african-woman-enjoying-face-massage-spa-salon_176420-13955.jpg?semt=ais_hybrid",
    discount: "UP TO 30% OFF",
    name: "Health & Beauty",
    transform: "-rotate-1 translate-y-3",
    subcategories: [
      {
        name: "The Body Shop",
        img: BodyShop,
        discount: "$1109",
        deals: [
          {
            heading: "Tea Tree Face Wash",
            description: "Refreshing face wash for clear skin.",
            image: "https://m.media-amazon.com/images/I/51fWL7bhdtL.jpg",
            cost: "99",
          },
          {
            heading: "Shea Body Butter",
            description: "Deep nourishing body butter.",
            image:
              "https://img.freepik.com/free-photo/boomers-using-cbd-oil-cream-treating-body-pain_23-2151263468.jpg",
            cost: "19",
          },
          {
            heading: "Vitamin E Cream",
            description: "Hydrating day cream with vitamin E.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcm8yimVg6w-93pbXZ1sGIGM0QHEftD6om4A&s",
            cost: "98",
          },
        ],
      },
      {
        name: "Mama Earth",
        img: mamaearth,
        discount: "$1900",
        deals: [
          {
            heading: "Onion Hair Oil",
            description:
              "Strengthens hair and reduces hair fall with some discounts",
            image:
              "https://m.media-amazon.com/images/I/51SlkNc4pVL._AC_UF1000,1000_QL80_.jpg",
            cost: "19",
          },
          {
            heading: "Vitamin C Face Wash",
            description: "Brightening face wash for glowing skin.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1CQx0YCSxj2Jb1tU6hmIR4uwMBjIzn4ZFw&s",
            cost: "19",
          },
          {
            heading: "Charcoal Face Mask",
            description: "Detoxifying mask for deep cleansing and many more.",
            image:
              "https://m.media-amazon.com/images/I/71d1P1DIfuL._SL1500_.jpg",
            cost: "33",
          },
        ],
      },
      {
        name: "The Man Company",
        img: Man,
        discount: "$1900",
        deals: [
          {
            heading: "Beard Growth Oil",
            description: "Promotes thick and healthy beard growth.",
            image:
              "https://m.media-amazon.com/images/I/41tGG425p4L._BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
            cost: "29",
          },
          {
            heading: "Charcoal Face Wash",
            description: "Deep-cleansing face wash with activated charcoal.",
            image: "https://m.media-amazon.com/images/I/71IG0qDr4VL.jpg",
            cost: "12",
          },
          {
            heading: "Rose Water Toner",
            description: "Natural toner for glowing skin with offer prices.",
            image:
              "https://m.media-amazon.com/images/I/71brxL2FzNL._SL1500_.jpg",
            cost: "93",
          },
        ],
      },
      {
        name: "Wow Skin Care",
        img: WowSkin,
        discount: "$1730",
        deals: [
          {
            heading: "Apple Cider Shampoo",
            description: "Restores health & strengthens hair.",
            image:
              "https://5.imimg.com/data5/SELLER/Default/2023/10/350059331/NN/WJ/ZG/58148270/apple-shampoo-500x500.jpg",
            cost: "19",
          },
          {
            heading: "Vitamin C Serum",
            description: "Brightening serum for radiant skin.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHtkKBiomvkhUvylFu4L-B0UtWfblTRnnrA&s",
            cost: "52",
          },
          {
            heading: "Rose Water Toner",
            description: "Natural toner for glowing skin with offer prices.",
            image:
              "https://m.media-amazon.com/images/I/71brxL2FzNL._SL1500_.jpg",
            cost: "44",
          },
        ],
      },
      {
        name: "Bombay Shaving Company",
        img: BombayShaving,
        discount: "$2000",
        deals: [
          {
            heading: "Face Scrub",
            description: "Exfoliates and removes impurities.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJPnvPuJHYXUm0oQZQ3xYlgzDqXS2lLyqKw&s",
            cost: "91",
          },
          {
            heading: "Beard Trimmer",
            description: "Precision trimming for a sharp look.",
            image:
              "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ecfe6855-6777-4b9f-ad8b-8455c9bc23de.__CR0,0,970,600_PT0_SX970_V1___.png",
            cost: "55",
          },
          {
            heading: "Rose Water Toner",
            description: "Natural toner for glowing skin with offer prices.",
            image:
              "https://m.media-amazon.com/images/I/71brxL2FzNL._SL1500_.jpg",
            cost: "41",
          },
        ],
      },
    ],
  },
  {
    img: "https://media.istockphoto.com/id/1307568521/photo/its-the-denim-that-does-it-for-me.jpg?s=612x612&w=0&k=20&c=0RQfpn8VJxXl6sO4aUehTsPvyYKGPwVwz1EdJRBU_Nw=",
    discount: "SPECIAL OFFERS",
    name: "Fashion",
    transform: "rotate-1 translate-y-2",
    subcategories: [
      {
        name: "Shoppers Stop",
        img: Shoppers,
        discount: "$1300",
        deals: [
          {
            heading: "Formal Shirt",
            description: "Premium cotton formal shirts for office wear.",
            image:
              "https://i.pinimg.com/550x/4a/d1/ea/4ad1eafbf4d5c2be7c86a26806afbd42.jpg",
            cost: "91",
          },
          {
            heading: "Handbag",
            description: "Elegant handbags with spacious compartments.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPm85N0ymHV3hn6nCeqqczjQi-p4HBDi-Qw&s",
            cost: "92",
          },
          {
            heading: "Men's Jeans",
            description:
              "Classic fit denim jeans for casual wear with discount.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iUpq6kui4TSSg0vCjGz1K0WPNGFH5ZD5_Q&s",
            cost: "19",
          },
        ],
      },
      {
        name: "WildCraft",
        img: Wildcraft,
        discount: "$1140",
        deals: [
          {
            heading: "Backpack",
            description: "Durable backpacks with ergonomic design.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1TA4WlrkHJgXsqN1IgzQkKkw2OJxw4Klng&s",
            cost: "91",
          },
          {
            heading: "Trekking Shoes",
            description: "High-grip trekking shoes for outdoor adventures.",
            image:
              "https://i.pinimg.com/474x/4a/47/15/4a47154a58e68e88fa422db50e0edc68.jpg",
            cost: "11",
          },
          {
            heading: "Rain Jacket",
            description: "Waterproof and wind-resistant rain jackets.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSom7xfhfDJRxaPGce9lyY_NldkH7fDL6aduQ&s",
            cost: "11",
          },
        ],
      },
      {
        name: "The Souled Store",
        img: Souled,
        discount: "$1000",
        deals: [
          {
            heading: "Graphic T-Shirt",
            description: "Trendy pop-culture-themed t-shirts and many more.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEe2-iDU5bAxGAwfIFIh7IOnoCoJ3qVGd48Q&s",
            cost: "66",
          },
          {
            heading: "Hoodie",
            description: "Comfortable and stylish hoodies for all seasons.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsikWTOXaL3WeOoADKadw_BM9KqFaV4-ShA&s",
            cost: "26",
          },
          {
            heading: "Men's Jeans",
            description:
              "Classic fit denim jeans for casual wear with discount.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iUpq6kui4TSSg0vCjGz1K0WPNGFH5ZD5_Q&s",
            cost: "62",
          },
        ],
      },
      {
        name: "XYXX",
        img: Xyxx,
        discount: "$1400",
        deals: [
          {
            heading: "Men's Boxer Shorts",
            description: "Breathable cotton boxers with soft fabric.",
            image:
              "https://m.media-amazon.com/images/I/81S44lRcM0L._AC_UY1100_.jpg",
            cost: "46",
          },
          {
            heading: "Vest",
            description: "Ultra-soft and sweat-absorbent vests.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflsVWc_jmp9FtHuTpU_eR_Sf8Lb-gfRVzYQ&s",
            cost: "44",
          },
          {
            heading: "Thermals",
            description: "Warm and stretchable thermal wear and many more.",
            image:
              "https://m.media-amazon.com/images/I/41tyV0cbgFL._AC_UY1100_.jpg",
            cost: "62",
          },
        ],
      },
      {
        name: "SareesKart",
        img: SareesKart,
        discount: "$1500",
        deals: [
          {
            heading: "Silk Saree",
            description: "Elegant silk sarees for special occasions.",
            image:
              "https://media.istockphoto.com/id/89323827/photo/indian-sarees.jpg?s=612x612&w=0&k=20&c=IYClFnkKf0QinOD3A0x7KXXMTXII9V9KBBewNjDpFhM=",
            cost: "61",
          },
          {
            heading: "Cotton Saree",
            description: "Lightweight and breathable cotton sarees.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWcY1LfVeEe_BFQQRXFuuvUrCLOc1nMxL-Q&s",
            cost: "77",
          },
          {
            heading: "Designer Saree",
            description: "Exclusive designer sarees with intricate work.",
            image:
              "https://5.imimg.com/data5/SELLER/Default/2020/10/JI/PR/ZX/108280460/designer-saree.jpg",
            cost: "22",
          },
        ],
      },
      {
        name: "Ola",
        img: Ola,
        discount: "$1400",
        deals: [
          {
            heading: "Ride Pass",
            description: "Discounted ride passes for daily commutes.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfRHkY5o0FkI1N79eZNa45HRZ8KegdpruuA&s",
            cost: "26",
          },
          {
            heading: "Cab Discount",
            description: "Affordable intercity cab rides with minimum price.",
            image:
              "https://www.vedantcabs.com/images/pune-to-outstation-cab.png",
            cost: "46",
          },
          {
            heading: "Free Rides",
            description: "Discounted ride passes for daily commutes.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfRHkY5o0FkI1N79eZNa45HRZ8KegdpruuA&s",
            cost: "16",
          },
        ],
      },
      {
        name: "Uber",
        img: Uber,
        discount: "$1200",
        deals: [
          {
            heading: "Uber Rentals",
            description: "Hourly car rental services at flexible rates.",
            image:
              "https://media.istockphoto.com/id/1328524448/photo/man-driving-his-car.jpg?s=612x612&w=0&k=20&c=-iUk9SrXxG8KTc18_F_ev97i9N5SPXKmRA9l7i86eZQ=",
            cost: "21",
          },
          {
            heading: "Uber XL",
            description: "Spacious rides for group travel and many more",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6ymKgcb16IapCSErEPmjP1eTMYI2nRM0iA&s",
            cost: "13",
          },
          {
            heading: "Uber Moto",
            description: "Affordable bike taxi rides for quick commutes.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQek1G1KecQIxw971ZmXbaA9axcmKzdMFn2fg&s",
            cost: "21",
          },
        ],
      },
    ],
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?fm=jpg&q=60&w=3000",
    discount: "SPECIAL OFFERS",
    name: "Courses",
    transform: "-rotate-1 translate-y-2",
    subcategories: [
      {
        name: "Finance Courses",
        img: "https://www.svgrepo.com/show/197754/money-business-and-finance.svg",
        discount: "$500",
        deals: [
          {
            heading: "Personal",
            description:
              "Receive guidance on managing your resources effectively.",
            image:
              "https://www.shutterstock.com/image-photo/personal-financial-management-600nw-1234567895.jpg",
            cost: "20",
          },
          {
            heading: "Education",
            description:
              "Learn how to create a strong resource planning for your academic journey.",
            image:
              "https://www.shutterstock.com/image-photo/emergency-fund-solutions-600nw-1234567896.jpg",
            cost: "33",
          },
          {
            heading: "Business",
            description:
              "Get expert insights on scaling and sustaining your business efficiently.",
            image:
              "https://www.shutterstock.com/image-photo/wealth-growth-assistance-600nw-1234567897.jpg",
            cost: "45",
          },
        ],
      },
      {
        name: "Wazirx",
        code: "xv7fwxg8",
        link: "https://wazirx.com/invite/xv7fwxg8",
        img: "https://www.svgrepo.com/show/331638/wazirx.svg",
        discount: "$1200",
        deals: [
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "21",
          },
          {
            heading: "Referral Program",
            description: "Invite friends and earn commissions on their trades.",
            image:
              "https://www.shutterstock.com/image-photo/refer-friend-business-partners-teamwork-600nw-1918457357.jpg",
            cost: "81",
          },
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
            cost: "41",
          },
        ],
      },
      {
        name: "Binance Red Packet",
        code: "753fwxg8",
        link: "https://www.binance.com/en/blog/community/celebrate-lunar-new-year-with-binance-earn-your-share-of-$4m-in-red-packet-rewards-6296160904152311215",
        img: gift,
        discount: "$1200",
        deals: [
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "21",
          },
          {
            heading: "Referral Program",
            description: "Invite friends and earn commissions on their trades.",
            image:
              "https://www.shutterstock.com/image-photo/refer-friend-business-partners-teamwork-600nw-1918457357.jpg",
            cost: "81",
          },
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
            cost: "41",
          },
        ],
      },
      {
        name: "Groww",
        img: "https://groww.in/groww-logo-270.png",
        code: "Click below",
        color: ["#05e9bf", "#5367ff", "#05e9bf"],
        link: "https://app.groww.in/v3cO/b5saimy2",
        discount: "$1020",
        deals: [
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "41",
          },
          {
            heading: "Market Analysis",
            description: "Access professional market research and insights.",
            image:
              "https://media.istockphoto.com/id/1413514774/photo/businessman-drawing-increasing-graph-showing-growing-business-success-and-financial-growth-plan.jpg?s=612x612&w=0&k=20&c=I4t8GP4Dn_GwgC2Ud8UaHV-RyTL1aPBRm6lEgC7RIZc=",
            cost: "25",
          },
          {
            heading: "Free Token Sales",
            description:
              "Participate in new token launches and get token free.",
            image:
              "https://content.jdmagicbox.com/comp/def_content/lottery-dealers/shutterstock-252066604-lottery-dealers-1-p9mys.jpg",
            cost: "41",
          },
        ],
      },
      {
        name: "BloFin",
        img: "/images/blofin.png",
        code: "BLOFIN1000",
        link: "https://blofin.com/invite/BLOFIN1000",
        discount: "$1000",
        deals: [
          {
            heading: "Get $1000 offer",
            description: "Sign up with BLOFIN1000 and get $1000 welcome Reward on your first deposit.",
            image:
              "https://img.freepik.com/premium-photo/3d-gold-coin-with-dollar-sign-isolated-white-background_1115467-12345.jpg",
            link: "https://blofin.com/invite/BLOFIN1000",
            cost: "1000",
          },
          {
            heading: "Get $500 Reward",
            description: "Use code BLOFIN500 to claim your $500  Reward and start earning.",
            image:
              "https://media.istockphoto.com/id/1413514774/photo/businessman-drawing-increasing-graph-showing-growing-business-success-and-financial-growth-plan.jpg?s=612x612&w=0&k=20&c=I4t8GP4Dn_GwgC2Ud8UaHV-RyTL1aPBRm6lEgC7RIZc=",
            link: "https://blofin.com/invite/BLOFIN500",
            cost: "500",
          },
          {
            heading: "Grab $1000 Offer",
            description: "Limited time offer! Use GRAB1000 to unlock exclusive $1000 rewards.",
            image:
              "https://content.jdmagicbox.com/comp/def_content/lottery-dealers/shutterstock-252066604-lottery-dealers-1-p9mys.jpg",
            link: "https://blofin.com/invite/GRAB1000",
            cost: "1000",
          },
        ],
      },
      {
        name: "XT Main",
        img: "https://assets.coingecko.com/coins/images/28724/standard/XT.png",
        code: "XT2025",
        link: "https://www.xt.com/en/accounts/register?ref=BGFB1QZ",
        discount: "$1800",
        deals: [
          {
            heading: "P2P Deals",
            description: "Buy and sell for free with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "41",
          },
          {
            heading: "Staking Rewards",
            description: "Earn passive income by staking your virtual money.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            cost: "25",
          },
          {
            heading: "Copy Trading",
            description: "Follow expert traders and copy their strategies.",
            image:
              "https://img.freepik.com/premium-photo/3d-ai-trading-bot-icon-with-stock-exchange-concept-automated-trading-financial-markets-ideal_980716-454967.jpg",
            cost: "41",
          },
        ],
      },
      {
        name: "KVB Main",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8YvJXQQqZXqH9Z6H5E-sJ8VJvI_YhH3pxg&s",
        code: "KVB2025",
        link: "https://www.kvbprime.com/en/trading/open-account",
        discount: "$1500",
        deals: [
          {
            heading: "Forex Trading",
            description: "Trade major forex pairs with low spreads.",
            image:
              "https://img.freepik.com/premium-photo/forex-trading-concept-with-currency-exchange-charts-financial-markets_980716-454968.jpg",
            cost: "21",
          },
          {
            heading: "CFD Trading",
            description: "Trade contracts for difference on various assets.",
            image:
              "https://media.istockphoto.com/id/1413514774/photo/businessman-drawing-increasing-graph-showing-growing-business-success-and-financial-growth-plan.jpg?s=612x612&w=0&k=20&c=I4t8GP4Dn_GwgC2Ud8UaHV-RyTL1aPBRm6lEgC7RIZc=",
            cost: "11",
          },
          {
            heading: "Commodities",
            description: "Trade gold, silver, oil and other commodities.",
            image:
              "https://media.istockphoto.com/id/1010544776/photo/space-launch-system-on-launchpad-over-background-of-sky.jpg?s=612x612&w=0&k=20&c=jfVs80bea_2bAyd_HZtIbUYjFf9MIH2rkmrJUM0vIkc=",
            cost: "26",
          },
        ],
      },
      {
        name: "Binance",
        img: "https://www.logo.wine/a/logo/Binance/Binance-Vertical-Logo.wine.svg",
        code: "40093450",
        link: "https://accounts.binance.com/register?ref=40093450",
        discount: "$1600",
        deals: [
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            link: "https://accounts.binance.com/register?ref=EMGYOEKL",
            cost: "31",
          },
          {
            heading: "Referral Program",
            description: "Invite friends and earn commissions on their trades.",
            image:
              "https://www.shutterstock.com/image-photo/refer-friend-business-partners-teamwork-600nw-1918457357.jpg",
            link: "https://accounts.binance.com/register?ref=TOR4GBZF",
            cost: "21",
          },
          {
            heading: "Futures Offers",
            description: "High-leverage futures virtual money with low fees.",
            image:
              "https://media.istockphoto.com/id/1349640220/photo/businessman-hand-pointing-finger-to-growth-success-finance-business-chart-of-metaverse.jpg?s=612x612&w=0&k=20&c=XO_1l1e_4Wu999uhozJIsrb7E23PY2jpz34ZwTyJeG8=",
            link: "https://accounts.binance.com/register?ref=OL2RH5NO",
            cost: "22",
          },
        ],
      },
      {
        name: "Country Delight",
        img: "https://countrydelight.in/assets/img/Logo_instory.png",
        code: "KALPAKNFT5",
        link: "https://www.kucoin.com/r/af/rM61GNN",
        discount: "$1700",
        deals: [
          {
            heading: "Deals Bots",
            description: "Automate deals of virtual money with smart bots.",
            image:
              "https://img.freepik.com/premium-photo/3d-ai-trading-bot-icon-with-stock-exchange-concept-automated-trading-financial-markets-ideal_980716-454967.jpg",
            link: "https://www.kucoin.com/r/af/rM61GNN",
            cost: "21",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            link: "https://www.kucoin.com/r/af/rM61GNN",
            cost: "41",
          },
          {
            heading: "Security Tools",
            description:
              "Advanced security features for virtual money storage.",
            image: "safepal_security.jpg",
            link: "https://www.kucoin.com/r/af/rM61GNN",
            cost: "31",
          },
        ],
      },
      {
        name: "KuCoin",
        img: "https://avatars.githubusercontent.com/u/6188901?s=280&v=4",
        code: "rMMFZ8U",
        link: "https://www.kucoin.com/r/af/rMMFZ8U",
        discount: "$2000",
        deals: [
          {
            heading: "Deals Bots",
            description: "Automate deals of virtual money with smart bots.",
            image:
              "https://img.freepik.com/premium-photo/3d-ai-trading-bot-icon-with-stock-exchange-concept-automated-trading-financial-markets-ideal_980716-454967.jpg",
            link: "https://www.kucoin.com/r/af/rMMFZ8U",
            cost: "21",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            link: "https://www.kucoin.com/r/af/FREE1000",
            cost: "41",
          },
          {
            heading: "Security Tools",
            description:
              "Advanced security features for virtual money storage and many more.",
            image: "safepal_security.jpg",
            link: "https://www.kucoin.com/r/af/CHRISTMAS",
            cost: "31",
          },
        ],
      },
      {
        name: "MEXC",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCy3d3A5lHs7820WBxuNUzziiiN68z70Cqg&s",
        code: "mexc-SPOT50",
        link: "https://www.mexc.co/acquisition/custom-sign-up?shareCode=mexc-SPOT50",
        discount: "$1060",
        deals: [
       
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "41",
          },
          {
            heading: "Market Analysis",
            description: "Access professional market research and insights.",
            image:
              "https://media.istockphoto.com/id/1413514774/photo/businessman-drawing-increasing-graph-showing-growing-business-success-and-financial-growth-plan.jpg?s=612x612&w=0&k=20&c=I4t8GP4Dn_GwgC2Ud8UaHV-RyTL1aPBRm6lEgC7RIZc=",
            cost: "25",
          },
          {
            heading: "Free Token Sales",
            description:
              "Participate in new token launches and get token free.",
            image:
              "https://content.jdmagicbox.com/comp/def_content/lottery-dealers/shutterstock-252066604-lottery-dealers-1-p9mys.jpg",
            cost: "41",
          },
        ],
      },
      {
        name: "ByBit",
        img: ByBit,
        code: "FREE500",
        link: "https://partner.bybitglobal.com/b/TillCorePromotion",
        discount: "$2000",
        deals: [
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
            link: "https://partner.bybitglobal.com/b/TillCorePromotion",
            cost: "31",
          },
          {
            heading: "Referral Program",
            description: "Invite friends and earn commissions on their trades.",
            image:
              "https://www.shutterstock.com/image-photo/refer-friend-business-partners-teamwork-600nw-1918457357.jpg",
            link: "https://partner.bybitglobal.com/b/48538",
            cost: "21",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            link: "https://partner.bybitglobal.com/b/GRAB1000",
            cost: "21",
          },
          {
            heading: "Derivatives Market",
            description: "Trade digital money derivatives with advanced tools.",
            image: "weex_derivatives.jpg",
            link: "https://partner.bybitglobal.com/b/FUTURE500",
            cost: "23",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "99",
          },
          {
            heading: "Staking Rewards",
            description:
              "Earn rewards by staking popular virtual money and many more.",
            image: "weex_staking.jpg",
            cost: "29",
          },
        ],
      },
      {
        name: "BingX",
        img: "https://cdn.worldvectorlogo.com/logos/bing-x.svg",
        code: "UAIMID",
        link: "https://bingx.pro/invite/UAIMID/",
        discount: "$1340",
        deals: [
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
            cost: "89",
          },

          {
            heading: "Referral Program",
            description: "Invite friends and earn commissions on their trades.",
            image:
              "https://www.shutterstock.com/image-photo/refer-friend-business-partners-teamwork-600nw-1918457357.jpg",
            cost: "19",
          },
          {
            heading: "Perpetual Contracts",
            description: "Trade futures with low fees and deep liquidity.",
            image: "bingx_perpetual.jpg",
          },
          {
            heading: "Zero Commission deal",
            description:
              "Trade with zero commission on select assets with great offers.",
            image: "weex_zero_commission.jpg",
            cost: "39",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            cost: "59",
          },
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            cost: "79",
          },
        ],
      },
      {
        name: "Bitget",
        img: "https://logowik.com/content/uploads/images/bitget-black5699.logowik.com.webp",
        code: "BR22U2",
        link: "https://partner.bitget.site/bg/BR22U2",
        discount: "$2000",
        deals: [
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            cost: "89",
          },
          {
            heading: "Earn Rewards",
            description:
              "Get cashback and Rewardes on trades with more discounts.",
            image: "phemex_rewards.jpg",
            cost: "89",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "89",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            cost: "89",
          },
          {
            heading: "deal of the day",
            description: "Mimic top traders with one click and many more.",
            image: "bitget_copy.jpg",
            cost: "89",
          },
          {
            heading: "Free CFDs",
            description:
              "Free CFD's make by talking contracts and leverage with great offers.",
            image: "qx_cfd.jpg",
            cost: "89",
          },
        ],
      },
      {
        name: "Weex",
        img: Weex,
        discount: "$1880",
        deals: [
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "55",
          },
          {
            heading: "Derivatives Market",
            description:
              "Learing about derivatives market with advanced tools with many tutorial.",
            image: "weex_derivatives.jpg",
            cost: "45",
          },
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            cost: "25",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            cost: "15",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "52",
          },
          {
            heading: "Staking Rewards",
            description: "Earn rewards by staking popular tokens.",
            image: "weex_staking.jpg",
            cost: "11",
          },
        ],
      },
      {
        name: "Bitvavo",
        img: Bitvavo,
        discount: "$1500",
        link: "https://account.bitvavo.com/login?nextUrl=/",
        deals: [
          {
            heading: "Low-Fee Digital Money",
            description:
              "Free learning for digital money with some of the lowest fees.",
            image: "bitvavo_fees.jpg",
            cost: "55",
          },
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            cost: "53",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            cost: "65",
          },
          {
            heading: "Instant Euro Deposits",
            description: "Easy fiat-to-money deposits for EU users.",
            image: "bitvavo_euro.jpg",
            cost: "35",
          },
          {
            heading: "Passive Gifts",
            description: "Earn gitfs on your virtual money holdings.",
            image: "bitvavo_income.jpg",
            cost: "25",
          },
          {
            heading: "Free API",
            description:
              "Automate trades and have tutorial with Bitvavo's API.",
            image: "bitvavo_api.jpg",
            cost: "51",
          },
        ],
      },
      {
        name: "QX Broker",
        img: OxBroker,
        discount: "$1450",
        deals: [
          {
            heading: "Forex Tutorial",
            description: "Trade major forex pairs with low spreads.",
            image: "qx_forex.jpg",
            cost: "45",
          },
          {
            heading: "Indices & Stocks",
            description: "Invest in global indices and company stocks.",
            image: "qx_indices.jpg",
            cost: "31",
          },
          {
            heading: "Zero Commission tutorial",
            description: "Trade with zero commission on select assets.",
            image: "weex_zero_commission.jpg",
            cost: "31",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            cost: "31",
          },
          {
            heading: "Free CFDs",
            description:
              "Free CFD's make by talking contracts and leverage with great offers.",
            image: "qx_cfd.jpg",
            cost: "21",
          },
          {
            heading: "Commodities",
            description: "Trade gold, oil, and other commodities.",
            image: "qx_commodities.jpg",
            cost: "51",
          },
        ],
      },
      {
        name: "Alpha Capital",
        img: "https://www.alphacapital.in/assets/images/project_image.png",
        discount: "$1021",
        deals: [
          {
            heading: "Wealth Management",
            description: "Smart investment solutions for long-term growth.",
            image: "alpha_wealth.jpg",
            cost: "31",
          },
          {
            heading: "Zero Commission tutorial",
            description: "Trade with zero commission on select assets.",
            image: "weex_zero_commission.jpg",
            cost: "34",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            cost: "61",
          },
          {
            heading: "Hedge Funds",
            description: "Diversified hedge fund investment options.",
            image: "alpha_hedge.jpg",
            cost: "41",
          },
          {
            heading: "Portfolio Optimization",
            description: "AI-driven asset allocation strategies.",
            image: "alpha_portfolio.jpg",
            cost: "31",
          },
          {
            heading: "Private Equity",
            description: "Exclusive private equity investment opportunities.",
            image: "alpha_equity.jpg",
            cost: "31",
          },
        ],
      },
      {
        name: "Maven Tutorial",
        img: Manven,
        discount: "$2000",
        deals: [
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            cost: "31",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "44",
          },
          {
            heading: "Wealth Management",
            description: "Smart investment solutions for long-term growth.",
            image: "alpha_wealth.jpg",
            cost: "44",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            cost: "44",
          },
          {
            heading: "Risk Management",
            description: "Learn advanced risk management techniques.",
            image: "maven_risk.jpg",
            cost: "44",
          },
          {
            heading: "Technical Analysis",
            description: "Advanced charting tools for traders.",
            image: "maven_analysis.jpg",
            cost: "44",
          },
        ],
      },
      {
        name: "Funder Pro",
        link: "https://funderpro.cxclick.com/visit/?bta=36023&brand=funderpro",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQNu_s6IDafkKJEwow1X9iiABcPzmxfCHGA&s",
        discount: "$1000",
        deals: [
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "34",
          },
          {
            heading: "Risk Management",
            description: "Learn advanced risk management techniques.",
            image: "maven_risk.jpg",
            cost: "34",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            cost: "34",
          },
          {
            heading: "Proprietary Firm",
            description: "Access capital from a professional firm.",
            image: "funder_firm.jpg",
            cost: "34",
          },
          {
            heading: "Forex Challenges",
            description: "Pass challenges to get funded accounts.",
            image: "funder_forex.jpg",
            cost: "34",
          },
          {
            heading: "Scaling Plan",
            description: "Increase your funding with successful trades.",
            image: "funder_scaling.jpg",
            cost: "34",
          },
        ],
      },
      {
        name: "Safe Pal",
        img: SafePal,
        discount: "$4000",
        deals: [
          {
            heading: "Hardware Wallet",
            description: "Secure your virtual money with a cold wallet.",
            image: "safepal_wallet.jpg",
            cost: "32",
          },
          {
            heading: "DeFi Access",
            description: "Connect and trade on decentralized exchanges.",
            image: "safepal_defi.jpg",
            cost: "24",
          },
          {
            heading: "Multi-Chain Support",
            description: "Manage multiple blockchains in one app.",
            image: "safepal_multichain.jpg",
            cost: "32",
          },
          {
            heading: "Risk Management",
            description: "Learn advanced risk management techniques.",
            image: "maven_risk.jpg",
            cost: "32",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            cost: "32",
          },
          {
            heading: "Security Tools",
            description:
              "Advanced security features for virtual money storage and many more.",
            image: "safepal_security.jpg",
            cost: "32",
          },
        ],
      },
      {
        name: "Hostinger",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqVLh4UflI_6Er66Te0lrzgwAd3MEHV0UNw&s",
        code: "Click below",
        link: "https://hostinger.in?REFERRALCODE=5A8PANKAL9BV",
        discount: "$2040",
        deals: [
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and rewards.",
            image: "phemex_rewards.jpg",
            cost: "89",
          },

          {
            heading: "Referral Program",
            description: "Invite friends and earn commissions on their trades.",
            image:
              "https://www.shutterstock.com/image-photo/refer-friend-business-partners-teamwork-600nw-1918457357.jpg",
            cost: "19",
          },
          {
            heading: "Perpetual Contracts",
            description: "Trade futures with low fees and deep liquidity.",
            image: "bingx_perpetual.jpg",
          },
          {
            heading: "Zero Commission deal",
            description:
              "Trade with zero commission on select assets with great offers.",
            image: "weex_zero_commission.jpg",
            cost: "39",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            cost: "59",
          },
          {
            heading: "Staking",
            description: "Earn passive income by staking your virtual money.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            cost: "79",
          },
        ],
      },
      {
        name: "Pocket Option",
        img: "https://play-lh.googleusercontent.com/Zwh4ahhTMsXk0fzpxY30JVnFIDfQViTCej0lNllmrKAMDWsbJVVDPLSnSQStde1tXO0=w240-h480-rw",
        discount: "$1355",
        deals: [
          {
            heading: "Binary Options",
            description: "Trade binary options with fixed payouts.",
            image: "pocket_binary.jpg",
            cost: "42",
          },
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
            cost: "22",
          },
          {
            heading: "Risk Management",
            description: "Learn advanced risk management techniques.",
            image: "maven_risk.jpg",
            cost: "42",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            cost: "42",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "41",
          },
          {
            heading: "Demo Account",
            description:
              "Practice virtual money with virtual funds and many more.",
            image: "pocket_demo.jpg",
            cost: "12",
          },
        ],
      },
      {
        name: "E8",
        code: "FREE500",
        link: "https://e8markets.com/a/FREE500",
        img: "https://t3.ftcdn.net/jpg/04/78/81/56/360_F_478815602_LTFfHcntjzEZoyMOps6a14UCI6TlQF4b.jpg",
        discount: "$1000",
        deals: [
          {
            heading: "Funded Accounts",
            description:
              "Trade with institutional-grade funds with great deals.",
            image: "e8_funded.jpg",
            cost: "42",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "42",
          },
          {
            heading: "Risk-Free Trades",
            description:
              "Trade without worrying about losses have more offers.",
            image: "e8_riskfree.jpg",
            cost: "33",
          },
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            cost: "42",
          },
          {
            heading: "Demo Account",
            description:
              "Practice virtual money with virtual funds and many more.",
            image: "pocket_demo.jpg",
            cost: "22",
          },
          {
            heading: "Forex Leverage",
            description: "Trade forex with high leverage have more offers",
            image: "e8_leverage.jpg",
            cost: "52",
          },
        ],
      },
      {
        name: "Phemex",
        img: Phemex,
        code: "G5L2W2",
        link: "https://phemex.com/account/referral/invite-friends-entry?referralCode=G5L2W2",
        discount: "$2000",
        deals: [
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            cost: "55",
          },
          {
            heading: "Virtual Futures",
            description: "Virtual perpetual contracts with deep liquidity.",
            image: "phemex_futures.jpg",
            cost: "32",
          },
          {
            heading: "Virtual gift delas",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
            cost: "32",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            cost: "42",
          },
          {
            heading: "Earn Rewards",
            description:
              "Get cashback and Rewards on trades with more discounts.",
            image: "phemex_rewards.jpg",
            cost: "42",
          },
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
            cost: "42",
          },
        ],
      },
    ],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFIxBT9XPwN32zTQk8j-1XITZMC8tL7y-vg&s",
    discount: "SPECIAL OFFERS",
    name: "Marketing",
    transform: "rotate-0 translate-y-2",
    subcategories: [
      {
        name: "Get Response",
        img: GetResponse,
        discount: "$1499",
        deals: [
          {
            heading: "Email Marketing",
            description: "Automate your email campaigns with ease.",
            image:
              "https://media.istockphoto.com/id/1452950987/vector/digital-email-marketing-reaching-online-audience-with-email-marketing-campaign-newsletter.jpg?s=612x612&w=0&k=20&c=q8UPJHIVSRZFDUzqLlYlzuVfmQ2AmD7ds-KX55OfGhk=",
            cost: "66",
          },
          {
            heading: "Landing Pages",
            description: "Create high-converting landing pages with many more.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2dye5xvWGVXYoBMxdDTtDLL0nyIYHPPmeA&s",
            cost: "66",
          },
          {
            heading: "Webinars",
            description: "Host and manage online webinars with ease.",
            image:
              "https://img.freepik.com/premium-photo/man-working-laptop-with-word-webinar-computer-screen_771335-10103.jpg",
            cost: "36",
          },
          {
            heading: "Marketing Automation",
            description: "Streamline your marketing workflows with tutorials.",
            image:
              "https://img.freepik.com/free-vector/screen-marketing-automation-background_23-2148007434.jpg",
            cost: "66",
          },
          {
            heading: "SEO Optimization",
            description: "Boost your website rankings with powerful SEO tools.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eQpGHgR8nv47cH0hPZbxd6QuUQKtkKGRPQ&s",
            cost: "96",
          },
          {
            heading: "Social Media Ads",
            description: "Run targeted ad campaigns on social media platforms.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_VydOfjFVRJD1bWRmfv1drkYYiKH2Wcx6g&s",
            cost: "77",
          },
        ],
      },
      {
        name: "Vid IQ",
        img: VidIQ,
        discount: "$1459",
        deals: [
          {
            heading: "YouTube SEO",
            description: "Boost your videos with advanced analytics.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4xyLfNCZklM2ozYEmGPTQuCFbIezaBvOQA&s",
            cost: "66",
          },
          {
            heading: "Keyword Research",
            description: "Find the best keywords for video ranking.",
            image:
              "https://searchengineland.com/wp-content/seloads/2015/01/keyword-magnifying-glass-ss-1920.jpg",
            cost: "26",
          },
          {
            heading: "Competitor Analysis",
            description: "Analyze top-performing channels with expert tools.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11SlFkG6kv_XtZRLGSRhmB6kN8-uLXHqQjA&s",
            cost: "16",
          },
          {
            heading: "SEO Optimization",
            description: "Boost your website rankings with powerful SEO tools.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eQpGHgR8nv47cH0hPZbxd6QuUQKtkKGRPQ&s",
            cost: "66",
          },
          {
            heading: "Social Media Ads",
            description: "Run targeted ad campaigns on social media platforms.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_VydOfjFVRJD1bWRmfv1drkYYiKH2Wcx6g&s",
            cost: "33",
          },
          {
            heading: "Video Optimization",
            description: "Improve your thumbnails, titles, and tags.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweH6rgPZa35g1B6cPsPTuE8uJ7wLVR1C_1g&s",
            cost: "88",
          },
        ],
      },
    ],
  },
];

const trendingStores = categories;
export { trendingStores };

const TrendingStores = () => {
  const [showAll, setShowAll] = useState(false);

  const temCategory = showAll ? categories : categories.slice(0, 5);

  return (
    <div id="coupons" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wider text-gray-800">
        Category
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {temCategory.map((category, index) => (
          <div key={index} className="group relative">
            <div
              className={`cursor-pointer transition-all duration-300 ease-in hover:-translate-y-2 ${category.transform}`}
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-48 md:w-56 h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute h-56 rounded-lg inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-bold transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {category.discount}
                  </p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>
            </div>

            <Subcategory category={category} />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div
          onClick={() => setShowAll(!showAll)}
          className="inline-flex cursor-pointer items-center px-6 mt-8 hover:text-black font-semibold text-blue-700 transition-colors duration-200"
        >
          {showAll ? "Show less categories" : "Show all categories"}
          <span className="ml-2">➜</span>
        </div>
      </div>
    </div>
  );
};

export default TrendingStores;
