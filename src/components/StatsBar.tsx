import React from 'react';
import { CheckCircle2, ShieldCheck, Scale, Award, FileCheck } from 'lucide-react';
import { STATS } from '../data/mockData';

export const StatsBar: React.FC = () => {
  return (
    <section id="stats" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title hint */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider">
            کارنامه عملکرد و آمار مستند
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
            چرا متقاضیان مهاجرت «آپادانا ویزا» را انتخاب می‌کنند؟
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            return (
              <div
                key={idx}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-red-400 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xs ${
                    idx === 0 ? 'bg-emerald-100 text-emerald-700' :
                    idx === 1 ? 'bg-blue-100 text-blue-700' :
                    idx === 2 ? 'bg-indigo-100 text-indigo-700' :
                    'bg-rose-100 text-rose-700'
                  }`}>
                    {idx === 0 && <CheckCircle2 className="w-6 h-6" />}
                    {idx === 1 && <FileCheck className="w-6 h-6" />}
                    {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                    {idx === 3 && <Scale className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-red-500 transition-colors">
                    #0{idx + 1}
                  </span>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-black text-slate-900 tracking-tight group-hover:text-red-600 transition-colors font-['Vazirmatn']">
                    {stat.value}
                  </p>
                  <h3 className="text-base font-bold text-slate-800 mt-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {stat.sub}
                  </p>
                </div>

                <div className="absolute bottom-0 right-6 left-6 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-rose-500 rounded-full transition-all"></div>
              </div>
            );
          })}
        </div>

        {/* CICC / RCIC Verification Banner */}
        <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-4 sm:p-6 text-white border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-right">
            <div className="w-12 h-12 rounded-xl bg-red-600/30 border border-red-500/50 flex items-center justify-center text-2xl shrink-0">
              🇨🇦
            </div>
            <div>
              <p className="font-extrabold text-sm sm:text-base text-slate-100">
                استعلام رسمی وکلای عضو CICC (کالج مشاوران مهاجرت و شهروندی کانادا)
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                شماره پروانه رسمی RCIC: #R532891 • امکان راستی‌آزمایی در پورتال رسمی دولت کانادا
              </p>
            </div>
          </div>

          <a
            href="https://college-ic.ca" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 text-xs font-bold bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 transition flex items-center gap-1.5"
          >
            <span>مشاهده سامانه CICC</span>
            <Award className="w-4 h-4 text-amber-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
