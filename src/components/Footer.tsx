import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Send, 
  Heart, 
  Award,
  Globe2
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-red-600 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Intro (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-right">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-slate-900 flex items-center justify-center text-white shadow-md border border-red-500/40">
                <span className="text-2xl">🍁</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white font-['Vazirmatn']">
                  آپادانا <span className="text-red-500">ویزا</span>
                </span>
                <p className="text-xs text-slate-400 mt-0.5">
                  موسسه بین‌المللی حقوقی و مهاجرتی کانادا (Apadana Visa)
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              ما با بیش از ۱۴ سال سابقه درخشان در حوزه حقوق بین‌الملل و امور مهاجرتی کانادا، متعهدانه تا رسیدن به مقصد همراه شما هستیم. کلیه پرونده‌ها منحصراً تحت نظارت وکلای رسمی عضو CICC و دارای شماره لایسنس RCIC پیش برده می‌شوند.
            </p>

            {/* License Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[11px] font-bold bg-slate-900 border border-slate-700 px-3 py-1 rounded-lg text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                CICC Registered #R532891
              </span>
              <span className="text-[11px] font-bold bg-slate-900 border border-slate-700 px-3 py-1 rounded-lg text-amber-400 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                عضو رسمی کانون مشاوران کانادا
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-right">
            <h4 className="text-sm font-black text-white border-r-2 border-red-500 pr-2">
              دسترسی سریع
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#hero" className="hover:text-red-400 transition">صفحه اصلی</a></li>
              <li><a href="#services" className="hover:text-red-400 transition">ویزای تحصیلی کانادا</a></li>
              <li><a href="#services" className="hover:text-red-400 transition">اکسپرس اینتری (PR)</a></li>
              <li><a href="#services" className="hover:text-red-400 transition">ویزای کاری و جاب‌آفر</a></li>
              <li><a href="#booking-section" className="hover:text-red-400 transition">رزرو وقت مشاوره</a></li>
              <li><a href="#blog" className="hover:text-red-400 transition">اخبار جدید IRCC</a></li>
            </ul>
          </div>

          {/* Offices Addresses (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-right">
            <h4 className="text-sm font-black text-white border-r-2 border-red-500 pr-2">
              دفاتر رسمی آپادانا ویزا
            </h4>

            {/* Toronto Office */}
            <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-white text-xs font-bold">
                <span className="text-base">🇨🇦</span>
                <span>دفتر مرکزی کانادا (تورنتو):</span>
              </div>
              <p className="text-xs text-slate-400 flex items-start gap-1.5 font-sans" dir="ltr">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Suite 2700, 161 Bay Street, TD Canada Trust Tower, Toronto, ON</span>
              </p>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 font-sans" dir="ltr">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+1 (416) 555-0199</span>
              </p>
            </div>

            {/* Tehran Office */}
            <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-white text-xs font-bold">
                <span className="text-base">🇮🇷</span>
                <span>دفتر امور متقاضیان ایران (تهران):</span>
              </div>
              <p className="text-xs text-slate-400 flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>تهران، خیابان نلسون ماندلا (جردن)، بالاتر از جهان کودک، برج نگین، طبقه ۸</span>
              </p>
              <p className="text-xs text-slate-400 flex items-center gap-1.5" dir="ltr">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+98 (21) 8899-0011</span>
              </p>
            </div>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="pt-2">
              <p className="text-xs font-bold text-slate-300 mb-1.5">
                عضویت در خبرنامه تحلیلی آخرین دراوهای کانادا:
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="ایمیل خود را وارد کنید..."
                  className="bg-slate-900 border border-slate-700 text-xs px-3 py-2 rounded-xl flex-1 text-slate-200 focus:outline-hidden focus:border-red-500"
                  dir="ltr"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>عضویت</span>
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 font-bold mt-1">
                  ✓ ایمیل شما با موفقیت ثبت شد.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} آپادانا ویزا (Apadana Visa Corp). تمامی حقوق مادی و معنوی محفوظ است.</p>
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-slate-400 cursor-pointer">حریم خصوصی</span>
            <span className="hover:text-slate-400 cursor-pointer">شرایط و قوانین</span>
            <span className="hover:text-slate-400 cursor-pointer">راهنمای مراجعین</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
