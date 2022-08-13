import "./App.css";
import Header from "./componants/header/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./componants/About";
import Contact from "./componants/Contact";
import Home from "./componants/home/home";
import Footer from "./componants/footer/footer";
import Admin from "./componants/Admin";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact-us" element={<Contact />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
