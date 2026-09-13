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
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "./components/ChatWidget";

import KarirPage from "./pages/KarirPage";
import KprPage from "./pages/KprPage";
import PasangIklanPage from "./pages/PasangIklanPage";
import TentangKamiPage from "./pages/TentangKamiPage";
import KontakPage from "./pages/KontakPage";
import SKPage from "./pages/SKPage";
import PusatBantuanPage from "./pages/PusatBantuanPage";
import BeritaPage from "./pages/BeritaPage";
import KerjasamaPage from "./pages/KerjasamaPage";

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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/karir" element={<KarirPage />} />
          <Route path="/kpr" element={<KprPage />} />
          <Route path="/pasang-iklan" element={<PasangIklanPage />} />
          <Route path="/tentang-kami" element={<TentangKamiPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          <Route path="/syarat-ketentuan" element={<SKPage />} />
          <Route path="/pusat-bantuan" element={<PusatBantuanPage />} />
          <Route path="/berita" element={<BeritaPage />} />
          <Route path="/kerjasama" element={<KerjasamaPage />} />
        </Routes>
      </BrowserRouter>
      <ChatWidget />
      <Toaster />
    </div>
  );
}

export default App;
