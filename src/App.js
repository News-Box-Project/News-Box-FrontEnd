import "./App.css";
import Header from "./componants/header/header";
import CardsComponant from "./componants/home/cards/cards";
import CarouselComponant from "./componants/home/carousel/carousel";
import SecondaryNav from "./componants/home/secondaryNavbar/secondaryNav";
import About from "./componants/About";
import Contact from "./componants/Contact";
import Footer from "./componants/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./componants/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SecondaryNav />
      </div>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <CarouselComponant /> <CardsComponant />
            </>
          }
        ></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact-us" element={<Contact />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
