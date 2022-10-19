import "./App.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import OurService from "./components/OurService";
import Service from "./components/Service";

function App() {
  return (
    <div className="App ">
      <NavBar />
      <Hero />
      <Service />
      <AboutUs />
      <OurService />

      <Footer />
    </div>
  );
}

export default App;
