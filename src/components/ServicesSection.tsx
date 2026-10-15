import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  Plane, 
  Rocket, 
  HeartHandshake, 
  CheckCircle, 
  ArrowLeft, 
  Clock, 
  DollarSign,
  ChevronLeft
} from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceItem, VisaCategory } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenBooking }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Plane': return <Plane className="w-6 h-6" />;
      case 'Rocket': return <Rocket className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  const filteredServices = selectedFilter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedFilter);

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 font-bold text-xs mb-3 border border-red-200">
              🍁 خدمات تخصصی مهاجرت قانونی
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              مسیرهای مهاجرتی متناسب با پرونده شما
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              برنامه‌ریزی دقیق توسط وکلای رسمی برای افزایش حداکثری شانس قبولی در اداره مهاجرت کانادا (IRCC)
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap border ${
                selectedFilter === 'all'
                  ? 'bg-red-600 text-white border-red-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              همه خدمات
            </button>
            <button
              onClick={() => setSelectedFilter('study')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap border ${
                selectedFilter === 'study'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              تحصیلی
            </button>
            <button
              onClick={() => setSelectedFilter('express_entry')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap border ${
                selectedFilter === 'express_entry'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              اقامت دائم (PR)
            </button>
            <button
              onClick={() => setSelectedFilter('work')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap border ${
                selectedFilter === 'work'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              کاری و جاب‌آفر
            </button>
            <button
              onClick={() => setSelectedFilter('investment')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap border ${
                selectedFilter === 'investment'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              استارتاپ و سرمایه‌گذاری
            </button>
            <button
              onClick={() => setSelectedFilter('tourist')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap border ${
                selectedFilter === 'tourist'
                  ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              توریستی
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200 hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-black px-4 py-1 rounded-br-2xl shadow-sm">
                  پیشنهاد ویژه
                </div>
              )}

              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-110 ${
                    service.accentColor === 'blue' ? 'bg-blue-600' :
                    service.accentColor === 'indigo' ? 'bg-indigo-600' :
                    service.accentColor === 'emerald' ? 'bg-emerald-600' :
                    service.accentColor === 'rose' ? 'bg-rose-600' :
                    service.accentColor === 'amber' ? 'bg-amber-600' :
                    'bg-sky-600'
                  }`}>
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {service.badge}
                  </span>
                </div>

                {/* Title and Short Description */}
                <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>

                {/* Key Requirements List */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-700 mb-2.5">
                    الزامات و مدارک کلیدی:
                  </p>
                  <ul className="space-y-1.5">
                    {service.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    زمان تقریبی: {service.duration}
                  </span>
                  <span className="font-extrabold text-slate-800" dir="ltr">
                    {service.feeFrom}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedModalService(service)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center justify-center gap-1 border border-slate-200"
                  >
                    <span>جزئیات شرایط</span>
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm hover:shadow-md"
                  >
                    <span>رزرو پرونده</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Service Details */}
        {selectedModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                    {getIcon(selectedModalService.icon)}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900">{selectedModalService.title}</h4>
                    <span className="text-xs text-red-600 font-bold">{selectedModalService.badge}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedModalService(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <p className="leading-relaxed">{selectedModalService.shortDesc}</p>
                
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <p className="font-bold text-slate-800 text-xs mb-2">شرایط کامل مورد نیاز برای این ویزا:</p>
                  <ul className="space-y-2">
                    {selectedModalService.requirements.map((r, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between p-3 bg-red-50 text-red-800 rounded-xl border border-red-200 text-xs">
                  <span>مدت زمان تخمینی پروسه: <strong>{selectedModalService.duration}</strong></span>
                  <span>تعرفه از: <strong>{selectedModalService.feeFrom}</strong></span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedModalService(null);
                    onOpenBooking();
                  }}
                  className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition"
                >
                  رزرو وقت مشاوره برای این ویزا
                </button>
                <button
                  onClick={() => setSelectedModalService(null)}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs sm:text-sm transition"
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
