
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Navbar/Header";

import Home from "./components/HomeF/Home";
import About from "./components/About/About";

import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import Services from "./components/Services/Services";







function App() {
  
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
   </Router>
  );
}

export default App;
