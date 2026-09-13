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
import {
  HomeTrustStrip,
  HomeHowItWorks,
  HomeStories,
  HomeManifesto,
  HomeFinalCta,
} from "./components/HomeStorySections";
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
import BeritaDetailPage from "./pages/BeritaDetailPage";
import KerjasamaPage from "./pages/KerjasamaPage";
import CariPropertiPage from "./pages/CariPropertiPage";
import KonsultasiPage from "./pages/KonsultasiPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import LoginPage from "./pages/LoginPage";
import PotongRumputPage from "./pages/services/PotongRumputPage";
import HomeCleaningPage from "./pages/services/HomeCleaningPage";
import ServiceAcPage from "./pages/services/ServiceAcPage";
import JagaRumahPage from "./pages/services/JagaRumahPage";
import { useLocation } from "react-router-dom";

const Home = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <Hero />
    <QuickCategories />
    <NewListings />
    <PopulerSection />
    <KerjaSama />
    <HomeStories />
    <WhyHuniaja />
    <HomeFinalCta />
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
          <Route path="/berita/:slug" element={<BeritaDetailPage />} />
          <Route path="/kerjasama" element={<KerjasamaPage />} />
          <Route path="/cari-properti" element={<CariPropertiPage />} />
          <Route path="/beli" element={<CariPropertiPage />} />
          <Route path="/properti/:id" element={<PropertyDetailPage />} />
          <Route path="/konsultasi" element={<KonsultasiPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/layanan/potong-rumput" element={<PotongRumputPage />} />
          <Route path="/layanan/home-cleaning" element={<HomeCleaningPage />} />
          <Route path="/layanan/service-ac" element={<ServiceAcPage />} />
          <Route path="/layanan/jaga-rumah" element={<JagaRumahPage />} />
        </Routes>
      </BrowserRouter>
      <ConditionalChat />
      <Toaster />
    </div>
  );
}

function ConditionalChat() {
  const path = window.location.pathname;
  if (path.startsWith("/admin")) return null;
  return <ChatWidget />;
}

export default App;
