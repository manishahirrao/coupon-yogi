// import { useState } from "react";
// import Subcategory from "./Subcategory";
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
// import Kucoin from "./FinanceImages/Kucoin.png";
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
let categories = [
  {
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070",
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
          {
            heading: "DevOps Training",
            description:
              "Master CI/CD pipelines, Docker, Kubernetes, and cloud automation.",
            image:
              "https://c8.alamy.com/comp/2RB9K9M/devops-banner-web-icon-vector-illustration-concept-for-software-engineering-and-development-with-an-icon-of-a-plan-code-build-test-release-deploy-2RB9K9M.jpg",
            cost: "20",
          },
          {
            heading: "Data Science",
            description: "Explore machine learning and data analysis;",
            image:
              "https://c8.alamy.com/comp/2RJDKYN/big-data-science-analytics-analysis-information-technology-internet-concept-2RJDKYN.jpg",
            cost: "10",
          },
          {
            heading: "Cyber Security",
            description:
              "Learn ethical hacking, network security, and risk management.",
            image:
              "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=",
            cost: "13",
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
          {
            heading: "Blockchain Development",
            description: "Understand smart contracts, decentralized apps.",
            image:
              "https://media.istockphoto.com/id/1319612751/photo/digital-blockchain-technology-concept.jpg?s=612x612&w=0&k=20&c=R2cAqshsaXJMA_9icCcFSjTWmJqPbtyM9SgJkkDiCYY=",
            cost: "45",
          },
          {
            heading: "AI & Deep Learning",
            description:
              "Dive into neural networks, NLP, and AI-driven applications.",
            image:
              "https://media.istockphoto.com/id/1195379783/photo/artificial-intelligence-ai-research-of-robot-and-cyborg-development-for-future-of-people.jpg?s=612x612&w=0&k=20&c=7REx5cCbXf_vyTrLUsH9doU3loBhLdoW8FcKKGt_iJw=",
            cost: "91",
          },
          {
            heading: "Python Pro",
            description: "Become a Python expert.",
            image:
              "https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149379660.jpg?t=st=1739416182~exp=1739419782~hmac=8e76fddcd33b2799b093555a29ff59f59897babae2e40dfbe496884cdcf2d97b&w=740",
            cost: "92",
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
          {
            heading: "SQL Bootcamp",
            description: "Learn SQL from basics to advanced and many more.",
            image:
              "https://img.freepik.com/free-vector/abstract-technology-sql-illustration_23-2149237139.jpg?t=st=1739416796~exp=1739420396~hmac=6107752f258542aa1f2e3dbeba162887b6a576e8a7039f0aba92e69227c292a4&w=740",
            cost: "12",
          },
          {
            heading: "AWS Course",
            description:
              "Master AWS cloud services with knowlage of other cloude services.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5q6W_x-AHRR-1yY-znbBuwB_MWsKPtKJ3ug&s",
            cost: "32",
          },
          {
            heading: "AI & Deep Learning",
            description:
              "Dive into neural networks, NLP, and AI-driven applications.",
            image:
              "https://media.istockphoto.com/id/1195379783/photo/artificial-intelligence-ai-research-of-robot-and-cyborg-development-for-future-of-people.jpg?s=612x612&w=0&k=20&c=7REx5cCbXf_vyTrLUsH9doU3loBhLdoW8FcKKGt_iJw=",
            cost: "12",
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
          {
            heading: "Photography",
            description: "Improve your photography skills and many more.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8aYo40lAUaSMjkoWco5oaetKG4NK8Pz3RA&s",
            cost: "30",
          },
          {
            heading: "Animation",
            description:
              "Create stunning animations with creating graphic animations.",
            image:
              "https://www.shutterstock.com/image-vector/guy-animator-creation-project-process-600nw-1758437726.jpg",
            cost: "72",
          },
          {
            heading: "AI & Deep Learning",
            description:
              "Dive into neural networks, NLP, and AI-driven applications.",
            image:
              "https://media.istockphoto.com/id/1195379783/photo/artificial-intelligence-ai-research-of-robot-and-cyborg-development-for-future-of-people.jpg?s=612x612&w=0&k=20&c=7REx5cCbXf_vyTrLUsH9doU3loBhLdoW8FcKKGt_iJw=",
            cost: "23",
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
          {
            heading: "DevOps Cert",
            description: "Master DevOps & CI/CD.",
            image:
              "https://c8.alamy.com/comp/2RB9K9M/devops-banner-web-icon-vector-illustration-concept-for-software-engineering-and-development-with-an-icon-of-a-plan-code-build-test-release-deploy-2RB9K9M.jpg",
            cost: "32",
          },
          {
            heading: "PMP Course",
            description: "Get PMP certified.",
            image:
              "https://cdn.shopaccino.com/igmguru/products/pmp-online-training-igmguru_19981220_l.jpg?v=530",
            cost: "12",
          },
          {
            heading: "AI & ML",
            description: "Advance in AI & ML.",
            image:
              "https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?t=st=1739415956~exp=1739419556~hmac=0096e4fcf42178fed170a2ce372cbb8bed1a4ef84e894fd176b8bf7263d9a479&w=740",
            cost: "32",
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
          {
            heading: "Marketing Pro",
            description: "Master digital marketing.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQluLpnjPLWHio2QD-QzuovBBL4nz-R9uZViw&s",
            cost: "12",
          },
          {
            heading: "Freelancing",
            description: "Build a successful freelance career.",
            image:
              "https://st3.depositphotos.com/3258807/19033/i/450/depositphotos_190333424-stock-photo-alert-freelancer-smiling-and-drinking.jpg",
            cost: "22",
          },
          {
            heading: "Sales Master",
            description: "Learn sales strategies.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aOn4EYz9avzl9O5NyEsF7gyYy_tHZBGExQ&s",
            cost: "22",
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
          {
            heading: "Combo Deals",
            description: "Buy 1 Get 1 on selected combos and other discounts",
            image:
              "https://www.shutterstock.com/image-vector/banner-combo-deal-flat-style-600nw-2207625021.jpg",
            cost: "31",
          },
          {
            heading: "Happy Hours",
            description: "Get amazing discounts during happy hours.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
            cost: "32",
          },
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons and many more.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
            cost: "12",
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
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons and many more.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
            cost: "12",
          },
          {
            heading: "Night Owl Offers",
            description: "Late-night discounts on fast food.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqtquVp44C4U2UJxHocYKF-qfLx7om3SSvQ&s",
            cost: "11",
          },
          {
            heading: "Healthy Meals",
            description: "Special discounts on healthy food.",
            image:
              "https://media.istockphoto.com/id/1293479617/photo/woman-hands-eating-vegan-salad-of-baked-vegetables-avocado-tofu-and-buckwheat-buddha-bowl-top.jpg?s=612x612&w=0&k=20&c=jATx1jeDBsUgT2zIla6eh-i1OUPvIfgkb0-4QnAruAY=",
            cost: "22",
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
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons and many more.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
            cost: "12",
          },
          {
            heading: "Family Feast",
            description: "Save big on family meal combos and have good offers.",
            image:
              "https://media.istockphoto.com/id/1181396290/photo/people-laughing-at-dinner-table.jpg?s=612x612&w=0&k=20&c=6Vyn5ppOp9fLqOeVKL9KCWfNYS69_SchgiOyviVAVuM=",
            cost: "81",
          },
          {
            heading: "₹99 Pizzas",
            description: "Delicious pizzas starting at ₹99 with great deals.",
            image:
              "https://www.dominos.co.in/great-deals/online-pizza-coupons/images/story_images/evd/evd-99.jpg",
            cost: "55",
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
          {
            heading: "Happy Hours",
            description: "Get amazing discounts.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
            cost: "45",
          },
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
            cost: "75",
          },
          {
            heading: "₹199 Meal",
            description: "A complete KFC meal at ₹199.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihmGxTbJmJy45AHzIme8TNtLEEku9LBzE7A&s",
            cost: "85",
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
          {
            heading: "Dessert Deals",
            description: "Exclusive offers on desserts.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfA6GXa0E0PebyCGD65CS_XWUsaq3tYAzKQ&s",
            cost: "51",
          },
          {
            heading: "Happy Hours",
            description: "Get amazing discounts.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
            cost: "27",
          },
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
            cost: "77",
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
              cost:'57'},
          {
            heading: "Cheesy Treat",
            description: "Extra cheese at no extra cost.",
            image:
              "https://www.shutterstock.com/image-photo/cheese-fries-cheesy-chips-dish-600nw-2501622437.jpg",
              cost:'53'},
          {
            heading: "Party Combo",
            description: "Big savings on group meal deals.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUu9X1AtgDk6GIklF5ZGokXfP9sX54bHiUA&s",
              cost:'17'},
          {
            heading: "Cheesy Sticks",
            description: "Free cheesy sticks on orders ₹500+.",
            image:
              "https://t4.ftcdn.net/jpg/10/45/92/27/360_F_1045922783_vjSb56gP34PnLO3obPpScZq7kbKvxlKY.jpg",
              cost:'52'},
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
              cost:'17'},
          {
            heading: "Combo Box",
            description: "Perfect meal box for 2.",
            image:
              "https://www.shutterstock.com/image-photo/mutton-nihari-combo-dal-makhani-600nw-2176280477.jpg",
              cost:'67' },
          {
            heading: "Free Dessert",
            description: "Gulab Jamun free with large orders.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfA6GXa0E0PebyCGD65CS_XWUsaq3tYAzKQ&s",
              cost:'54'},
          {
            heading: "Happy Hours",
            description: "Get amazing discounts.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
              cost:'50'},
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
              cost:'67'},
          {
            heading: "Midweek Treat",
            description: "Flat ₹100 off on Wednesdays.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKSsFuxiqDzv5-ABK6xq0mMK2gt0HpwHGAw&s",
              cost:'47'},
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
              cost:'27'},
          {
            heading: "Happy Hours",
            description: "Get amazing discounts.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
              cost:'17' },
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
              cost:'36'},
          {
            heading: "Whopper Deal",
            description: "2 Whoppers at ₹199 only.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvdcoag4H_bi5yZwHhwy69cHIAmow1xkQKA&s",
              cost:'87'},
          {
            heading: "Cheese Blast",
            description: "Extra cheese in every bite.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Di5f35Oi58zRqpHcjxPAgEnk8Rm4skPKbA&s",
              cost:'27'},
          {
            heading: "Weekend Feast",
            description: "Special weekend combo meals.",
            image:
              "https://media.istockphoto.com/id/694177316/photo/bbq-feast.jpg?s=612x612&w=0&k=20&c=8oU-S22JlBPTiHBBwZiJYs7fCJWiXjVI0VGWoTtlzXI=",
              cost:'37'},
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
              cost:'17'},
          {
            heading: "Happy Hours",
            description: "Get amazing discounts during happy hours.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
          
              cost:'7'  },
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons and many more.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
          
              cost:'17'  },
          {
            heading: "Women's Handbag",
            description: "Trendy handbags with premium quality.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPm85N0ymHV3hn6nCeqqczjQi-p4HBDi-Qw&s",
              cost:'51'},
          {
            heading: "Sneakers",
            description:
              "Comfortable sneakers for all occasions and many more.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgoWRdP6-Jl7KDvGgQRk9JfKapm0TEhk3WQ&s",
              cost:'5'},
          {
            heading: "Denim Jacket",
            description:
              "Classic denim jackets for all seasons with many more.",
            image:
              "https://thumbs.dreamstime.com/b/jean-denim-female-jacket-isolated-long-sleeve-dark-blue-casual-fashion-women-clothing-91741998.jpg",
              cost:'5'},
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
              cost:'51'},
          {
            heading: "Happy Hours",
            description: "Get amazing discounts during happy hours.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
              cost:'17'},
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons and many more.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
              cost:'17'},
          {
            heading: "Face Serum",
            description:
              "Hydrating and brightening face serum with discount price.",
            image:
              "https://www.sageapothecary.in/cdn/shop/files/3_1.jpg?v=1702363934",
              cost:'88'},
          {
            heading: "Makeup Kit",
            description: "Complete makeup essentials in one kit.",
            image: "https://m.media-amazon.com/images/I/71IWdLegezL.jpg",
            cost:'90'},
          {
            heading: "Hair Straightener",
            description: "Salon-style straightening at home with extra care.",
            image:
              "https://media.istockphoto.com/id/1470788970/photo/hair-care-woman-studio-and-flat-iron-with-smile-happy-for-self-care-cosmetics-by-backdrop.jpg?s=612x612&w=0&k=20&c=b4gdUIloz0-sxbFtXcaapbjiRGJvnr6Uwjm3ccVErjw=",
              cost:'37'},
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
              cost:'17'},
          {
            heading: "Happy Hours",
            description: "Get amazing discounts during happy hours.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
              cost:'57'},
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons and many more.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
              cost:'52'},
          {
            heading: "Bluetooth Earbuds",
            description: "Wireless earbuds with high-quality sound.",
            image: "https://m.media-amazon.com/images/I/51Oy4qcY9wL.jpg",
            cost:'42'},
          {
            heading: "Backpack",
            description: "Durable and spacious backpack for travel.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1TA4WlrkHJgXsqN1IgzQkKkw2OJxw4Klng&s",
              cost:'12'},
          {
            heading: "Kitchen Blender",
            description: "Powerful blender for daily cooking needs.",
            image:
              "https://media.istockphoto.com/id/1351622013/photo/electric-blender-with-fresh-homemade-fruit-smoothie-on-table.jpg?s=612x612&w=0&k=20&c=xV1WnJfVF0vmvx9SBZls-jyBla0nkESWgTOPylI0TBs=",
              cost:'11'},
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
              cost:'52'},
          {
            heading: "Happy Hours",
            description: "Get amazing discounts during happy hours.",
            image:
              "https://media.istockphoto.com/id/1127069587/photo/happy-hour-neon-sign-in-blue-and-red-color-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=JQ6JXgBpyR3pLndd1b96o9_h9u2ztwSeU8pFN8MJSoY=",
              cost:'17'},
          {
            heading: "Festive Offers",
            description: "Special discounts for festive seasons and many more.",
            image:
              "https://media.istockphoto.com/id/1264237647/photo/special-offer-sale-price-tag.jpg?s=612x612&w=0&k=20&c=lP7cd4VAqq1_RrH-ZrNojJcmuvduJXLbSSXf3dtT6lM=",
              cost:'17'},
          {
            heading: "Wireless Mouse",
            description: "Smooth and responsive wireless mouse.",
            image:
              "https://m.media-amazon.com/images/I/51s7Wdlj1GL._AC_UF1000,1000_QL80_.jpg",
          
              cost:'19'  },
          {
            heading: "Office Chair",
            description: "Ergonomic chair for long working hours.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3gc1lTT3XaoktZHyTbn6VBdTaMEYoe1GsA&s",
              cost:'27'},
          {
            heading: "Smart LED TV",
            description: "Full HD Smart LED TV with vibrant display.",
            image:
              "https://5.imimg.com/data5/SELLER/Default/2023/2/PA/DW/QY/61811538/zd-rtk0043s-43-inch-smart-led-tv-500x500.jpg",
              cost:'57' },
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
            cost:'99'},
          {
            heading: "Shea Body Butter",
            description: "Deep nourishing body butter.",
            image:
              "https://img.freepik.com/free-photo/boomers-using-cbd-oil-cream-treating-body-pain_23-2151263468.jpg",
              cost:'19'},
          {
            heading: "Vitamin E Cream",
            description: "Hydrating day cream with vitamin E.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcm8yimVg6w-93pbXZ1sGIGM0QHEftD6om4A&s",
              cost:'98'},
          {
            heading: "Aloe Vera Gel",
            description: "Soothing gel for sensitive skin.",
            image: "https://m.media-amazon.com/images/I/71gp3EiyIwL.jpg",
            cost:'21'},
          {
            heading: "Charcoal Face Mask",
            description: "Detoxifying mask for deep cleansing.",
            image:
              "https://m.media-amazon.com/images/I/71d1P1DIfuL._SL1500_.jpg",
              cost:'92' },
          {
            heading: "Rose Water Toner",
            description: "Natural toner for glowing skin.",
            image:
              "https://m.media-amazon.com/images/I/71brxL2FzNL._SL1500_.jpg",
              cost:'19'},
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
              cost:'19'},
          {
            heading: "Vitamin C Face Wash",
            description: "Brightening face wash for glowing skin.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1CQx0YCSxj2Jb1tU6hmIR4uwMBjIzn4ZFw&s",
              cost:'19'},
          {
            heading: "Charcoal Face Mask",
            description: "Detoxifying mask for deep cleansing and many more.",
            image:
              "https://m.media-amazon.com/images/I/71d1P1DIfuL._SL1500_.jpg",
              cost:'33'},
          {
            heading: "Rose Water Toner",
            description: "Natural toner for glowing skin with offer prices.",
            image:
              "https://m.media-amazon.com/images/I/71brxL2FzNL._SL1500_.jpg",
              cost:'39'},
          {
            heading: "Ubtan Face Mask",
            description: "Natural glow-enhancing face mask and many more.",
            image: "https://m.media-amazon.com/images/I/51lVrQfquyL.jpg",
            cost:'39'},
          {
            heading: "Aloe Vera Gel",
            description: "Pure aloe vera gel for skin and hair and many more.",
            image:
              "https://m.media-amazon.com/images/I/41lZCYxtkfL._BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
              cost:'59'},
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
              cost:'29'},
          {
            heading: "Charcoal Face Wash",
            description: "Deep-cleansing face wash with activated charcoal.",
            image: "https://m.media-amazon.com/images/I/71IG0qDr4VL.jpg",
            cost:'12'},
          {
            heading: "Rose Water Toner",
            description: "Natural toner for glowing skin with offer prices.",
            image:
              "https://m.media-amazon.com/images/I/71brxL2FzNL._SL1500_.jpg",
              cost:'93'},
          {
            heading: "Ubtan Face Mask",
            description: "Natural glow-enhancing face mask and many more.",
            image: "https://m.media-amazon.com/images/I/51lVrQfquyL.jpg",
            cost:'55'},
          {
            heading: "Perfume for Men",
            description:
              "Long-lasting fragrance for daily wear with limited discount.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKxcslyUUlk1OaylonH5uL0uOLmfkZj4_3w&s",
              cost:'33'},
          {
            heading: "Shaving Foam",
            description: "Smooth and irritation-free shaving foam.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8usTgU2wRN_KxfCOhVWnGh9rx6gKTEwFFg&s",
              cost:'19'},
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
              cost:'19' },
          {
            heading: "Vitamin C Serum",
            description: "Brightening serum for radiant skin.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHtkKBiomvkhUvylFu4L-B0UtWfblTRnnrA&s",
              cost:'52'},
          {
            heading: "Rose Water Toner",
            description: "Natural toner for glowing skin with offer prices.",
            image:
              "https://m.media-amazon.com/images/I/71brxL2FzNL._SL1500_.jpg",
              cost:'44'},
          {
            heading: "Ubtan Face Mask",
            description: "Natural glow-enhancing face mask and many more.",
            image: "https://m.media-amazon.com/images/I/51lVrQfquyL.jpg",
            cost:'22'},
          {
            heading: "Aloe Vera Gel",
            description: "Multi-purpose soothing gel.",
            image: "https://m.media-amazon.com/images/I/51i2REZrSTL.jpg",
            cost:'12'},
          {
            heading: "Sunscreen SPF 50",
            description: "Protects skin from harmful UV rays.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0teDPTi5bGZ4OJefp3Fhtxgyy31UZ1Et-Tg&s",
              cost:'12'},
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
              cost:'91'},
          {
            heading: "Beard Trimmer",
            description: "Precision trimming for a sharp look.",
            image:
              "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ecfe6855-6777-4b9f-ad8b-8455c9bc23de.__CR0,0,970,600_PT0_SX970_V1___.png",
              cost:'55'},
          {
            heading: "Rose Water Toner",
            description: "Natural toner for glowing skin with offer prices.",
            image:
              "https://m.media-amazon.com/images/I/71brxL2FzNL._SL1500_.jpg",
              cost:'41'},
          {
            heading: "Ubtan Face Mask",
            description: "Natural glow-enhancing face mask and many more.",
            image: "https://m.media-amazon.com/images/I/51lVrQfquyL.jpg",
            cost:'99'},
          {
            heading: "Shaving Kit",
            description: "Complete shaving essentials kit.",
            image: "https://m.media-amazon.com/images/I/71S-rhamLGL.jpg",
            cost:'44'},
          {
            heading: "After Shave Balm",
            description: "Hydrates skin post-shave.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNFRPrVCxcubNFzlDah0cCRQpaagkZGkNPww&s",
              cost:'79'},
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
          cost:'91'
            },
          {
            heading: "Handbag",
            description: "Elegant handbags with spacious compartments.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPm85N0ymHV3hn6nCeqqczjQi-p4HBDi-Qw&s",
              cost:'92' },
          {
            heading: "Men's Jeans",
            description:
              "Classic fit denim jeans for casual wear with discount.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iUpq6kui4TSSg0vCjGz1K0WPNGFH5ZD5_Q&s",
              cost:'19'},
          {
            heading: "Perfume",
            description: "Long-lasting fragrances for all occasions.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKxcslyUUlk1OaylonH5uL0uOLmfkZj4_3w&s",
              cost:'29'},
          {
            heading: "Smartwatch",
            description: "Feature-packed smartwatches with fitness tracking.",
            image:
              "https://m.media-amazon.com/images/I/71BYlD9VsZL._SL1500_.jpg",
              cost:'11'},
          {
            heading: "Sneakers",
            description: "Trendy and comfortable sneakers for everyday wear.",
            image:
              "https://m.media-amazon.com/images/I/71CiUEg3zPL._SL1500_.jpg",
              cost:'19'},
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
              cost:'91'},
          {
            heading: "Trekking Shoes",
            description: "High-grip trekking shoes for outdoor adventures.",
            image:
              "https://i.pinimg.com/474x/4a/47/15/4a47154a58e68e88fa422db50e0edc68.jpg",
              cost:'11'},
          {
            heading: "Rain Jacket",
            description: "Waterproof and wind-resistant rain jackets.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSom7xfhfDJRxaPGce9lyY_NldkH7fDL6aduQ&s",
              cost:'11'},
          {
            heading: "Men's Jeans",
            description:
              "Classic fit denim jeans for casual wear with discount.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iUpq6kui4TSSg0vCjGz1K0WPNGFH5ZD5_Q&s",
              cost:'33'},
          {
            heading: "Perfume",
            description: "Long-lasting fragrances for all occasions.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKxcslyUUlk1OaylonH5uL0uOLmfkZj4_3w&s",
              cost:'11'},
          {
            heading: "Duffle Bag",
            description: "Spacious and sturdy duffle bags for travel.",
            image:
              "https://m.media-amazon.com/images/I/71DIsK2MLDL._AC_UY1100_.jpg",
              cost:'66'},
        ],
      },
      {
        name: "The Souled Store",
        img: Souled,
        discount: "$3000",
        deals: [
          {
            heading: "Graphic T-Shirt",
            description: "Trendy pop-culture-themed t-shirts and many more.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEe2-iDU5bAxGAwfIFIh7IOnoCoJ3qVGd48Q&s",
          },
          {
            heading: "Hoodie",
            description: "Comfortable and stylish hoodies for all seasons.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCsikWTOXaL3WeOoADKadw_BM9KqFaV4-ShA&s",
          },
          {
            heading: "Men's Jeans",
            description:
              "Classic fit denim jeans for casual wear with discount.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iUpq6kui4TSSg0vCjGz1K0WPNGFH5ZD5_Q&s",
          },
          {
            heading: "Perfume",
            description: "Long-lasting fragrances for all occasions.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKxcslyUUlk1OaylonH5uL0uOLmfkZj4_3w&s",
          },
          {
            heading: "Joggers",
            description:
              "Soft cotton joggers for a relaxed fit with minimum price.",
            image:
              "https://m.media-amazon.com/images/I/71CCA9meydL._AC_UY1100_.jpg",
          },
          {
            heading: "Caps",
            description: "Cool caps with unique printed designs.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7DezbzRs3NzLyix3DaqJL7xBglfwFLHxLw&s",
          },
        ],
      },
      {
        name: "XYXX",
        img: Xyxx,
        discount: "$2400",
        deals: [
          {
            heading: "Men's Boxer Shorts",
            description: "Breathable cotton boxers with soft fabric.",
            image:
              "https://m.media-amazon.com/images/I/81S44lRcM0L._AC_UY1100_.jpg",
          },
          {
            heading: "Vest",
            description: "Ultra-soft and sweat-absorbent vests.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflsVWc_jmp9FtHuTpU_eR_Sf8Lb-gfRVzYQ&s",
          },
          {
            heading: "Thermals",
            description: "Warm and stretchable thermal wear and many more.",
            image:
              "https://m.media-amazon.com/images/I/41tyV0cbgFL._AC_UY1100_.jpg",
          },
          {
            heading: "Men's Jeans",
            description:
              "Classic fit denim jeans for casual wear with discount.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iUpq6kui4TSSg0vCjGz1K0WPNGFH5ZD5_Q&s",
          },
          {
            heading: "Perfume",
            description: "Long-lasting fragrances for all occasions.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKxcslyUUlk1OaylonH5uL0uOLmfkZj4_3w&s",
          },
          {
            heading: "Lounge Pants",
            description: "Comfortable lounge pants for everyday wear.",
            image:
              "https://imagescdn.vanheusenindia.com/img/app/product/6/671673-6967687.jpg",
          },
        ],
      },
      {
        name: "SareesKart",
        img: SareesKart,
        discount: "$4000",
        deals: [
          {
            heading: "Silk Saree",
            description: "Elegant silk sarees for special occasions.",
            image:
              "https://media.istockphoto.com/id/89323827/photo/indian-sarees.jpg?s=612x612&w=0&k=20&c=IYClFnkKf0QinOD3A0x7KXXMTXII9V9KBBewNjDpFhM=",
          },
          {
            heading: "Cotton Saree",
            description: "Lightweight and breathable cotton sarees.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWcY1LfVeEe_BFQQRXFuuvUrCLOc1nMxL-Q&s",
          },
          {
            heading: "Designer Saree",
            description: "Exclusive designer sarees with intricate work.",
            image:
              "https://5.imimg.com/data5/SELLER/Default/2020/10/JI/PR/ZX/108280460/designer-saree.jpg",
          },
          {
            heading: "Party Wear Saree",
            description: "Stylish sarees perfect for evening parties.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqna2bVWmOKrdrZR-pRAvxKc0Q_SKIArXKzA&s",
          },
          {
            heading: "Banarasi Saree",
            description: "Authentic Banarasi sarees with rich embroidery.",
            image:
              "https://m.media-amazon.com/images/I/81Y5Xa8hnPL._SL1500_.jpg",
          },
          {
            heading: "Chiffon Saree",
            description: "Light and flowy chiffon sarees for a graceful look.",
            image:
              "https://m.media-amazon.com/images/I/81N-JKQwXfL._SL1500_.jpg",
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
          },
          {
            heading: "Cab Discount",
            description: "Affordable intercity cab rides with minimum price.",
            image:
              "https://www.vedantcabs.com/images/pune-to-outstation-cab.png",
          },
          {
            heading: "Free Rides",
            description: "Discounted ride passes for daily commutes.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfRHkY5o0FkI1N79eZNa45HRZ8KegdpruuA&s",
          },
          {
            heading: "Outstation Cab",
            description: "Affordable intercity cab rides with minimum price.",
            image:
              "https://www.vedantcabs.com/images/pune-to-outstation-cab.png",
          },
          {
            heading: "Auto Rides",
            description: "Low-cost auto rides for short distances.",
            image:
              "https://www.shutterstock.com/image-photo/auto-rickshaw-jodhpur-rajasthan-india-600nw-1267482334.jpg",
          },
          {
            heading: "Luxury Car Rentals",
            description: "Premium car rentals for special occasions.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmxFIJ9YKA4-P-oqN_th0SwXway_MHQkizw&s",
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
        name: "Wazirx",
        code: "xv7fwxg8",
        link: "https://wazirx.com/invite/xv7fwxg8",
        img: "https://www.svgrepo.com/show/331638/wazirx.svg",
        discount: "$4000",
        deals: [
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
          },
          {
            heading: "Referral Program",
            description: "Invite friends and earn commissions on their trades.",
            image:
              "https://www.shutterstock.com/image-photo/refer-friend-business-partners-teamwork-600nw-1918457357.jpg",
          },
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
          },
          {
            heading: "NFT Marketplace",
            description:
              "Discover, buy, and sell NFTs with ease and have lots of learning.",
            image:
              "https://www.shutterstock.com/image-photo/nonfungible-token-nft-text-cryptocurrency-600nw-2088934725.jpg",
          },
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
          },
          {
            heading: "Advanced Charting tools",
            description:
              "Earn passive income by learning charting tools with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
          },
        ],
      },
      {
        name: "Binance",
        img: "https://www.logo.wine/a/logo/Binance/Binance-Vertical-Logo.wine.svg",
        code: "40093450",
        link: "https://accounts.binance.com/register?ref=40093450",
        discount: "$14000",
        deals: [
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            link: "https://accounts.binance.com/register?ref=EMGYOEKL",
          },
          {
            heading: "Referral Program",
            description: "Invite friends and earn commissions on their trades.",
            image:
              "https://www.shutterstock.com/image-photo/refer-friend-business-partners-teamwork-600nw-1918457357.jpg",
            link: "https://accounts.binance.com/register?ref=TOR4GBZF",
          },
          {
            heading: "Futures Offers",
            description: "High-leverage futures virtual money with low fees.",
            image:
              "https://media.istockphoto.com/id/1349640220/photo/businessman-hand-pointing-finger-to-growth-success-finance-business-chart-of-metaverse.jpg?s=612x612&w=0&k=20&c=XO_1l1e_4Wu999uhozJIsrb7E23PY2jpz34ZwTyJeG8=",
            link: "https://accounts.binance.com/register?ref=OL2RH5NO",
          },
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your free virtual money.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
            link: "https://accounts.binance.com/register?ref=BJ39U3A0",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            link: "https://accounts.binance.com/register?ref=BJ39U3A0",
          },
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
          },
        ],
      },
      {
        name: "KuCoin",
        img: "https://avatars.githubusercontent.com/u/6188901?s=280&v=4",
        code: "rMMFZ8U",
        link: "https://www.kucoin.com/r/af/rMMFZ8U",
        discount: "$4000",
        deals: [
          {
            heading: "Deals Bots",
            description: "Automate deals of virtual money with smart bots.",
            image:
              "https://img.freepik.com/premium-photo/3d-ai-trading-bot-icon-with-stock-exchange-concept-automated-trading-financial-markets-ideal_980716-454967.jpg",
            link: "https://www.kucoin.com/r/af/rMMFZ8U",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
            link: "https://www.kucoin.com/r/af/FREE1000",
          },
          {
            heading: "Security Tools",
            description:
              "Advanced security features for virtual money storage and many more.",
            image: "safepal_security.jpg",
            link: "https://www.kucoin.com/r/af/CHRISTMAS",
          },
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
            link: "https://www.kucoin.com/r/af/GRAB1000",
          },
          {
            heading: "Market Analysis",
            description: "Access professional market research and insights.",
            image:
              "https://media.istockphoto.com/id/1413514774/photo/businessman-drawing-increasing-graph-showing-growing-business-success-and-financial-growth-plan.jpg?s=612x612&w=0&k=20&c=I4t8GP4Dn_GwgC2Ud8UaHV-RyTL1aPBRm6lEgC7RIZc=",
          },
          {
            heading: "Technical Analysis",
            description:
              "Advanced charting tools for traders and many more using tutorial.",
            image: "maven_analysis.jpg",
          },
        ],
      },
      {
        name: "MEXC",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCy3d3A5lHs7820WBxuNUzziiiN68z70Cqg&s",
        code: "mexc-SPOT50",
        link: "https://www.mexc.co/acquisition/custom-sign-up?shareCode=mexc-SPOT50",
        discount: "$14000",
        deals: [
       
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
          },
          {
            heading: "Market Analysis",
            description: "Access professional market research and insights.",
            image:
              "https://media.istockphoto.com/id/1413514774/photo/businessman-drawing-increasing-graph-showing-growing-business-success-and-financial-growth-plan.jpg?s=612x612&w=0&k=20&c=I4t8GP4Dn_GwgC2Ud8UaHV-RyTL1aPBRm6lEgC7RIZc=",
          },
          {
            heading: "Free Token Sales",
            description:
              "Participate in new token launches and get token free.",
            image:
              "https://content.jdmagicbox.com/comp/def_content/lottery-dealers/shutterstock-252066604-lottery-dealers-1-p9mys.jpg",
          },
        ],
      },
      {
        name: "ByBit",
        img: ByBit,
        code: "FREE500",
        link: "https://partner.bybitglobal.com/b/TillCorePromotion",
        discount: "$24000",
        deals: [
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
            link: "https://partner.bybitglobal.com/b/TillCorePromotion",
          },
          {
            heading: "Referral Program",
            description: "Invite friends and earn commissions on their trades.",
            image:
              "https://www.shutterstock.com/image-photo/refer-friend-business-partners-teamwork-600nw-1918457357.jpg",
            link: "https://partner.bybitglobal.com/b/48538",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
            link: "https://partner.bybitglobal.com/b/GRAB1000",
          },
          {
            heading: "Derivatives Market",
            description: "Trade digital money derivatives with advanced tools.",
            image: "weex_derivatives.jpg",
            link: "https://partner.bybitglobal.com/b/FUTURE500",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
          },
          {
            heading: "Staking Rewards",
            description:
              "Earn rewards by staking popular virtual money and many more.",
            image: "weex_staking.jpg",
          },
        ],
      },
      {
        name: "BingX",
        img: "https://cdn.worldvectorlogo.com/logos/bing-x.svg",
        code: "UAIMID",
        link: "https://bingx.pro/invite/UAIMID/",
        discount: "$14000",
        deals: [
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
          },

          {
            heading: "Referral Program",
            description: "Invite friends and earn commissions on their trades.",
            image:
              "https://www.shutterstock.com/image-photo/refer-friend-business-partners-teamwork-600nw-1918457357.jpg",
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
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
          },
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
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
          },
          {
            heading: "Earn Rewards",
            description:
              "Get cashback and offers with more discounts.",
            image: "phemex_rewards.jpg",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
          },
          {
            heading: "deal of the day",
            description: "Mimic top traders with one click and many more.",
            image: "bitget_copy.jpg",
          },
          {
            heading: "Free CFDs",
            description:
              "Free CFD's make by talking contracts and leverage with great offers.",
            image: "qx_cfd.jpg",
          },
        ],
      },
      {
        name: "Weex",
        img: Weex,
        discount: "$4000",
        deals: [
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
          },
          {
            heading: "Derivatives Market",
            description:
              "Learing about derivatives market with advanced tools with many tutorial.",
            image: "weex_derivatives.jpg",
          },
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
          },
          {
            heading: "Staking Rewards",
            description: "Earn rewards by staking popular tokens.",
            image: "weex_staking.jpg",
          },
        ],
      },
      {
        name: "Bitvavo",
        img: Bitvavo,
        discount: "$5500",
        link: "https://account.bitvavo.com/login?nextUrl=/",
        deals: [
          {
            heading: "Low-Fee Digital Money",
            description:
              "Free learning for digital money with some of the lowest fees.",
            image: "bitvavo_fees.jpg",
          },
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
          },
          {
            heading: "Instant Euro Deposits",
            description: "Easy fiat-to-money deposits for EU users.",
            image: "bitvavo_euro.jpg",
          },
          {
            heading: "Passive Gifts",
            description: "Earn gitfs on your virtual money holdings.",
            image: "bitvavo_income.jpg",
          },
          {
            heading: "Free API",
            description:
              "Automate trades and have tutorial with Bitvavo's API.",
            image: "bitvavo_api.jpg",
          },
        ],
      },
      {
        name: "QX Broker",
        img: OxBroker,
        discount: "$4400",
        deals: [
          {
            heading: "Forex Tutorial",
            description: "Trade major forex pairs with low spreads.",
            image: "qx_forex.jpg",
          },
          {
            heading: "Indices & Stocks",
            description: "Invest in global indices and company stocks.",
            image: "qx_indices.jpg",
          },
          {
            heading: "Zero Commission tutorial",
            description: "Trade with zero commission on select assets.",
            image: "weex_zero_commission.jpg",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
          },
          {
            heading: "Free CFDs",
            description:
              "Free CFD's make by talking contracts and leverage with great offers.",
            image: "qx_cfd.jpg",
          },
          {
            heading: "Commodities",
            description: "Trade gold, oil, and other commodities.",
            image: "qx_commodities.jpg",
          },
        ],
      },
      {
        name: "Alpha Capital",
        img: "https://www.alphacapital.in/assets/images/project_image.png",
        discount: "$13000",
        deals: [
          {
            heading: "Wealth Management",
            description: "Smart investment solutions for long-term growth.",
            image: "alpha_wealth.jpg",
          },
          {
            heading: "Zero Commission tutorial",
            description: "Trade with zero commission on select assets.",
            image: "weex_zero_commission.jpg",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
          },
          {
            heading: "Hedge Funds",
            description: "Diversified hedge fund investment options.",
            image: "alpha_hedge.jpg",
          },
          {
            heading: "Portfolio Optimization",
            description: "AI-driven asset allocation strategies.",
            image: "alpha_portfolio.jpg",
          },
          {
            heading: "Private Equity",
            description: "Exclusive private equity investment opportunities.",
            image: "alpha_equity.jpg",
          },
        ],
      },
      {
        name: "Maven Tutorial",
        img: Manven,
        discount: "$14000",
        deals: [
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
          },
          {
            heading: "Wealth Management",
            description: "Smart investment solutions for long-term growth.",
            image: "alpha_wealth.jpg",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
          },
          {
            heading: "Risk Management",
            description: "Learn advanced risk management techniques.",
            image: "maven_risk.jpg",
          },
          {
            heading: "Technical Analysis",
            description: "Advanced charting tools for traders.",
            image: "maven_analysis.jpg",
          },
        ],
      },
      {
        name: "Funder Pro",
        link: "https://funderpro.cxclick.com/visit/?bta=36023&brand=funderpro",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQNu_s6IDafkKJEwow1X9iiABcPzmxfCHGA&s",
        discount: "$14000",
        deals: [
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
          },
          {
            heading: "Risk Management",
            description: "Learn advanced risk management techniques.",
            image: "maven_risk.jpg",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
          },
          {
            heading: "Proprietary Firm",
            description: "Access capital from a professional firm.",
            image: "funder_firm.jpg",
          },
          {
            heading: "Forex Challenges",
            description: "Pass challenges to get funded accounts.",
            image: "funder_forex.jpg",
          },
          {
            heading: "Scaling Plan",
            description: "Increase your funding with successful trades.",
            image: "funder_scaling.jpg",
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
          },
          {
            heading: "DeFi Access",
            description: "Connect and trade on decentralized exchanges.",
            image: "safepal_defi.jpg",
          },
          {
            heading: "Multi-Chain Support",
            description: "Manage multiple blockchains in one app.",
            image: "safepal_multichain.jpg",
          },
          {
            heading: "Risk Management",
            description: "Learn advanced risk management techniques.",
            image: "maven_risk.jpg",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
          },
          {
            heading: "Security Tools",
            description:
              "Advanced security features for virtual money storage and many more.",
            image: "safepal_security.jpg",
          },
        ],
      },
      {
        name: "Pocket Option",
        img: "https://cdn.brandfetch.io/id9EQCtfCl/theme/dark/logo.svg?c=1bx1743063093254id64Mup7ac4bRiZYtB&t=1732540253212",
        discount: "$41000",
        deals: [
          {
            heading: "Binary Options",
            description: "Trade binary options with fixed payouts.",
            image: "pocket_binary.jpg",
          },
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
          },
          {
            heading: "Risk Management",
            description: "Learn advanced risk management techniques.",
            image: "maven_risk.jpg",
          },
          {
            heading: "Advanced Charting Tools",
            description:
              "Analyze the markets with cutting-edge charting tools.",
            image: "weex_charting.jpg",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
          },
          {
            heading: "Demo Account",
            description:
              "Practice virtual money with virtual funds and many more.",
            image: "pocket_demo.jpg",
          },
        ],
      },
      {
        name: "E8",
        code: "FREE500",
        link: "https://e8markets.com/a/FREE500",
        img: "https://t3.ftcdn.net/jpg/04/78/81/56/360_F_478815602_LTFfHcntjzEZoyMOps6a14UCI6TlQF4b.jpg",
        discount: "$14000",
        deals: [
          {
            heading: "Funded Accounts",
            description:
              "Trade with institutional-grade funds with great deals.",
            image: "e8_funded.jpg",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
          },
          {
            heading: "Risk-Free Trades",
            description:
              "Trade without worrying about losses have more offers.",
            image: "e8_riskfree.jpg",
          },
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
          },
          {
            heading: "Demo Account",
            description:
              "Practice virtual money with virtual funds and many more.",
            image: "pocket_demo.jpg",
          },
          {
            heading: "Forex Leverage",
            description: "Trade forex with high leverage have more offers",
            image: "e8_leverage.jpg",
          },
        ],
      },
      {
        name: "Phemex",
        img: Phemex,
        code: "G5L2W2",
        link: "https://phemex.com/account/referral/invite-friends-entry?referralCode=G5L2W2",
        discount: "$12000",
        deals: [
          {
            heading: "Staking",
            description:
              "Earn passive income by staking your virtual money with great offers.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXNDJfyoPw6Ix1s9ql6NLLLzGSdyY9oVZ-Q&s",
          },
          {
            heading: "Virtual Futures",
            description: "Virtual perpetual contracts with deep liquidity.",
            image: "phemex_futures.jpg",
          },
          {
            heading: "Virtual gift delas",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
          },
          {
            heading: "P2P Deals",
            description:
              "Buy and sell for free by paper money with great offers.",
            image:
              "https://www.shutterstock.com/image-photo/peer-to-peer-payment-concept-online-600nw-1787575374.jpg",
          },
          {
            heading: "Earn Rewards",
            description:
              "Get cashback and bonuses on trades with more discounts.",
            image: "phemex_rewards.jpg",
          },
          {
            heading: "Virtual Money",
            description:
              "Best Free Deals to Learn About Virtual Money and other exclusive rewards.",
            image: "phemex_rewards.jpg",
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
        discount: "$4000",
        deals: [
          {
            heading: "Email Marketing",
            description: "Automate your email campaigns with ease.",
            image:
              "https://media.istockphoto.com/id/1452950987/vector/digital-email-marketing-reaching-online-audience-with-email-marketing-campaign-newsletter.jpg?s=612x612&w=0&k=20&c=q8UPJHIVSRZFDUzqLlYlzuVfmQ2AmD7ds-KX55OfGhk=",
          },
          {
            heading: "Landing Pages",
            description: "Create high-converting landing pages with many more.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2dye5xvWGVXYoBMxdDTtDLL0nyIYHPPmeA&s",
          },
          {
            heading: "Webinars",
            description: "Host and manage online webinars with ease.",
            image:
              "https://img.freepik.com/premium-photo/man-working-laptop-with-word-webinar-computer-screen_771335-10103.jpg",
          },
          {
            heading: "Marketing Automation",
            description: "Streamline your marketing workflows with tutorials.",
            image:
              "https://img.freepik.com/free-vector/screen-marketing-automation-background_23-2148007434.jpg",
          },
          {
            heading: "SEO Optimization",
            description: "Boost your website rankings with powerful SEO tools.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eQpGHgR8nv47cH0hPZbxd6QuUQKtkKGRPQ&s",
          },
          {
            heading: "Social Media Ads",
            description: "Run targeted ad campaigns on social media platforms.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_VydOfjFVRJD1bWRmfv1drkYYiKH2Wcx6g&s",
          },
        ],
      },
      {
        name: "Vid IQ",
        img: VidIQ,
        discount: "$4400",
        deals: [
          {
            heading: "YouTube SEO",
            description: "Boost your videos with advanced analytics.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4xyLfNCZklM2ozYEmGPTQuCFbIezaBvOQA&s",
          },
          {
            heading: "Keyword Research",
            description: "Find the best keywords for video ranking.",
            image:
              "https://searchengineland.com/wp-content/seloads/2015/01/keyword-magnifying-glass-ss-1920.jpg",
          },
          {
            heading: "Competitor Analysis",
            description: "Analyze top-performing channels with expert tools.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11SlFkG6kv_XtZRLGSRhmB6kN8-uLXHqQjA&s",
          },
          {
            heading: "SEO Optimization",
            description: "Boost your website rankings with powerful SEO tools.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eQpGHgR8nv47cH0hPZbxd6QuUQKtkKGRPQ&s",
          },
          {
            heading: "Social Media Ads",
            description: "Run targeted ad campaigns on social media platforms.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_VydOfjFVRJD1bWRmfv1drkYYiKH2Wcx6g&s",
          },
          {
            heading: "Video Optimization",
            description: "Improve your thumbnails, titles, and tags.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweH6rgPZa35g1B6cPsPTuE8uJ7wLVR1C_1g&s",
          },
        ],
      },
    ],
  },
];





const data = (categories) => {
    for (let i = 0; i < categories.length; i++) {
        for (let j = 0; j < categories[i].subcategories.length; j++) {
            let subcategory = categories[i].subcategories[j];

            // Check and assign random discount if greater than 2000
            if (subcategory.discount > 2000) {
                subcategory.discount = (Math.floor(Math.random() * 1001) + 1000).toString(); // Random 1000-2000 as string
            }

            for (let k = 0; k < subcategory.deals.length; k++) {
                let deal = subcategory.deals[k];

                // Check and assign random cost if undefined
                if (deal.cost === undefined) {
                    deal.cost = (Math.floor(Math.random() * 100) + 1).toString(); // Random number 1-100
                }
            }
        }
    }
    return categories; // Return updated data
};

const updatedData = data(categories);

categories = updatedData;
