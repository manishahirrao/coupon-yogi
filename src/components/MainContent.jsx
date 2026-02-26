
import Hero from "./Hero";
import CustomCursor from "./CustomCursor";
// import TrendingCards from "./TrendingCards";
import Clients from "./Clients";
import Category from "./Category";
import Cards from "./Cards";
import CompanyDescription from "./CompanyDescription";
import TestimonialSection from "./Testimonial";
import BlogSection from "./Blogs";

const MainContent = () => (
  <>
    <CustomCursor />
    <Hero />
    <Category />
    <CompanyDescription />
    {/* <TrendingCards /> */}
    <Cards />
    <Clients />
    <TestimonialSection />
    <BlogSection />
  </>
);

export default MainContent;
