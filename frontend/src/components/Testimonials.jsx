import React, { useState } from "react";
import { testimonials } from "../mock";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-6">
          Kata Mereka
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-slate-100 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-40 h-40 rounded-2xl object-cover"
            />
          </div>
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-100" />
            <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed pl-4">
              {t.text}
            </p>
            <div className="mt-6 pl-4">
              <p className="font-bold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
            <div className="flex items-center gap-2 mt-6 pl-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "bg-[#0025F5] w-6" : "bg-slate-300 w-2"
                  }`}
                />
              ))}
              <div className="ml-auto flex gap-2">
                <button
                  onClick={() =>
                    setIdx((idx - 1 + testimonials.length) % testimonials.length)
                  }
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-700" />
                </button>
                <button
                  onClick={() => setIdx((idx + 1) % testimonials.length)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
                >
                  <ChevronRight className="w-4 h-4 text-slate-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
