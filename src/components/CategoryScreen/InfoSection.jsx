import { ChevronDown, ChevronUp, Gift } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

function InfoSection({ Product }) {
  const [isOpen, setIsOpen] = useState(false);
  const data = {
    bybit: {
      title: "Buy Bybit Gift Coupons & Save Big with Bybit Promo Codes",
      description:
        "Looking for the best deals on Bybit gift coupons? Whether you're a trader or looking for the perfect gift, Bybit offers budget-friendly and modern solutions for every need. Enjoy exciting discounts and offers with the latest Bybit Promo Code, Bybit Discount Code, and Bybit Referral Code to maximize your savings.",
      purchase_steps: [
        "Visit CouponYogi and sign in to your account.",
        "Go to the Categories section to explore available coupons.",
        "Select your desired coupon.",
        "View the coupon code directly or click the button to be redirected where the code is applied automatically.",
      ],
      redeem_steps: [
        "Locate a participating Bybit store or website.",
        "Pick your preferred products and add them to your cart.",
        "Enter your Bybit USDT Code at checkout.",
        "Pay any remaining balance via cash, card, or digital wallets.",
      ],
      benefits: [
        "Bybit Latest Discount Code: Get the most up-to-date discounts and enjoy exclusive deals.",
        "Welcome Benefit: New users can claim a welcome Benefit when signing up with a Bybit Referral Code.",
        "Giveaway Code Telegram: Join Bybit’s Telegram channel to receive free giveaway codes and updates.",
        "Referral Benefit: Invite friends to trade on Bybit and earn exciting referral Benefites.",
        "Giveaway Code Today Free: Stay tuned for daily free giveaway codes to grab exciting rewards.",
        "Savings Code: Enjoy additional discounts when purchasing Bybit products or services.",
      ],
      referral_code:
        "Finding a Bybit Referral Code is easy! Check out the official Bybit website, social media platforms, or community forums like Reddit to discover exclusive codes. Many existing users share referral codes to help you get started with extra Benefites.",
      gift_cards:
        "Bybit Gift Cards are an excellent gifting solution for traders, investors, and cryptocurrency enthusiasts. Whether it’s a birthday, anniversary, or festive occasion, a Bybit Gift Coupon makes for a thoughtful and practical present.",
      gift_coupons: [
        "You can avail a Bybit Gift Coupon for free through various reward programs."
      ],
      faqs: [
        {
          question: "Where can I purchase a Bybit Gift Coupon?",
          answer:
            "You can browse and select your preferred brand or service on CouponYogi and receive a digital coupon code instantly without any payment transactions.",
        },
        {
          question: "Can I transfer my Bybit Gift Card to someone else?",
          answer:
            "Yes, you can share your Bybit Gift Card with anyone. Simply provide them with the coupon code for redemption.",
        },
        {
          question: "What if I lose my Bybit Gift Card Code?",
          answer:
            "You can retrieve your lost coupon code by visiting the Contact section on CouponYogi.",
        },
        {
          question:
            "Can I use multiple Bybit Gift Coupons on a single transaction?",
          answer:
            "Coupon usage varies by brand. Please check the terms of your specific coupon before applying multiple codes.",
        },
      ],
      cta: "Get the Best Bybit Deals Today! Don’t miss out on the best Bybit offers. Use Bybit Promo Codes, Bybit Discount Codes, and Bybit Referral Codes to enjoy incredible savings. Visit CouponYogi now to grab your favorite deals!",
      popular_searches: [
        "Bybit Promo Code",
        "Bybit Latest Discount Code",
        "Bybit Discount Code",
        "Bybit Referral Code",
        "Bybit USDT Code",
        "Bybit Savings Code",
        "Bybit Coupon Code",
        "Bybit Welcome Benefit",
        "Bybit Giveaway Code Telegram",
        "Bybit Referral Benefit",
      ],
    },
    bitget: {
      title: "Buy Bitget Gift Coupons & Save Big with Bitget Promo Codes",
      description:
        "Looking for the best deals on Bitget gift coupons? Whether you're a trader or looking for the perfect gift, Bitget offers budget-friendly and modern solutions for every need. Enjoy exciting discounts and offers with the latest Bitget Promo Code, Bitget Discount Code, and Bitget Referral Code to maximize your savings.",
      purchase_steps: [
        "Visit CouponYogi and sign in to your account.",
        "Go to the Categories section to explore available coupons.",
        "Select your desired coupon.",
        "View the coupon code directly or click the button to be redirected where the code is applied automatically.",
      ],
      redeem_steps: [
        "Locate a participating Bitget store or website.",
        "Pick your preferred products and add them to your cart.",
        "Enter your Bitget USDT Code at checkout.",
        "Pay any remaining balance via cash, card, or digital wallets.",
      ],
      benefits: [
        "Bitget Latest Discount Code: Get the most up-to-date discounts and enjoy exclusive deals.",
        "Bitget Welcome Benefit: New users can claim a welcome Benefit when signing up with a Bitget Referral Code.",
        "Bitget Giveaway Code Telegram: Join Bitget’s Telegram channel to receive free giveaway codes and updates.",
        "Bitget Referral Benefit: Invite friends to trade on Bitget and earn exciting referral Benefites.",
        "Bitget Giveaway Code Today Free: Stay tuned for daily free giveaway codes to grab exciting rewards.",
        "Bitget Savings Code: Enjoy additional discounts when purchasing Bitget products or services.",
      ],
      referral_code:
        "Finding a Bitget Referral Code is easy! Check out the official Bitget website, social media platforms, or community forums like Reddit to discover exclusive codes. Many existing users share referral codes to help you get started with extra Benefites.",
      gift_cards:
        "Bitget Gift Cards are an excellent gifting solution for traders, investors, and cryptocurrency enthusiasts. Whether it’s a birthday, anniversary, or festive occasion, a Bitget Gift Coupon makes for a thoughtful and practical present.",

      gift_coupons: [
        "You can avail a Bitget Gift Coupon for free through various reward programs."
      ],
      faqs: [
        {
          question: "Where can I purchase a Bitget Gift Coupon?",
          answer:
            "You can browse and select your preferred brand or service on CouponYogi and receive a digital coupon code instantly without any payment transactions.",
        },
        {
          question: "Can I transfer my Bitget Gift Card to someone else?",
          answer:
            "Yes, you can share your Bitget Gift Card with anyone. Simply provide them with the coupon code for redemption.",
        },
        {
          question: "What if I lose my Bitget Gift Card Code?",
          answer:
            "You can retrieve your lost coupon code by visiting the Contact section on CouponYogi.",
        },
        {
          question:
            "Can I use multiple Bitget Gift Coupons on a single transaction?",
          answer:
            "Coupon usage varies by brand. Please check the terms of your specific coupon before applying multiple codes.",
        },
      ],
      cta: "Get the Best Bitget Deals Today! Don’t miss out on the best Bitget offers. Use Bitget Promo Codes, Bitget Discount Codes, and Bitget Referral Codes to enjoy incredible savings. Visit CouponYogi now to grab your favorite deals!",
      popular_searches: [
        "Bitget Promo Code",
        "Bitget Latest Discount Code",
        "Bitget Discount Code",
        "Bitget Referral Code",
        "Bitget USDT Code",
        "Bitget Savings Code",
        "Bitget Coupon Code",
        "Bitget Welcome Benefit",
        "Bitget Giveaway Code Telegram",
        "Bitget Referral Benefit",
      ],
    },
    bingx: {
      title: "BingX Gift Coupons: The Ultimate Way to Save and Shop",
      description:
        "In 1894, a humble cobbler family in the Czech Coupon Yogi laid the foundation for what would become BingX. Among the pioneers of assembly line shoe production in Europe, BingX has grown into India's largest footwear retailer. Whether it's for work or leisure, dancing or devotion, BingX offers modern, durable, and budget-friendly shoes for every occasion.",
      purchase_steps: [
        "Visit CouponYogi and sign in to your account.",
        "Go to the Categories section to explore available coupons.",
        "Select your desired coupon.",
        "View the coupon code directly or click the button to be redirected where the code is applied automatically.",
      ],
      redeem_steps: [
        "Find the nearest store that accepts this Gift Coupon using the outlet locator.",
        "Pick your desired products.",
        "Present your Gift Coupon at checkout and, if needed, pay any remaining balance using cash or card.",
      ],
      saving_tips:
        "BingX Shoes offer the perfect blend of style, durability, and affordability. Designed to complement any outfit effortlessly, they ensure you always look fashionable. Their long-lasting quality means fewer replacements, helping you save more. Plus, their elegant design keeps your style game strong—without the need for a hefty price tag.",
      gift_cards:
        "BingX shoes are a staple in schools and a preferred choice for casual wear among women across India. This makes BingX Gift Coupons a thoughtful and versatile gifting option for any occasion—whether it’s Diwali, Children’s Day, Father’s Day, Mother’s Day, Valentine’s Day, birthdays, or anniversaries. Celebrate special moments with BingX Gift Cards and bring joy to your loved ones.",
      corporate_gifting:
        "BingX Gift Cards make an excellent corporate gifting solution. They give your employees, clients, and partners the freedom to choose the perfect pair, making them appreciate your thoughtful gesture. A meaningful gift like this often fosters goodwill and strengthens professional relationships.",
      free_coupons: [
        "BingX Gify Coupons are avilable for free through various reward programs.",
      ],
      faqs: [
        {
          question: "Where can I purchase a BingX Gift Coupon?",
          answer:
            "You can browse and select your preferred brand or service on CouponYogi and receive a digital coupon code instantly without any payment transactions.",
        },
        {
          question: "Can I transfer my BingX Gift Card to someone else?",
          answer:
            "Yes, you can share your BingX Gift Card with anyone. The coupon code is all that is needed to redeem it.",
        },
        {
          question: "What if I lose my BingX Gift Card Code?",
          answer:
            "If you misplace your coupon code, you can retrieve it by visiting the contact secton of CouponYogi.",
        },
        {
          question: "Is there a physical coupon available?",
          answer: "Physical coupons are not provided.",
        },
      ],
      popular_searches: [
        "BingX Promo Code",
        "BingX Latest Discount Code",
        "BingX Discount Code",
        "BingX Referral Code",
        "BingX Reddit Code",
        "BingX USDT Code",
        "BingX Savings Code",
        "BingX Coupon Code",
        "BingX Welcome Benefit",
        "BingX Giveaway Code Telegram",
        "Where to find BingX Referral Code",
        "BingX Referral Benefit",
        "BingX Giveaway Code Today Free",
        "BingX Referral Code Reddit",
      ],
    },
    kucoin: {
      title: "KuCoin Gift Coupons: The Best Way to Save on Your Purchases",
      description:
        "Founded in 1894 by a humble cobbler family in the Czech region, KuCoin has grown into a trusted name in India's retail industry. As one of the pioneers of modern shoe production in Europe, KuCoin now offers stylish, durable, and affordable footwear for every occasion—whether it’s work, leisure, dance, or devotion.",
      purchase_steps: [
        "Visit CouponYogi and sign in to your account.",
        "Go to the Categories section to explore available coupons.",
        "Select your desired coupon.",
        "View the coupon code directly or click the button to be redirected where the code is applied automatically.",
      ],
      redeem_steps: [
        "Locate the nearest store that accepts KuCoin Gift Coupons using the outlet locator.",
        "Choose your desired products.",
        "Present your Gift Coupon at checkout and pay any remaining balance via cash or card.",
      ],
      benefits: [
        "KuCoin Shoes provide the perfect combination of fashion, durability, and affordability.",
        "Their long-lasting quality means fewer replacements, saving you money in the long run.",
        "Their elegant design ensures you stay stylish without breaking the bank.",
      ],
      gift_cards:
        "KuCoin Gift Cards are an excellent gifting option for various occasions, including Diwali, Children’s Day, Father’s Day, Mother’s Day, Valentine’s Day, Birthdays, and Anniversaries.",
      corporate_gifting:
        "KuCoin Gift Cards are a great way to appreciate your employees, clients, and business partners. They provide the flexibility to choose the perfect pair of shoes, making them a thoughtful and valuable gift. Corporate gifting with KuCoin Gift Cards fosters goodwill and strengthens professional relationships.",
      gift_coupons: [
        "You can avail a Kucoin Gift Coupon for free through various reward programs.",
      ],
      faqs: [
        {
          question: "Where can I purchase a KuCoin Gift Coupon?",
          answer:
            "You can browse and select your preferred brand or service on CouponYogi and receive a digital coupon code instantly without any payment transactions.",
        },
        {
          question: "Can I transfer my KuCoin Gift Card to someone else?",
          answer:
            "Yes! You can share your KuCoin Gift Card with anyone. The coupon code is all that is needed to redeem it.",
        },
        {
          question: "What if I lose my KuCoin Gift Card Code?",
          answer:
            "You can retrieve your lost coupon code by visiting the Contact section on CouponYogi.",
        },
        {
          question: "Is there a physical coupon available?",
          answer: "Physical coupons are not provided.",
        },
      ],
      popular_searches: [
        "KuCoin Promo Code",
        "KuCoin Latest Discount Code",
        "KuCoin Discount Code",
        "KuCoin Referral Code",
        "KuCoin Redit Code",
        "KuCoin USDT Code",
        "KuCoin Savings Code",
        "KuCoin Coupon Code",
        "KuCoin Welcome Benefit",
        "KuCoin Giveaway Code Telegram",
        "Where to Find KuCoin Referral Code",
        "KuCoin Referral Benefit",
        "KuCoin Giveaway Code Today Free",
        "KuCoin Referral Code Reddit",
      ],
    },
    binance: {
      title: "Binance Gift Coupons: The Ultimate Way to Save and Shop",
      description:
        "Binance isn’t just a global leader in cryptocurrency—it now brings you exclusive gift coupons that provide smart shopping opportunities. Whether you’re a trader, a tech enthusiast, or someone looking for unique gifting options, Binance Gift Coupons offer unbeatable value.",
      purchase_steps: [
        "Visit CouponYogi and sign in to your account.",
        "Go to the Categories section to explore available coupons.",
        "Select your desired coupon.",
        "View the coupon code directly or click the button to be redirected where the code is applied automatically.",
      ],
      redeem_steps: [
        "Log in to your Binance account or create a new one.",
        "Navigate to the 'Gift Card' section.",
        "Enter your unique coupon code and confirm.",
        "Your Binance wallet will be credited with the corresponding amount.",
      ],
      benefits: [
        "Save More, Trade More: These coupons provide instant discounts and perks on transactions, saving you money on  fees and more.",
        "Ideal for Gifting: Whether it’s a birthday, festival, or corporate reward, Binance Gift Coupons make the perfect present for crypto enthusiasts.",
        "Flexible & Secure: Digital delivery ensures that your coupons are safe, easy to store, and transferable to friends or family.",
      ],
      gift_cards:
        "Binance Gift Coupons are an excellent choice for traders and crypto enthusiasts. Whether for personal use or as a gift, they offer convenience and savings.",

      gift_coupons: [
        "Participate in Binance loyalty.",
        "You can avail a Binance Gift Coupon for free through various reward programs."
      ],
      faqs: [
        {
          question: "What is CouponYogi?",
          answer:
            "CouponYogi is an online platform that provides a wide variety of digital coupons and gift cards across categories like food, e-commerce, education, health & beauty, fashion, and resource planning courses.",
        },
        {
          question: "How do I purchase a gift card on CouponYogi?",
          answer:
            "You can browse and select your preferred brand or service and receive a digital coupon code instantly without any payment transactions on CouponYogi",
        },
        {
          question: "What if I lose my Binance Gift Card Code?",
          answer:
            "No worries! Retrieve it by contacting on couponyogi contact section.",
        },
        {
          question: "Are physical Binance Gift Coupons available?",
          answer:
            "No, all Binance coupons are digital, ensuring instant and safe delivery.",
        },
      ],
      cta: "Stay ahead in the crypto game with Binance Gift Coupons—shop, save, and trade smarter today!",
      popular_searches: [
        "Binance Promo Code",
        "Binance Latest Discount Code",
        "Binance Discount Code",
        "Binance Referral Code",
        "Binance Credit Code",
        "Binance USDT Code",
        "Binance Savings Code",
        "Binance Coupon Code",
        "Binance Welcome Benefit",
        "Binance Giveaway Code Telegram",
        "Where to find Binance referral code",
        "Binance Referral Benefit",
        "Binance Giveaway Code Today Free",
        "Binance Referral Code Reddit",
      ],
    },
  };
  const lowerProduct = Product.toLowerCase().replace(/\s+/g, "-");
  const currData = data[lowerProduct];
  return currData !== undefined ? (
    <div className="bg-gray-50">
      <div className="mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden bg-gradient-to-r from-blue-150 to-cyan-50 border border-blue-200">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-4 flex items-center justify-between text-left  transition-colors duration-150"
          >
            <div className="flex items-center space-x-3">
              <Gift className="w-6 h-6 text-blue-600" />
              <h2 className="md:text-xl font-semibold text-gray-900">
                {currData.title}
              </h2>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>

          {isOpen && (
            <div className="px-6 py-4 border-t border-gray-100 space-y-6">
              <div>
                <p className="text-gray-700">{currData.description}</p>
              </div>

              {currData.purchase_steps != undefined &&
                currData.purchase_steps.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How can you purchase a {Product} Gift Coupon?
                    </h3>
                    <p className="text-gray-700 mt-2">
                      Buying a {Product} Gift Coupon is simple and hassle-free.
                      Follow these steps
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                      {currData.purchase_steps.map((step, index) => (
                        <li key={index} className="text-gray-700">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {currData.redeem_steps != undefined &&
                currData.redeem_steps.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How to Redeem a {Product} Gift Card?
                    </h3>
                    <p className="text-gray-700">
                      Redeeming a {Product} Gift Card is quick and easy:
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                      {currData.redeem_steps.map((step, index) => (
                        <li key={index} className="text-gray-700">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {currData.benefits != undefined &&
                currData.benefits.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Maximize Your Savings with {Product} Coupons & Codes
                    </h3>
                    <p className="text-gray-700">
                      Bybit offers fantastic opportunities to save on purchases
                      with a variety of discount codes and promotions. Here’s
                      how you can benefit:
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                      {currData.benefits.map((step, index) => (
                        <li key={index} className="text-gray-700">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {currData.referral_code != undefined && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Where to Find a {Product} Referral Code?
                  </h3>
                  <p className="text-gray-700">{currData.referral_code}</p>
                </div>
              )}

              {currData.gift_cards != undefined && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {Product} Gift Cards: The Perfect Corporate & Personal Gift
                  </h3>
                  <p className="text-gray-700">{currData.gift_cards}</p>
                </div>
              )}

              {currData.gift_coupons != undefined &&
                currData.gift_coupons.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How to Get {Product} Gift Coupons for Free?
                    </h3>
                    <p className="text-gray-700">
                      Want a {Product} Gift Coupon for free? Here’s how:
                    </p>
                    <ul className="list-disc pl-5 mb-4">
                      {currData.gift_coupons.map((step, index) => (
                        <li key={index} className="text-gray-700">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {currData.faqs != undefined && currData.faqs.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    FAQs: Everything You Need to Know About {Product} Coupons
                  </h3>
                  <div className="space-y-4">
                    {currData.faqs.map((faq, index) => (
                      <div key={index} className="border p-3 rounded-lg">
                        <p className="font-semibold">{faq.question}</p>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {currData.corporate_gifting != undefined && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Corporate Gifting with {Product} Gift Cards
                  </h3>
                  <p className="text-gray-700">{currData.corporate_gifting}</p>
                </div>
              )}

              {currData.cta != undefined && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Get the Best {Product} Deals Today!
                  </h3>
                  <p className="text-gray-700">{currData.cta}</p>
                </div>
              )}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">
                    Shop Gift Cards from 250+ Brands
                  </span>{" "}
                  for every occasion at{" "}
                  <a
                    href="https://www.couponyogi.com"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    www.couponyogi.com
                  </a>
                </p>
                {currData.popular_searches != undefined &&
                  currData.popular_searches.length > 0 && (
                    <>
                      <p className="text-gray-600 mt-4 font-semibold">
                        Popular Searches
                      </p>
                      <p className="text-gray-700">
                        {currData.popular_searches
                          .map((search, index) => (
                            <span
                              key={index}
                              className="bg-yellow-100 px-1 rounded"
                            >
                              {search} Coupon
                            </span>
                          ))
                          .reduce((prev, curr) => [prev, " | ", curr])}
                      </p>
                    </>
                  )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-gray-50">
      <div className="mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden bg-gradient-to-r from-blue-150 to-cyan-50 border border-blue-200">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-4 flex items-center justify-between text-left  transition-colors duration-150"
          >
            <div className="flex items-center space-x-3">
              <Gift className="w-6 h-6 text-blue-600" />
              <h2 className="md:text-xl font-semibold text-gray-900">
                More About {Product} Gift Coupons
              </h2>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>

          {isOpen && (
            <div className="px-6 py-4 border-t border-gray-100 space-y-6">
              <div>
                <p className="text-gray-700">
                  In 1894, a humble cobbler family in the Czech Coupon Yogi laid
                  the foundation for what would become {Product}. Among the
                  pioneers of assembly line shoe production in Europe, {Product}{" "}
                  has grown into India's largest footwear retailer. Whether it's
                  for work or leisure, dancing or devotion, {Product} offers
                  modern, durable, and budget-friendly shoes for every occasion.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How can you purchase a {Product} Gift Coupons?
                </h3>
                <p className="text-gray-700">
                  Buying a {Product} gift coupon is simple and quick:
                </p>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  <li>
                    Go to couponyogi.com/category/{Product.toLowerCase()} and
                    sign in to your account.
                  </li>
                  <li>Select the coupons amount of your choice.</li>
                  <li>Add it to your cart and proceed to checkout.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How to Redeem a {Product} Gift Card?
                </h3>
                <p className="text-gray-700">
                  You can use your {Product} Gift Coupons/Gift Card to shop for
                  a variety of products by following these steps:
                </p>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  <li>
                    Find the nearest store that accepts this Gift Coupons using
                    the outlet locator.
                  </li>
                  <li>Pick your desired products.</li>
                  <li>
                    Present your Gift Coupons at checkout and, if needed, pay
                    any remaining balance using cash or card.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How to Save Money with {Product} Gift Cards?
                </h3>
                <p className="text-gray-700">
                  {Product} Shoes offer the perfect blend of style, durability,
                  and affordability. Designed to complement any outfit
                  effortlessly, they ensure you always look fashionable. Their
                  long-lasting quality means fewer replacements, helping you
                  save more. Plus, their elegant design keeps your style game
                  strong—without the need for a hefty price tag.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Perfect for Every Occasion: {Product} Gift Cards
                </h3>
                <p className="text-gray-700">
                  {Product} shoes are a staple in schools and a preferred choice
                  for casual wear among women across India. This makes {Product}{" "}
                  Gift Coupons a thoughtful and versatile gifting option for any
                  occasion—whether it’s Diwali, Children’s Day, Father’s Day,
                  Mother’s Day, Valentine’s Day, birthdays, or anniversaries.
                  Celebrate special moments with {Product} Gift Cards and bring
                  joy to your loved ones.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {Product} Gift Cards: A Smart Choice for Corporate Gifting
                </h3>
                <p className="text-gray-700">
                  {Product} Gift Cards make an excellent corporate gifting
                  solution. They give your employees, clients, and partners the
                  freedom to choose the perfect pair, making them appreciate
                  your thoughtful gesture. A meaningful gift like this often
                  fosters goodwill and strengthens professional relationships.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How to Get {Product} Gift Coupons for Free?
                </h3>
                <p className="text-gray-700">
                  You can avail a {Product} Gift Coupon for free through various
                  reward programs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  FAQs
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Where can I purchase a {Product} Gift Coupon?
                    </h4>
                    <p className="text-gray-700">
                      You can buy {Product} Gift Coupons from the
                      couponyogi.com website.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mt-2">
                      <li>
                        Visit{" "}
                        <a
                          href={`https://couponyogi.com/category/${
                            Product[0].toLowerCase() + Product.slice(1)
                          }`}
                          target="_blank"
                        >
                          https://couponyogi.com/category/
                          {Product[0].toLowerCase() + Product.slice(1)}
                        </a>{" "}
                        to explore available {Product} coupons.
                      </li>
                      <li>
                        Go to the category section and select your desired
                        coupon.
                      </li>
                      <li>
                        View the coupon code or use the provided button to be
                        redirected where the code is applied automatically.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900">
                      Can I transfer my {Product} Gift Card to someone else?
                    </h4>
                    <p className="text-gray-700">
                      Yes, you can share your {Product} Gift Card with anyone.
                      The coupon code is all that is needed to redeem it.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900">
                      What if I lose my {Product} Gift Card Code?
                    </h4>
                    <p className="text-gray-700">
                      If you misplace your coupon code, you can retrieve by visiting{" "}
                      <a
                        href="https://couponyogi.com/contact"
                        target="_blank"
                      >
                        https://couponyogi.com/contact
                      </a>
                      . Your code will be resent within 30 minutes.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900">
                      Is there a physical coupon available?
                    </h4>
                    <p className="text-gray-700">
                      Physical Coupons are not provided.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">
                    Shop Gift Cards from 250+ Brands
                  </span>{" "}
                  for every occasion at{" "}
                  <a
                    href="https://www.couponyogi.com"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    www.couponyogi.com
                  </a>
                </p>
                <p className="text-gray-600 mt-4 font-semibold">
                  Popular Searches
                </p>
                <p className="text-gray-700">
                  <span className="bg-yellow-100 px-1 rounded">
                    {Product} Coupon
                  </span>{" "}
                  |{" "}
                  <span className="bg-yellow-100 px-1 rounded">
                    {Product} Gift Card
                  </span>{" "}
                  |{" "}
                  <span className="bg-yellow-100 px-1 rounded">
                    {Product} E-Coupon
                  </span>{" "}
                  |{" "}
                  <span className="bg-yellow-100 px-1 rounded">
                    {Product} E-Coupon Redemption
                  </span>{" "}
                  |{" "}
                  <span className="bg-yellow-100 px-1 rounded">
                    {Product} Coupon Code
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

InfoSection.propTypes = {
  Product: PropTypes.string.isRequired,
};

export default InfoSection;
