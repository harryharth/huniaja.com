import React, { useState } from "react";
import { LOGO_WHITE, promoCards } from "../mock";

export default function PromoStrip() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white pt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {promoCards.map((p, idx) => (
            <div
              key={idx}
              className={`${p.bg} relative overflow-hidden rounded-[32px] md:rounded-[40px] h-40 md:h-48 flex flex-col items-center justify-center text-white shadow-md hover:-translate-y-0.5 transition-transform`}
            >
              <img
                src={LOGO_WHITE}
                alt="Huniaja"
                className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 h-5 md:h-6 opacity-90"
              />
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center px-4">
                {p.accent ? (
                  <>
                    <span>#BeliRumah</span>
                    <span className="text-[#00B512]">JadiMudah</span>
                  </>
                ) : (
                  p.title
                )}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1.5 mt-4">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "bg-[#0025F5] w-6" : "bg-slate-300 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
