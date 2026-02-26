import { useState, useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Star, ShieldCheck, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { trendingStores } from "../Category";
import CouponCard from "./CouponCard";
import InfoSection from "./InfoSection";

// Lazy load banner components for better performance
const BannerSection = lazy(() => import("./BannerSection"));
const FinanceBanner = lazy(() => import("./FinanceBanner"));
const GrowBanner = lazy(() => import("./GrowBanner"));
const BybitBanner = lazy(() => import("./BybitBanner"));
const BitgetBanner = lazy(() => import("./BitgetBanner"));
const BinanceBanner = lazy(() => import("./BinanceBanner"));
const MexcBanner = lazy(() => import("./MexcBanner"));
const WazirxBanner = lazy(() => import("./WazirxBanner"));
const KucoinBanner = lazy(() => import("./KucoinBanner"));
const BitvavoBanner = lazy(() => import("./BitvavoBanner"));
const PhemexBanner = lazy(() => import("./PhemexBanner"));
const BingxBanner = lazy(() => import("./BingxBanner"));
const CountryBanner = lazy(() => import("./CountrydelightBanner"));
const HostingerBanner = lazy(() => import("./HostingerBanner"));
const WeexBanner = lazy(() => import("./WeexBanner"));
const QxBanner = lazy(() => import("./QxBanner"));
const E8Banner = lazy(() => import("./E8Banner"));
const AlphaBanner = lazy(() => import("./AlphaBanner"));
const FounderBanner = lazy(() => import("./FounderBanner"));
const XtBanner = lazy(() => import("./XtBanner"));
const BlofinBanner = lazy(() => import("./BlofinBanner"));
const KvbBanner = lazy(() => import("./KvbBanner"));

const CategoryDetail = () => {
  const [categoryData, setCategoryData] = useState(null);
  function findCouponDeal(trendingStores, couponName) {
    couponName = couponName.replace(/[-\s]/g, "").toLowerCase();
    for (let category of trendingStores) {
      for (let subcategory of category.subcategories) {
        const name = subcategory.name.replace(/[-\s]/g, "").toLowerCase();
        if (name === couponName) {
          return subcategory;
        }
      }
    }
    return null;
  }

  useEffect(() => {
    const storedData = localStorage.getItem("category");
    if (storedData) {
      setCategoryData(JSON.parse(storedData));
      localStorage.removeItem("category");
    }
  }, []);
  const { name } = useParams();
  let category = categoryData;
  category =
    category === null ? findCouponDeal(trendingStores, name) : category;
  const ActualCode = category === null ? 0 : category.code;
  const reDirect = category === null ? "https://google.com" : category.link;
  const Product = name.split("-").join(" ");
  const ProductName = category !== null ? category.name : (Product.charAt(0).toUpperCase() + Product.slice(1));
  const rating = 4.5;
  const totalVotes = 1234;
  const totalOffers = 15;
  const discount = category === null ? 0 : category.discount + " Bonus";
  const deals = category === null ? [] : category.deals;
  const data = [
    {
      img: "https://www.shutterstock.com/image-vector/cashback-icon-return-money-cash-600nw-1841362384.jpg",
      title: "Exclusive Industry Savings Inside",
    },
    {
      img: "https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/stores-icon.png",
      title: "300+ Online Brands",
    },
    {
      img: "https://d3mqyttn50wslf.cloudfront.net/modules/web/assets/images/home-page/Group_1543.png",
      title: "Trusted By 100 Cr+ Shoppers",
    },
  ];

  const getStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          className={`w-5 h-5 ${
            i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  function stringToSixDigitNumber(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) % 1000000;
    }
    return hash.toString().padStart(6, "0");
  }

  const code = stringToSixDigitNumber(ProductName);
  return deals.length === 0 ? (
    <div>
      <h1 className="text-1xl font-bold text-center mt-10">
        No category found here..
      </h1>
    </div>
  ) : (
    <div className="bg-gray-50">
      {/* Banner Section */}
      <Suspense fallback={<div className="h-[500px] bg-gray-900 animate-pulse"></div>}>
      {ProductName === "Finance courses" ? (
        <FinanceBanner link="" />
      ) : ProductName == "Country delight" ? (
        <CountryBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName == "E8" ? (
        <E8Banner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName == "Alpha capital" ? (
        <AlphaBanner
          category={{
            name: "Alpha Capital",
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName == "Qx broker" ? (
        <QxBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName == "Funder pro" ? (
        <FounderBanner
          category={{
            name: "FunderPro",
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName == "Weex" ? (
        <WeexBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName == "Hostinger" ? (
        <HostingerBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName.toLowerCase().includes("groww") ? (
        <GrowBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "Bybit" ? (
        <BybitBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "Binance" ? (
        <BinanceBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "Kucoin" ? (
        <KucoinBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "Bingx" ? (
        <BingxBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "Bitvavo" ? (
        <BitvavoBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "Phemex" ? (
        <PhemexBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "Mexc" ? (
        <MexcBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "Wazirx" ? (
        <WazirxBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "Bitget" ? (
        <BitgetBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "Xt main" ? (
        <XtBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "BloFin" ? (
        <BlofinBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : ProductName === "Kvb main" ? (
        <KvbBanner
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      ) : (
        <BannerSection
          category={{
            name: ProductName,
            code: ActualCode ?? code,
            discount: discount,
            link: reDirect ?? "https://google.com",
          }}
        />
      )}
      </Suspense>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Other Useful Coupons  */}
        <section className="mb-16 mt-2.5">
          <h2 className="text-2xl font-bold mb-6">Other Useful Coupons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 mt-10">
            {deals.map((deal, index) => (
              <CouponCard
                key={index}
                link={
                  deal.link === undefined
                    ? reDirect === undefined
                      ? "https://google.com"
                      : reDirect
                    : deal.link
                }
                cost={deal.cost}
                title={deal.title}
                heading={deal.heading}
                description={deal.description}
                image={category.img}
              />
            ))}
          </div>
        </section>

        {/* Today's Best Deals */}
        <section>
          <div className="px-10 mt-5">
            <div className="mx-auto mt-6">
              {/* Middle Column - Product Info */}
              <motion.div
                className="w-full rounded-2xl"
                {...fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 mt-8">
                  {/* Feature 1: Offers */}
                  <div className="group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 border border-pink-200">
                    <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-3">
                      <Tag className="w-8 h-8 text-pink-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Exclusive Offers
                    </h2>
                    <span className="text-4xl font-bold text-blue-600 mt-2">
                      {totalOffers}
                    </span>
                    <p className="text-gray-600 mt-2">
                      Unlock Deals with Our Active Promotional Offers.
                    </p>
                    <div className="w-full h-1 bg-gradient-to-r from-pink-400 to-blue-500 mt-3 rounded-full"></div>
                  </div>

                  {/* Feature 2: Ratings */}
                  <div className="group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 border border-yellow-200">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                      <Star className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Customer Ratings
                    </h2>
                    <p className="text-gray-800 text-lg font-medium mt-2">
                      Average: {rating} / 5
                    </p>
                    <div className="flex items-center space-x-1 mt-2">
                      {getStars()}
                    </div>
                    <p className="text-gray-500 mt-1">
                      Based on {totalVotes.toLocaleString()} reviews
                    </p>
                    <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-blue-500 mt-3 rounded-full"></div>
                  </div>

                  {/* Feature 3: Trusted Sellers */}
                  <div className="group flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 border border-blue-200">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-3 shadow-md">
                      <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Trusted Sellers
                    </h2>
                    <span className="text-3xl font-bold text-blue-600 mt-1">
                      100 Cr+
                    </span>
                    <p className="text-gray-700 mt-2 max-w-sm">
                      Verified and reliable sellers ensuring quality service.
                    </p>
                    <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"></div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-semibold mb-4">
                    About Coupon Yogi
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 grid-template-rows">
                    {data.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 rounded-2xl h-36 flex items-center gap-6 bg-gradient-to-r from-blue-50 to-cyan-100 transition duration-300 shadow-lg hover:shadow-xl border border-blue-200 relative overflow-hidden"
                      >
                        {/* Background Floating Element */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-blue-200 via-transparent to-transparent opacity-30 blur-lg"></div>

                        {/* Animated Image */}
                        <motion.img
                          src={item.img}
                          alt="Icon"
                          className="w-24 h-24 bg-white rounded-xl shadow-md p-2"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Title Text */}
                        <p className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {ProductName !== "Finance courses" && (
                  <InfoSection Product={ProductName} />
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategoryDetail;
