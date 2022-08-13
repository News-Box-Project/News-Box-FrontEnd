import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./componants/About";
import Admin from "./componants/Admin";
import Contact from "./componants/Contact/Contact";
import Footer from "./componants/Footer/Foote";
import Header from "./componants/header/header";
import Home from "./componants/home/home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact-us" element={<Contact />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
