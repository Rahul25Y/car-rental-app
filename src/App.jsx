import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./Component/NavBar/NavBar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";
import CarList from "./Component/CarList/CarList";
import Testimonial from "./Component/Testimonial/Testimonial";
import AppStoreBanner from "./Component/AppStoreBanner/AppStoreBanner";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end


  // AOS initialization
  useEffect(() => {
    AOS.init({
      offset: 100, 
      duration: 800, 
      easing: "ease-in-sine", 
      delay: 100, 
    });
    AOS.refresh(); 
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About/>
      <Services/>
      <CarList/>
      <Testimonial/>
      <AppStoreBanner/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
