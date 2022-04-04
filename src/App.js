import { Outlet } from "react-router";
import MenuMobile from "./components/BtnMenuMobile";
import Footer from "./components/Footer";
import Header from './components/Header';
import WhatsApp from "./components/WhatsApp";


function App() {


  return (
    <>
      <Header />
      
        <Outlet />
    
      { window.matchMedia("(max-width: 599px)").matches ? <MenuMobile /> : null }
      { window.matchMedia("(max-width: 599px)").matches ? <WhatsApp /> : null }
      <Footer />
    </>
  );
}

export default App;
