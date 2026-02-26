import { motion } from "framer-motion";
const seniorExpert = {
  name: "Nitin Rajvansh",
  role: "Founder and CEO of Coupon Yogi",
  bio: `Nitin Rajvansh is a visionary entrepreneur and financial strategist with extensive experience in the e-commerce and digital savings space. As the Founder and CEO of Coupon Yogi, he has revolutionized how consumers save money through innovative solutions. His leadership has positioned Coupon Yogi as a leading platform for discovering verified discounts and maximizing savings.`,
  image:
    "https://t3.ftcdn.net/jpg/02/18/08/74/360_F_218087403_fSOfyVN3azDznIeQ1rFCmd6bXAz9CbXi.jpg",
  achievements: [
    "Founder and CEO of Coupon Yogi",
    "Pioneer in Digital Coupon Management",
    "Keynote Speaker at Global Fintech Summits",
    "Former Advisor to Multiple E-Commerce Platforms",
    "Recognized for Innovation in Consumer Savings Solutions",
    "Financial Growth Strategist with 15+ Years of Experience",
  ],
};

const teamMembers = [
  {
    name: "Abhishek Bhattacharya",
    role: "Entrepreneur, Author, Forbes 30 Under 30",
    expertise: "Financial Inclusion, FinTech",
    bio: "Abhishek has been a 3x entrepreneur focused on FinTech and Core Tech Member. He is a Forbes 30 Under 30 Asia honoree, a 3-times Author, an Ethereum Foundation Fellow and a UNDP INSPIRO Fellow. With extensive experience in Researcher technology and financial inclusion, he has led numerous successful projects and initiatives in the web3 space.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Stephen Sargeant",
    role: "Founder of Airdropd",
    expertise:
      "Media and Content Marketing, Web3 and Web2 Training, analysis Compliance",
    bio: "Stephen is a researcher investigator and content producer with over 5 years of experience providing consultancy services to the top analysis for exchanges. Stephen is a facilitator at various colleges and educational institutions on analysis compliance and research new investigations.",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQHBomYq_tNquw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1591193624623?e=2147483647&v=beta&t=VwE13IgUoNxkUOGx3kHUC58Uc5DxCCNlgkGf66H0T4g",
  },
  {
    name: "William Laurent",
    role: "Independent Creator and CMO/Chief Creative Officer",
    expertise: "Analytics, AI, Web3 Community Management, Marketing",
    bio: "William Laurent founded National Information Management, a boutique IT consultancy, in New York City in 1996. Widely published in the areas of AI, Web3, William has advised over 30 Fortune 500 companies across North America and Asia.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
  },
  // Dubai-based Professionals
  {
    name: "Omar Al-Farsi",
    role: "Founder of Dubai Analysis Hub",
    expertise: "Smart Contracts, Middle East FinTech",
    bio: "Omar is a serial entrepreneur and the founder of Dubai Analysis Hub, an initiative that connects with investors. With over a decade of experience in smart contract auditing, he has been instrumental in shaping Dubai’s Web3 ecosystem.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Aisha Khan",
    role: "Head of Innovation, UAE FinTech Council",
    expertise: "RegTech Financial Policies",
    bio: "Aisha is a leading voice in financial regulatory technologies (RegTech) in Dubai. She works closely with UAE authorities to establish frameworks for businesses, ensuring transparency and security in the evolving Web3 landscape.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgNDZxKgHxajQGNvbJ3DzRyL6cxZ08iCIaw&s",
  },
  {
    name: "Rashid Al-Maktoum",
    role: "CEO, Middle East Web3 Consortium",
    expertise: "Tokenomics, Research Strategy, Enterprise Solutions",
    bio: "Rashid has played a key role in integrating analysis solutions for large enterprises in the Middle East. As the CEO of the Middle East Web3 Consortium, he leads initiatives that foster collaboration between startups and corporate giants.",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Fatima Al-Zaabi",
    role: "AI & Web3 Researcher, Dubai Future Foundation",
    expertise: "Artificial Intelligence, Web3, Digital Economy",
    bio: "Fatima is a renowned AI and Web3 researcher at the Dubai Future Foundation. She focuses on the intersection of langchain and AI, working on projects that integrate decentralized networks with machine learning algorithms for financial and social good.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Hassan Al-Mansoori",
    role: "CTO, Valley Dubai",
    expertise: "Cybersecurity, Ethical Hacking",
    bio: "Hassan is a cybersecurity expert and CTO at Valley Dubai, an incubator for analysis hub startups. With extensive experience in ethical hacking and smart contract security audits, he helps companies build robust and secure solutions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziZmaZvLif90DnCuTsntSmKrL4NfztJ0dqw&s",
  },
  {
    name: "Layla Ibrahim",
    role: "VP of Strategy, UAE Digital Assets Authority",
    expertise: "CBDCs, Tokenized Assets, Digital Regulations",
    bio: "Layla leads strategic initiatives at the UAE Digital Assets Authority, focusing on Central Bank Digital Currencies (CBDCs) and tokenized asset frameworks. She plays a key role in setting Dubai’s regulatory roadmap for the future of digital finance.",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQHtXKEN8vKHzQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516541544418?e=2147483647&v=beta&t=0DUzfE6APE8OIs59MItlz91k29F1WmeLGqwiA-mzDXI",
  },
  {
    name: "Mohammed Raza",
    role: "Lead Langchain Developer, Emirates FinTech Solutions",
    expertise: "Layer-2 Scaling, Ethereum Development, DApp Architecture",
    bio: "Mohammed is a senior developer specializing in Layer-2 scaling solutions. He has contributed to several Ethereum-based projects and is a core developer of one of Dubai’s first decentralized finance platforms.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7A3yGmSmtDa1Nr44qQNwSWtAyV3DMk48OQ&s",
  },
  {
    name: "Sarah Al-Rashed",
    role: "Chief Marketing Officer, MetaTech UAE",
    expertise: "NFT Marketing, Metaverse Branding, Web3 Growth Hacking",
    bio: "Sarah is a Web3 growth expert and CMO at MetaTech UAE. She has helped multiple NFT and metaverse projects gain global recognition through innovative marketing strategies and community-building initiatives.",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=400",
  },
];

