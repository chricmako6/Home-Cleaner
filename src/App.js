import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProfileCreation from "./pages/ProfileCreation"
import SearchProfile from "./pages/SearchProfile"

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<ProfileCreation />} />
        <Route path="/search" element={<SearchProfile />} />
      </Routes>
    </Router>
  );
}
