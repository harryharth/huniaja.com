import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickCategories from "./components/QuickCategories";
import NewListings from "./components/NewListings";
import { PopulerSection } from "./components/HighlightSections";
import KerjaSama from "./components/KerjaSama";
import WhyHuniaja from "./components/WhyHuniaja";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import KarirPage from "./pages/KarirPage";
import KprPage from "./pages/KprPage";

const Home = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <Hero />
    <QuickCategories />
    <NewListings />
    <PopulerSection />
    <KerjaSama />
    <WhyHuniaja />
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/karir" element={<KarirPage />} />
          <Route path="/kpr" element={<KprPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
