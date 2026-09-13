import React, { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Slider } from "../components/ui/slider";
import { Calculator, RefreshCw, Wallet, Building2, Landmark, Percent } from "lucide-react";

const formatIDR = (n) =>
  "Rp " + Math.round(n).toLocaleString("id-ID").replace(/,/g, ".");

function NumField({ label, value, onChange, prefix, suffix, min, max, step }) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-600">{label}</label>
      <div className="mt-1 flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 h-11 focus-within:border-[#0025F5] focus-within:ring-1 focus-within:ring-[#0025F5]">
        {prefix && (
          <span className="text-sm text-slate-500 pr-2 shrink-0">{prefix}</span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          className="w-full bg-transparent outline-none text-sm text-slate-800"
        />
        {suffix && (
          <span className="text-sm text-slate-500 pl-2 shrink-0">{suffix}</span>
        )}
      </div>
    </div>
  );
}

export function KprSyariahDialog({ open, onOpenChange }) {
  const [price, setPrice] = useState(500000000);
  const [dpPercent, setDpPercent] = useState(20);
  const [tenor, setTenor] = useState(15);
  const [margin, setMargin] = useState(8);

  const result = useMemo(() => {
    const dp = (price * dpPercent) / 100;
    const financing = Math.max(price - dp, 0);
    const totalMargin = financing * (margin / 100) * tenor;
    const totalPay = financing + totalMargin;
    const monthly = tenor > 0 ? totalPay / (tenor * 12) : 0;
    return { dp, financing, totalMargin, totalPay, monthly };
  }, [price, dpPercent, tenor, margin]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-[#0025F5]" />
            </div>
            <div>
              <DialogTitle className="text-lg md:text-xl">
                Simulasi Cicilan KPR Syariah
              </DialogTitle>
              <DialogDescription className="text-xs md:text-sm">
                Estimasi cicilan bulanan dengan akad Murabahah (margin flat).
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <NumField
            label="Harga Properti"
            prefix="Rp"
            value={price}
            onChange={setPrice}
            min={50000000}
            step={1000000}
          />
          <div>
            <label className="text-xs font-semibold text-slate-600">
              Uang Muka (DP)
            </label>
            <div className="mt-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-800">
                  {dpPercent}%
                </span>
                <span className="text-slate-500 text-xs">
                  {formatIDR(result.dp)}
                </span>
              </div>
              <Slider
                value={[dpPercent]}
                min={0}
                max={80}
                step={5}
                onValueChange={(v) => setDpPercent(v[0])}
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600">
              Tenor (tahun)
            </label>
            <div className="mt-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-800">
                  {tenor} tahun
                </span>
                <span className="text-slate-500 text-xs">
                  {tenor * 12} bulan
                </span>
              </div>
              <Slider
                value={[tenor]}
                min={1}
                max={20}
                step={1}
                onValueChange={(v) => setTenor(v[0])}
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600">
              Margin Bank (per tahun)
            </label>
            <div className="mt-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-800">{margin}%</span>
                <span className="text-slate-500 text-xs">margin flat</span>
              </div>
              <Slider
                value={[margin]}
                min={4}
                max={14}
                step={0.5}
                onValueChange={(v) => setMargin(v[0])}
                className="mt-2"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 bg-gradient-to-br from-[#0025F5] to-[#0033ff] text-white rounded-3xl p-5 md:p-6">
          <p className="text-xs uppercase tracking-widest text-white/70">
            Estimasi Cicilan Bulanan
          </p>
          <p className="text-3xl md:text-4xl font-black mt-1">
            {formatIDR(result.monthly)}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-xs">
            <Stat label="Total Pembiayaan" value={formatIDR(result.financing)} />
            <Stat label="Total Margin" value={formatIDR(result.totalMargin)} />
            <Stat label="Total Bayar" value={formatIDR(result.totalPay)} />
          </div>
        </div>

        <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
          *Perhitungan estimasi menggunakan skema margin flat (Murabahah).
          Angka final dapat berbeda tergantung kebijakan bank dan hasil BI
          Checking.
        </p>

        <div className="flex gap-2 mt-4">
          <Button
            className="flex-1 bg-[#12B815] hover:bg-[#0fa112] text-white rounded-full h-11 font-bold"
            onClick={() => onOpenChange(false)}
          >
            Ajukan KPR Sekarang
          </Button>
          <Button
            variant="outline"
            className="rounded-full h-11 font-semibold"
            onClick={() => onOpenChange(false)}
          >
            Tutup
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function TakeOverDialog({ open, onOpenChange }) {
  const [remaining, setRemaining] = useState(300000000);
  const [oldMonthly, setOldMonthly] = useState(4500000);
  const [newMargin, setNewMargin] = useState(7);
  const [tenor, setTenor] = useState(10);

  const result = useMemo(() => {
    const totalMargin = remaining * (newMargin / 100) * tenor;
    const totalPay = remaining + totalMargin;
    const monthly = tenor > 0 ? totalPay / (tenor * 12) : 0;
    const savings = oldMonthly - monthly;
    return { totalMargin, totalPay, monthly, savings };
  }, [remaining, newMargin, tenor, oldMonthly]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center">
              <RefreshCw className="w-6 h-6 text-[#0025F5]" />
            </div>
            <div>
              <DialogTitle className="text-lg md:text-xl">
                Simulasi Take Over KPR Syariah
              </DialogTitle>
              <DialogDescription className="text-xs md:text-sm">
                Hitung potensi penghematan dengan memindahkan KPR ke skema
                Syariah baru.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <NumField
            label="Sisa Pokok Pinjaman"
            prefix="Rp"
            value={remaining}
            onChange={setRemaining}
            min={10000000}
            step={1000000}
          />
          <NumField
            label="Cicilan Saat Ini per Bulan"
            prefix="Rp"
            value={oldMonthly}
            onChange={setOldMonthly}
            min={0}
            step={100000}
          />

          <div>
            <label className="text-xs font-semibold text-slate-600">
              Sisa Tenor (tahun)
            </label>
            <div className="mt-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-800">
                  {tenor} tahun
                </span>
                <span className="text-slate-500 text-xs">
                  {tenor * 12} bulan
                </span>
              </div>
              <Slider
                value={[tenor]}
                min={1}
                max={20}
                step={1}
                onValueChange={(v) => setTenor(v[0])}
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-600">
              Margin Baru (per tahun)
            </label>
            <div className="mt-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-800">
                  {newMargin}%
                </span>
                <span className="text-slate-500 text-xs">Syariah flat</span>
              </div>
              <Slider
                value={[newMargin]}
                min={4}
                max={14}
                step={0.5}
                onValueChange={(v) => setNewMargin(v[0])}
                className="mt-2"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 bg-gradient-to-br from-[#0025F5] to-[#0033ff] text-white rounded-3xl p-5 md:p-6">
          <p className="text-xs uppercase tracking-widest text-white/70">
            Cicilan Baru per Bulan
          </p>
          <p className="text-3xl md:text-4xl font-black mt-1">
            {formatIDR(result.monthly)}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-xs">
            <Stat label="Total Margin Baru" value={formatIDR(result.totalMargin)} />
            <Stat label="Total Bayar" value={formatIDR(result.totalPay)} />
            <Stat
              label={result.savings >= 0 ? "Hemat / Bulan" : "Selisih / Bulan"}
              value={formatIDR(Math.abs(result.savings))}
              highlight={result.savings >= 0 ? "#DAFF3D" : "#FCA5A5"}
            />
          </div>
        </div>

        <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
          *Estimasi menggunakan margin flat. Bank tujuan dapat mengenakan biaya
          administrasi dan appraisal ulang saat proses take over.
        </p>

        <div className="flex gap-2 mt-4">
          <Button
            className="flex-1 bg-[#12B815] hover:bg-[#0fa112] text-white rounded-full h-11 font-bold"
            onClick={() => onOpenChange(false)}
          >
            Ajukan Take Over Sekarang
          </Button>
          <Button
            variant="outline"
            className="rounded-full h-11 font-semibold"
            onClick={() => onOpenChange(false)}
          >
            Tutup
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Stat({ label, value, highlight }) {
  return (
    <div className="bg-white/10 rounded-xl p-3">
      <p className="text-[10px] text-white/70 uppercase tracking-wider">
        {label}
      </p>
      <p
        className="font-bold text-sm md:text-base mt-1"
        style={highlight ? { color: highlight } : {}}
      >
        {value}
      </p>
    </div>
  );
}
