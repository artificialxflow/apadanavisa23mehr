import React, { useState } from 'react';
import { 
  PhoneCall, 
  MapPin, 
  Clock, 
  Globe2, 
  LayoutDashboard, 
  CalendarCheck, 
  Menu, 
  X, 
  Sparkles,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  currentView: 'landing' | 'admin';
  onNavigateView: (view: 'landing' | 'admin') => void;
  onOpenBooking: () => void;
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateView,
  onOpenBooking,
  onOpenAssessment
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'fa' | 'en'>('fa');

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'landing') {
      onNavigateView('landing');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Bar for contact, offices, and language */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              پاسخگویی فعال دفاتر تهران و تورنتو
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-red-400" />
              ساعت کاری: شنبه تا چهارشنبه ۹:۰۰ الی ۱۸:۰۰
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              دفتر تورنتو: Bay St, Toronto 🇨🇦 | دفتر تهران: جردن 🇮🇷
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+982188990011" 
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-medium transition"
              dir="ltr"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>+98 (21) 8899-0011</span>
            </a>

            <div className="flex items-center border-r border-slate-700 pr-3 gap-1">
              <Globe2 className="w-3.5 h-3.5 text-slate-400" />
              <button
                onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
                className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition border border-slate-700"
              >
                {lang === 'fa' ? 'FA / فارسی' : 'EN / English'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 via-red-700 to-slate-900 flex items-center justify-center text-white shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform border border-red-500/30">
            <span className="text-2xl select-none">🍁</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 font-['Vazirmatn']">
                آپادانا <span className="text-red-600">ویزا</span>
              </span>
              <span className="text-[10px] bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded-full border border-red-200">
                کانادا 🇨🇦
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              مرکز تخصصی مهاجرت و اقامت کانادا • وکیل رسمی RCIC
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm text-slate-700">
          <button 
            onClick={() => scrollToSection('hero')}
            className="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-red-50/60 transition"
          >
            صفحه اصلی
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-red-50/60 transition"
          >
            خدمات ویزا
          </button>
          <button 
            onClick={onOpenAssessment}
            className="px-3.5 py-2 rounded-lg text-blue-700 hover:text-blue-800 hover:bg-blue-50/80 font-semibold transition flex items-center gap-1"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            ارزیابی آنلاین شانس ویزا
          </button>
          <button 
            onClick={() => scrollToSection('stats')}
            className="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-red-50/60 transition"
          >
            آمار و افتخارات
          </button>
          <button 
            onClick={() => scrollToSection('blog')}
            className="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-red-50/60 transition"
          >
            اخبار مهاجرت
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-red-50/60 transition"
          >
            نتایج و رضایت
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="px-3.5 py-2 rounded-lg hover:text-red-600 hover:bg-red-50/60 transition"
          >
            سوالات متداول
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Admin Panel Toggle Button */}
          <button
            onClick={() => onNavigateView(currentView === 'landing' ? 'admin' : 'landing')}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl border transition shadow-sm ${
              currentView === 'admin' 
                ? 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800' 
                : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-blue-600" />
            <span>{currentView === 'admin' ? 'بازگشت به سایت' : 'پنل مدیریت (CRM)'}</span>
            {currentView === 'landing' && (
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            )}
          </button>

          {/* Book Consultation Button */}
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-red-600/25 hover:shadow-lg hover:shadow-red-600/35 transition active:scale-95 border border-red-500"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>رزرو وقت مشاوره</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col gap-1 text-sm font-medium text-slate-700">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-right px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              صفحه اصلی
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-right px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              خدمات تخصصی ویزا
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="text-right px-3 py-2.5 rounded-lg bg-blue-50 text-blue-700 font-bold flex items-center justify-between"
            >
              <span>ارزیابی آنلاین شانس ویزا</span>
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('stats')}
              className="text-right px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              آمار و پرونده‌های موفق
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-right px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              اخبار و مقالات مهاجرت
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-right px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              نظرات موکلین
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-right px-3 py-2.5 rounded-lg hover:bg-slate-100"
            >
              سوالات متداول
            </button>
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateView(currentView === 'landing' ? 'admin' : 'landing');
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-800 text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-50"
            >
              <LayoutDashboard className="w-4 h-4 text-blue-600" />
              <span>{currentView === 'admin' ? 'بازگشت به سایت اصلی' : 'ورود به پنل مدیریت (Admin CRM)'}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-red-600/30"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>رزرو وقت مشاوره آنلاین</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
