import CountUp from "react-countup";

import {
  GiftIcon,
  CheckCircle2,
  ShoppingBag,
  Award,
  RefreshCw,
  CreditCard,
  Zap,
  ShieldCheck,
} from "lucide-react";

const About = () => {
  const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/2/27/Swiggy_logo_%28old%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/00/Nykaa_New_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg",
  ];
  const formatNumber = (num) => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B"; // Billion
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M"; // Million
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K"; // Thousand
    return num; // No formatting needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* Decorative Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.1),transparent)] pointer-events-none"></div>
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 mt-8 animate-float shadow-lg">
              <GiftIcon className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in">
              About Coupon <span className="text-green-600">Yogi</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl animate-slide-up leading-relaxed">
              We believe in the power of gifts. It looks like a smile, feels
              like a hug, and sounds like an ecstatic "Thank you!"
            </p>
            <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-in">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">
                  <CountUp
                    start={0}
                    end={1000000}
                    duration={2}
                    formattingFn={formatNumber} // Apply formatting
                  />
                  +
                </h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">
                  <CountUp
                    start={0}
                    end={50000}
                    duration={2}
                    formattingFn={formatNumber} // Apply formatting
                  />
                  +
                </h3>
                <p className="text-gray-600">Active Coupons</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">
                  <CountUp
                    start={0}
                    end={100}
                    duration={2}
                    formattingFn={formatNumber} // Apply formatting
                  />
                  +
                </h3>
                <p className="text-gray-600">Partner Brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-gray-600 mb-12">
            Trusted by Leading Brands
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="w-40 h-20 bg-white rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section with Image */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-100 transform rotate-3 rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&q=80"
                alt="Shopping Experience"
                className="relative rounded-3xl shadow-2xl transform hover:-rotate-2 transition-transform duration-300"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Welcome to Coupon Yogi
              </h2>
              <p className="text-lg text-gray-700 mb-6 animate-fade-in leading-relaxed">
                Your ultimate destination for exclusive deals, discounts, and
                savings. We believe that shopping should be rewarding, and
                that's why we provide our customers with the best coupon codes
                to help them save big on their favorite brands and services.
              </p>
              <p className="text-lg text-gray-700 animate-fade-in leading-relaxed">
                At Coupon Yogi, we are dedicated to making online shopping more
                affordable and enjoyable. Whether you're looking for discounts
                on fashion, electronics, travel, or daily essentials, our
                platform ensures that you get the best deals every time you
                shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-12 rounded-3xl shadow-xl animate-slide-up relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full transform translate-x-20 -translate-y-20 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-200 rounded-full transform -translate-x-20 translate-y-20 opacity-50"></div>
              <p className="text-xl text-gray-700 mb-8 relative z-10 leading-relaxed">
                Our mission is to help customers save money effortlessly by
                providing the latest and most valuable coupon codes. We aim to
                bridge the gap between brands and shoppers by offering verified
                and exclusive discounts that enhance the shopping experience.
              </p>
              <p className="text-xl text-gray-700 relative z-10 leading-relaxed">
                We believe in making savings accessible to everyone by
                continuously updating our platform with fresh offers, special
                promotions, and limited-time deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle2 className="w-12 h-12 text-green-600" />,
                title: "Verified Coupon Codes",
                description:
                  "Authentic and regularly updated discount codes from top brands",
              },
              {
                icon: <Award className="w-12 h-12 text-green-600" />,
                title: "Exclusive Deals",
                description:
                  "Special promotions and limited-time offers you won't find elsewhere",
              },
              {
                icon: <ShoppingBag className="w-12 h-12 text-green-600" />,
                title: "Wide Range of Categories",
                description: "Discounts for every need, from fashion to food",
              },
              {
                icon: <RefreshCw className="w-12 h-12 text-green-600" />,
                title: "Daily Updates",
                description:
                  "Fresh deals ensuring you never miss out on great offers",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Why Choose Coupon Yogi
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <CreditCard className="w-10 h-10 text-green-600" />,
                title: "Save More, Shop Smart",
                description:
                  "Get the latest discounts without compromising on quality",
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
                title: "Trust & Reliability",
                description: "All coupons are carefully curated and tested",
              },
              {
                icon: <Zap className="w-10 h-10 text-green-600" />,
                title: "Instant Savings",
                description: "Quick and easy access to the best deals",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-[50px] py-20 bg-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 animate-fade-in">
              Start Saving Today!
            </h2>
            <p className="text-xl mb-12 animate-slide-up leading-relaxed">
              Unlock amazing discounts with Coupon Yogi and make every purchase
              more rewarding. Browse our latest deals, grab the best coupon
              codes, and enjoy unbeatable savings.
            </p>
            <button className="bg-white text-green-600 px-12 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors duration-300 transform hover:scale-105 shadow-xl">
              Start Saving Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
