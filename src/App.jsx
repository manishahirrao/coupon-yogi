import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import CategoryDetail from "./components/CategoryScreen/CategoryDetail";
import About from "./components/About";
import TermsAndConditions from "./components/TermsAndConditions";
import Contact from "./components/Contact";
import Team from "./components/Team";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <CustomCursor />
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:name" element={<CategoryDetail />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
