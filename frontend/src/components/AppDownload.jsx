import React from "react";
import { Smartphone } from "lucide-react";

export default function AppDownload() {
  return (
    <section className="bg-slate-50 pb-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#001DF3] rounded-3xl relative overflow-hidden px-8 md:px-14 pt-10 md:pt-6 pb-0 md:pb-0 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="relative md:w-1/3 flex justify-center order-2 md:order-1">
            <div className="relative w-[220px] md:w-[240px]">
              <div className="aspect-[9/19] rounded-[36px] bg-slate-900 p-2 shadow-2xl mt-6 md:mt-8">
                <div className="w-full h-full rounded-[30px] bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-white text-3xl font-black italic drop-shadow">Deal</div>
                  <div className="text-yellow-300 text-4xl font-black italic drop-shadow">hot</div>
                  <div className="mt-2 bg-white rounded-full px-3 py-1 text-[10px] font-bold text-blue-700">Mua sắm ngất ngây</div>
                </div>
              </div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900 rounded-b-2xl" />
            </div>
          </div>
          <div className="md:w-2/3 text-white order-1 md:order-2 pb-10 md:pb-10">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-semibold mb-3">
              <Smartphone className="w-3.5 h-3.5" /> Mobile App
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
              Coba Aplikasi
            </h2>
            <p className="text-white/85 text-sm md:text-base mb-5 max-w-md">
              Aplikasi di google play dan playstore. Properti digital di
              genggaman. Tinggal Buka, Pilih dan Suka.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-black hover:bg-slate-900 rounded-xl px-4 py-2 transition"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                  <path d="M3 20.5V3.5a1 1 0 011.53-.85l14 8.5a1 1 0 010 1.7l-14 8.5A1 1 0 013 20.5z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px]">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-black hover:bg-slate-900 rounded-xl px-4 py-2 transition"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                  <path d="M16.365 1.43c0 1.14-.43 2.24-1.19 3.04-.81.87-2.13 1.55-3.24 1.46-.14-1.13.42-2.31 1.16-3.1.83-.9 2.22-1.55 3.27-1.4zM20 17.35c-.55 1.26-.82 1.82-1.52 2.94-.99 1.55-2.39 3.48-4.12 3.49-1.55.02-1.95-1.01-4.06-.99-2.11.02-2.54 1.01-4.09.99-1.73-.01-3.06-1.77-4.05-3.32-2.78-4.34-3.07-9.44-1.36-12.14 1.22-1.92 3.15-3.05 4.96-3.05 1.85 0 3.01 1.02 4.55 1.02 1.49 0 2.4-1.02 4.53-1.02 1.62 0 3.34.88 4.56 2.42-4.01 2.19-3.36 7.92-.4 9.66z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px]">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
