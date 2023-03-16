import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ImgSlider from "./components/ImgSlider";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <Offers></Offers>
      <Plan></Plan>
      <Rooms></Rooms>
      <ImgSlider></ImgSlider>
      <Footer></Footer>

    </div>
  );
}

export default App;
