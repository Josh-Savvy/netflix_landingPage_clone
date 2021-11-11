import React from "react";
import CookiesModal from "./components/modals/AcceptCookiesModal";
import FirstBoxComponent from "./components/Main/FirstBox/FirstBoxComponent";
import SecondBoxComponent from "./components/Main/SecondBox/SecondBoxComponent";
import ThirdBoxComponent from "./components/Main/ThirdBox/ThirdBoxComponent";
import FourthBoxComponent from './components/Main/FourthBox/FourthBoxComponent';
import FifthBoxComponent from "./components/Main/FifthBox/FifthBoxComponent";
import SixthBoxComponent from "./components/Main/SixthBox/SixthBoxComponent";
import Footer from "./components/Main/Footer/Footer";

const App = () => {
  return (
    <>
      <CookiesModal />
      <FirstBoxComponent />
      <SecondBoxComponent />
      <ThirdBoxComponent />
      <FourthBoxComponent/>
      <FifthBoxComponent/>
      <SixthBoxComponent/>
      <Footer/>
    </>
  );
};

export default App;
