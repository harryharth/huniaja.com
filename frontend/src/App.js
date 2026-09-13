import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickCategories from "./components/QuickCategories";
import PropertyTypes from "./components/PropertyTypes";
import PromoStrip from "./components/PromoStrip";
import NewListings from "./components/NewListings";
import { SubsidiSection, PopulerSection } from "./components/HighlightSections";
import FavoriteLocations from "./components/FavoriteLocations";
import KerjaSama from "./components/KerjaSama";
import Testimonials from "./components/Testimonials";
import WhyHuniaja from "./components/WhyHuniaja";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

const Home = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <Hero />
    <QuickCategories />
    <PropertyTypes />
    <PromoStrip />
    <NewListings />
    <SubsidiSection />
    <PopulerSection />
    <FavoriteLocations />
    <KerjaSama />
    <Testimonials />
    <WhyHuniaja />
    <AppDownload />
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
