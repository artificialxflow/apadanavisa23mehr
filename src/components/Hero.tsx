import React from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Users, 
  FileText,
  BadgeCheck
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAssessment }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 pt-8 pb-16 md:pt-16 md:pb-24 border-b border-slate-200">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Hero Content (RTL) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-red-200 text-red-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-xs font-bold font-['Vazirmatn']">
                مرکز معتبر مهاجرت به کانادا تحت نظارت وکلای رسمی CICC 🇨🇦
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 leading-[1.3] sm:leading-[1.25]">
              مسیر هوشمند، قانونی و مطمئن برای{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-red-600 via-red-700 to-rose-600">
                اقامت و زندگی در کانادا
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              موسسه بین‌المللی <strong className="text-slate-900 font-bold">آپادانا ویزا</strong> با بیش از ۱۴ سال سابقه درخشان و بهره‌گیری از وکلای رسمی عضو کانون مشاوران کانادا (RCIC)، صفر تا صد پرونده‌های تحصیلی، کاری، اکسپرس اینتری و سرمایه‌گذاری شما را تا اخذ ویزا و اقامت دائم تضمین می‌کند.
            </p>

            {/* Quick Guarantees Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">وکیل رسمی رجیسترشده RCIC</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <Award className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">نرخ موفقیت ۹۸.۴٪ پرونده‌ها</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <FileText className="w-5 h-5 text-rose-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">قرارداد رسمی با ضمانت تعهد</span>
              </div>
            </div>

            {/* Action Buttons (CTAs) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={onOpenAssessment}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 hover:from-blue-800 hover:to-indigo-950 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-800/25 hover:shadow-xl hover:shadow-blue-800/35 transition active:scale-98 border border-blue-600 group"
              >
                <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
                <span>ارزیابی آنلاین شانس ویزا (رایگان)</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border-2 border-red-600 shadow-sm hover:shadow-md transition active:scale-98"
              >
                <span className="text-red-600 font-extrabold">رزرو وقت مشاوره تخصصی</span>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-md font-semibold">
                  آنلاین یا حضوری
                </span>
              </button>
            </div>

            {/* Trust Footer line */}
            <div className="flex items-center gap-6 pt-2 text-xs text-slate-500">
              <div className="flex -space-x-2 space-x-reverse overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client 1" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client 2" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Client 3" />
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-[10px] ring-2 ring-white">
                  +۲K
                </div>
              </div>
              <p className="font-medium text-slate-600">
                بیش از <strong className="text-slate-900 font-bold">۲,۸۵۰ پرونده موفق</strong> ویزای کانادا تا پایان سال گذشته
              </p>
            </div>

          </div>

          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame with crisp border and shadow */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80" 
                  alt="تورنتو و برج CN کانادا" 
                  className="w-full h-[420px] object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>

                {/* Overlaid Badges */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/80 shadow-lg flex items-center gap-2">
                  <span className="text-xl">🇨🇦</span>
                  <div className="text-right">
                    <p className="text-[11px] font-black text-slate-900 leading-none">مهاجرت قانونی کانادا</p>
                    <p className="text-[9px] text-emerald-600 font-bold mt-0.5">مجوز رسمی IRCC / CICC</p>
                  </div>
                </div>

                <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                        🍁
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-black text-slate-900">آخرین ویزای صادر شده</p>
                        <p className="text-[10px] text-slate-500">امروز - سفارت کانادا در آنکارا</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      تایید شد
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                    <span>نوع ویزا: <strong>تحصیلی + اجازه کار باز همسر</strong></span>
                    <span className="text-red-600 font-bold">Ontario, Canada</span>
                  </div>
                </div>
              </div>

              {/* Floating Counter Badge on the side */}
              <div className="absolute -top-4 -left-4 bg-white p-3.5 rounded-2xl border-2 border-slate-100 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 text-white flex items-center justify-center shadow-md">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-slate-900">مجوز RCIC رسمی</p>
                  <p className="text-[11px] text-slate-500 font-mono" dir="ltr">License #R532891</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
