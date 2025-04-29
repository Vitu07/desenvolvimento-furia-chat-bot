import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
//import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget/ChatWidget";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      {/*<AboutSection />*/}
      <Footer />
      <div id="chat">
        <ChatWidget />
      </div>
    </>
  );
}

export default App;
