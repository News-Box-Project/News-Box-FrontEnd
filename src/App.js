import "./App.css";
import Header from "./componants/header/header";
import CardsComponant from "./componants/home/cards/cards";
import CarouselComponant from "./componants/home/carousel/carousel";
import SecondaryNav from "./componants/home/secondaryNavbar/secondaryNav";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SecondaryNav />
      <CarouselComponant />
      <CardsComponant />
    </div>
  );
}

export default App;