const analystteamMembers = [
  {
    name: "Elena Ivanov",
    role: "Senior Data Analyst",
    expertise: "Data Science, Machine Learning, Predictive Analytics",
    bio: "Elena is a data expert with over a decade of experience in analyzing large datasets to extract insights and build predictive models. She has worked with Fortune 500 companies to optimize decision-making processes.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "James Bennett",
    role: "Financial Analyst",
    expertise: "Investment Strategies, Risk Assessment, Market Analysis",
    bio: "James is a financial analyst with a keen eye for market trends. His expertise in risk assessment and investment strategies has helped numerous startups secure funding and optimize financial growth.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    social: {
      linkedin: "https://linkedin.com/in/jamesbennett",
      twitter: "https://twitter.com/jamesbennett",
      website: "https://jamesbennettfinance.com",
    },
  },
  {
    name: "Aria Chen",
    role: "Research Analyst",
    expertise: "Smart Contracts, Web3 Security",
    bio: "Aria specializes in Web3 technology, providing deep research on smart contract security, decentralized finance protocols, and web3 innovations.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Daniel Rossi",
    role: "Cybersecurity Analyst",
    expertise: "Threat Detection, Penetration Testing, Compliance",
    bio: "Daniel is a cybersecurity expert who has worked with top organizations to identify vulnerabilities and implement robust security frameworks to prevent cyber threats.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Sophia Moreau",
    role: "Market Research Analyst",
    expertise: "Consumer Behavior, Trend Analysis, Competitive Intelligence",
    bio: "Sophia helps businesses understand market dynamics by conducting thorough research on consumer behavior, competitor strategies, and emerging trends.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    name: "Liam O'Connor",
    role: "AI & Big Data Analyst",
    expertise: "Neural Networks, Data Mining, AI Ethics",
    bio: "Liam is an AI researcher specializing in deep learning models, big data processing, and ethical AI development for enterprise applications.",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    name: "Mia Fernandez",
    role: "Business Intelligence Analyst",
    expertise: "BI Tools, Dashboard Development, Strategic Planning",
    bio: "Mia specializes in business intelligence, helping organizations visualize data through interactive dashboards and data-driven decision-making strategies.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      <div className="container mx-auto px-4 py-14">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Expert Contributors & Analyst Department Team
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet the visionaries and industry leaders shaping the future of
            technology and innovation.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-gray-100 w-full h-auto flex flex-wrap justify-around gap-8 px-4 py-12 shadow-xl border border-gray-100 h-64 mb-16 rounded-lg">
          {[
            "Changing The Future of Work EdTechX",
            "Top 10 European EdTechs Based on Web Traffic Runa Capital Award",
            "Shortlisted for E-Learning Award Wharton-QS Reimagine Education",
            "Web3 for Social Good Finalist EIC Horizon Prize",
            "Education & Learning Global Champion World Summit Awards 2020",
          ].map((str, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Circle Design */}
              <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mb-4 cursor-pointer">
                <motion.div
                  className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-xl font-semibold"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-white">{index + 1}</p>
                </motion.div>
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm font-medium w-40">{str}</p>
            </div>
          ))}
        </div>
        {/* Senior Expert Section */}
        <div className="mb-20 px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Senior Expert Contributor
          </h2>
          <div className="bg-gradient-to-r from-green-100 to-gray-100 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-gray-100">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 items-center">
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={seniorExpert.image}
                  alt={seniorExpert.name}
                  className="w-full max-w-[20rem] md:max-w-[30rem] h-[30rem] rounded-lg shadow-xl"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {seniorExpert.name}
                </h3>
                <p className="text-green-600 text-xl mb-4">
                  {seniorExpert.role}
                </p>
                <p className="text-gray-600 mb-6">{seniorExpert.bio}</p>
                <div className="space-y-2">
                  {seniorExpert.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 justify-center md:justify-start"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Team Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-100 to-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:border-green-200 transition-colors"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-green-500"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-green-600 font-medium mb-2">{member.role}</p>
              <p className="text-green-700 text-sm mb-6">{member.expertise}</p>
              <p className="text-gray-600 text-sm mb-6 line-clamp-4">
                {member.bio}
              </p>
              <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                Read more
              </button>
            </div>
          ))}
        </div>

        {/* Team Members Grid */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center mt-8">
          Analyst Department Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {analystteamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-100 to-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:border-green-200 transition-colors"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-green-500"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-green-600 font-medium mb-2">{member.role}</p>
              <p className="text-green-700 text-sm mb-6">{member.expertise}</p>
              <p className="text-gray-600 text-sm mb-6 line-clamp-4">
                {member.bio}
              </p>
              <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
