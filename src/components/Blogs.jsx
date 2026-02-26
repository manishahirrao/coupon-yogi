
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, Bookmark, Share2 } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "10 Tips for Better Productivity",
    description: "Learn how to boost your productivity with these simple tips that can transform your daily workflow and help you achieve more in less time.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop&q=80",
    author: "Sarah Parker",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "Productivity",
    link: "#",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    description: "Explore the latest trends in web development for 2025, including AI integration, WebAssembly, and the rise of edge computing.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80",
    author: "Alex Thompson",
    date: "Mar 14, 2024",
    readTime: "7 min read",
    category: "Technology",
    link: "#",
  },
  {
    id: 3,
    title: "How to Stay Motivated",
    description: "Discover proven strategies to maintain motivation and achieve your goals, backed by psychological research and real-world success stories.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",
    author: "Michael Chen",
    date: "Mar 13, 2024",
    readTime: "6 min read",
    category: "Personal Growth",
    link: "#",
  },
];

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
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const BlogSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Blogs
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Explore our collection of expert articles and stay ahead of the curve
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-gray-800 backdrop-blur-lg rounded-2xl overflow-hidden border border-green-500/20
                       transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-green-500/80 transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-green-500/80 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="inline-block px-3 py-1 bg-green-500/90 backdrop-blur-md text-white text-xs rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-400">{blog.author}</span>
                  </div>
                  <motion.a
                    href={blog.link}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-1 text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;