import React from "react";

import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";


// Главный компонент
const App: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Header />
      <Promo />
      <Gallery />
      <Footer />
    </div>
  );
};


export default App
