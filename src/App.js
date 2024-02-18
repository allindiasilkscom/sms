import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/Services";
import About from "./components/About";
import QulityPolicy from "./components/QulityPolicy";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<Hero/>}/>
        <Route path='Service' element={<Services/>}/>
        <Route path='qulity' element={<QulityPolicy/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='Certificates' element={<Certificates/>}/>
      

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
