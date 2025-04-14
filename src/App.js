import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../src/Container/Hero";
import About from "./Container/About";
import Services from "./Container/Services"; 
import Functionality from "./Container/Functionality";
import Testimonial from "./Container/Testimonial";
import Footer from "./Container/Footer"
import ProfileCreation from "./pages/ProfileCreation"

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Hero />
            <About />
            <Services />
            <Functionality />
            <Testimonial />
            <Footer />
          </div>
        } />
        <Route path="/profile" element={<ProfileCreation />} />
        <Route path="/" element={<ProfileCreation />} />
      </Routes>
    </Router>
  );
}
