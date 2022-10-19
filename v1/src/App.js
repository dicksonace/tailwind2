import "./App.css";
import AboutUs from "./components/AboutUs";
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
    </div>
  );
}

export default App;
