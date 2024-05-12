import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Quotes from "./components/Quotes";
import Banner2 from "./components/Banner2";
import Banner from "./components/Banner";
import Features from "./components/Features";
import AppStore from './components/AppStore';
import Footer from "./components/Footer";
import PopupPlayer from "./components/PopupPlayer";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

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
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navbar />
      <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Features />
      <AppStore />
      <Footer />

      {/* Video Player */}
      <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} />
    </main>
  );
};

export default App;