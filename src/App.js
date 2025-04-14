import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProfileCreation from "./pages/ProfileCreation"

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<ProfileCreation />} />
      </Routes>
    </Router>
  );
}
