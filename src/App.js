import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./componants/about/about";
import Admin from "./componants/admin/admin";
import Contact from "./componants/contact/contact";
import Footer from "./componants/footer/footer";
import Header from "./componants/header/header";
import Home from "./componants/home/home";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./componants/admin/login";
import LocalNews from "./componants/home/LocalNews";

function App() {
  const { isAuthenticated } = useAuth0();
    return (
   
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact-us" element={<Contact />}></Route>
          <Route exact path="/admin"
            element={isAuthenticated ? <Admin /> : <LoginButton />}></Route>
        <Route exact path="/more/:id" element={<LocalNews />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
