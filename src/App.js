import "./App.css";
import Header from "./componants/header/header";
import Home from "./componants/home/home";
import Footer from "./componants/Footer/Foote";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
