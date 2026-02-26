import React, { useState } from "react";
import { motion } from "framer-motion";
import { ScrollText, Shield, Lock, Scale, ChevronDown } from "lucide-react";

function TermsAndConditions() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      question: "How do I use the coupons on your platform?",
      answer:
        "Simply browse through our available coupons, click on the one you want to use, and copy the coupon code. Then, visit the merchant's website and paste the code during checkout to receive your discount.",
    },
    {
      question: "Are all the coupons verified?",
      answer:
        "We strive to verify all coupons on our platform. However, as merchants can change or expire offers without notice, we recommend checking the terms and expiration dates before use.",
    },
    {
      question: "Can I share coupons with others?",
      answer:
        "While you can share our website with others, the commercial redistribution or sale of our coupons is strictly prohibited as per our terms of service.",
    },
    {
      question: "What should I do if a coupon doesn't work?",
      answer:
        "If you encounter an issue with a coupon, please contact our support team at support@couponyogi.com. We'll investigate and help resolve the problem as quickly as possible.",
    },
    {
      question: "How often are new coupons added?",
      answer:
        "We update our coupon database daily to ensure you have access to the latest deals and offers. Check back regularly for new savings opportunities.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ScrollText className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Please read these terms and conditions carefully before using our
            service.
          </p>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: <Shield className="w-8 h-8 text-green-600" />,
              title: "Protection",
              description:
                "Your data is protected by industry-standard security measures",
            },
            {
              icon: <Lock className="w-8 h-8 text-green-600" />,
              title: "Privacy",
              description:
                "We respect your privacy and handle data with utmost care",
            },
            {
              icon: <Scale className="w-8 h-8 text-green-600" />,
              title: "Fair Use",
              description: "Terms ensure fair and transparent service usage",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Terms Content */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using Coupon Yogi's website and services, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms and Conditions. If you do not agree with any part
              of these terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use of Service</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                2.1. You must be at least 18 years old to use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                2.2. You agree to provide accurate and complete information when
                using our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                2.3. You are responsible for maintaining the confidentiality of
                your account information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Coupon Usage</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                3.1. Coupons are subject to terms and conditions set by the
                respective merchants.
              </p>
              <p className="text-gray-700 leading-relaxed">
                3.2. We do not guarantee the availability or validity of any
                coupon.
              </p>
              <p className="text-gray-700 leading-relaxed">
                3.3. Coupons may not be reproduced, sold, or transferred.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of our service is also governed by our Privacy Policy.
              Please review our Privacy Policy to understand our practices
              regarding the collection and use of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to the website. Your
              continued use of the service constitutes acceptance of the
              modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Coupon Yogi shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms & Conditions, please
              contact us at support@couponyogi.com
            </p>
          </section>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-4 cursor-pointer"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${
                      openFAQ === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {openFAQ === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-gray-700 mt-2"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-8 text-center text-gray-500">
          Last updated: March 2025
        </div>
      </div>
    </motion.div>
  );
}

export default TermsAndConditions;
