import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  AlertCircle,
  MessageSquare,
  User,
  AtSign,
  FileText,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const sendMail = (Data) => {
    emailjs.send("service_aybysjk", "template_qnfdded", Data);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendMail(formData);
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header with slide-down animation */}
        <div className="max-w-5xl mx-auto text-center mb-16 opacity-0 animate-[slideDown_0.5s_ease-out_forwards]">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-green-200 rounded-full animate-pulse"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <Mail className="w-12 h-12 text-white animate-[bounce_2s_ease-in-out_infinite]" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? We are here to help and would
            love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Contact Information with staggered fade-in */}
          <div className="lg:w-1/3 space-y-8">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                description: "thecouponyogi@gmail.com",
                link: "mailto:thecouponyogi@gmail.com",
                delay: "100",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Visit Us",
                description: "Suite 5, 201, Capital Golden Tower, Business Bay, Dubai, UAE",
                link: "https://www.google.com/maps/place/57HF%2B5JX+Capital+Golden+Tower+-+Business+Bay+-+Dubai+-+United+Arab+Emirates/@25.1780082,55.2692235,17z/data=!3m1!4b1!4m10!1m2!2m1!1sSuite+5,+201,+Capital+Golden+Tower,+Business+Bay,+Dubai,+UAE!3m6!1s0x3e5f6835b37479db:0x397214026707f37b!8m2!3d25.1780034!4d55.2738369!15sCjxTdWl0ZSA1LCAyMDEsIENhcGl0YWwgR29sZGVuIFRvd2VyLCBCdXNpbmVzcyBCYXksIER1YmFpLCBVQUWSARFjb21wb3VuZF9idWlsZGluZ-ABAA!16s%2Fg%2F1ptzvg_xh?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
                delay: "200",
              },
            ].map((item, index) => (
              <a
                key={index}
                target="_blank"
                href={item.link}
                className="block p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 transition-transform duration-300 hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </a>
            ))}

            {/* Business Hours Card with slide-in animation */}
            <div className="p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white opacity-0 animate-[slideIn_0.5s_ease-out_0.3s_forwards] transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with slide-up animation */}
          <div className="lg:w-2/3 opacity-0 animate-[slideUp_0.5s_ease-out_0.2s_forwards]">
            <div className="bg-white rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:scale-[1.02]">
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-center animate-[fadeIn_0.3s_ease-out] ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <p>{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform duration-300 group-hover:scale-110">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-0 transition-all duration-300 ${
                        errors.name
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 focus:border-green-500 hover:border-green-300"
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 animate-[fadeIn_0.3s_ease-out]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform duration-300 group-hover:scale-110">
                      <AtSign className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-0 transition-all duration-300 ${
                        errors.email
                          ? "border-red-300 bg-red-50"
                          : "border-gray-200 focus:border-green-500 hover:border-green-300"
                      }`}
                      placeholder="Email Address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 animate-[fadeIn_0.3s_ease-out]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform duration-300 group-hover:scale-110">
                    <FileText className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-0 transition-all duration-300 ${
                      errors.subject
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200 focus:border-green-500 hover:border-green-300"
                    }`}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 animate-[fadeIn_0.3s_ease-out]">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none transition-transform duration-300 group-hover:scale-110">
                    <MessageSquare className="w-5 h-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl focus:ring-0 transition-all duration-300 ${
                      errors.message
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200 focus:border-green-500 hover:border-green-300"
                    }`}
                    placeholder="Your Message"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 animate-[fadeIn_0.3s_ease-out]">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105"
                >
                  <Send className="w-5 h-5 animate-[slideRight_1s_ease-in-out_infinite]" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
