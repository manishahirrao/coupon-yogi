
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Marketing Director",
    comment: "This is the best service I've ever used! Highly recommended.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Designer",
    comment: "Amazing experience! The team is very professional and helpful.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Tech Lead",
    comment: "Great value for money. I will definitely use this service again.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Startup Founder",
    comment: "Exceptional service that exceeded all my expectations!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Sarah Chen",
    role: "UX Designer",
    comment: "The attention to detail and customer service is outstanding.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Michael Brown",
    role: "Software Engineer",
    comment: "Innovative solutions that helped transform our business.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  },
];

const TestimonialSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 0 25px rgba(34, 197, 94, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-15 bg-green-500 overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            TESTIMONIALS
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            clients!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* First Row - Left to Right */}
          <div className="flex gap-6 mb-6 animate-marquee-left">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                variants={cardVariants}
              />
            ))}
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.id}-duplicate`}
                testimonial={testimonial}
                variants={cardVariants}
              />
            ))}
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex gap-6 animate-marquee-right">
            {testimonials.slice(3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                variants={cardVariants}
              />
            ))}
            {testimonials.slice(3).map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.id}-duplicate`}
                testimonial={testimonial}
                variants={cardVariants}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, variants }) => (
  <motion.div
    variants={variants}
    whileHover="hover"
    className="flex-shrink-0 w-[200px] sm:w-[300px] md:w-[400px] bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-green-500/30
               relative group transition-all duration-300"
  >
    <Quote className="absolute top-4 right-4 text-green-500/20 w-8 h-8" />
    <div className="flex items-center gap-4 mb-4">
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-green-400"
      />
      <div>
        <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">
          {testimonial.name}
        </h3>
        <p className="text-sm text-gray-400">{testimonial.role}</p>
      </div>
    </div>
    <div className="flex gap-1 mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
      ))}
    </div>
    <p className="text-gray-300 text-sm leading-relaxed">
      "{testimonial.comment}"
    </p>
  </motion.div>
);

export default TestimonialSection;
