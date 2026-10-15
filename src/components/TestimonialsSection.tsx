import React, { useState } from 'react';
import { Star, Quote, PlayCircle, X, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<Testimonial | null>(null);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase">
            داستان‌های واقعی موفقیت
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-2">
            تجربه موکلین ما از شروع مشاوره تا ورود به کانادا
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            بیش از ۹۸٪ رضایت و هزاران خانواده‌ای که رویای اقامت در کانادا را با ما به واقعیت تبدیل کردند
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-3xl p-6 sm:p-7 border-2 border-slate-200 hover:border-red-400 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group relative"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-300 group-hover:text-red-300 transition-colors" />
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-right">
                  «{item.comment}»
                </p>
              </div>

              {/* Client Info & Video Button */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-red-500/30"
                    />
                    <div className="text-right">
                      <p className="text-xs font-black text-slate-900">{item.name}</p>
                      <p className="text-[11px] text-red-600 font-bold">{item.destination}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{item.visaType}</p>
                    </div>
                  </div>

                  {item.videoPreview && (
                    <button
                      onClick={() => setActiveVideoModal(item)}
                      className="p-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-700 transition flex items-center gap-1 text-[11px] font-bold"
                      title="مشاهده ویدیوی رضایت"
                    >
                      <PlayCircle className="w-4 h-4 text-red-600" />
                      <span className="hidden sm:inline">ویدیو</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Preview Modal */}
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
            <div className="bg-slate-900 rounded-3xl max-w-lg w-full p-6 border border-slate-700 shadow-2xl relative text-right text-white">
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 left-4 p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>

              <h4 className="text-base font-black mb-1">
                ویدیوی رضایت موکل: {activeVideoModal.name}
              </h4>
              <p className="text-xs text-red-400 font-bold mb-4">{activeVideoModal.destination} - {activeVideoModal.visaType}</p>

              {/* Video Player Mockup */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=700&q=80"
                  alt="Video placeholder"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 gap-2">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                    <PlayCircle className="w-8 h-8 text-white fill-white" />
                  </div>
                  <span className="text-xs font-bold text-white">پخش ویدیوی دریافت ویزا و لندینگ در کانادا</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>تایید اصالت پرونده توسط وکیل RCIC</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> پرونده مختومه با موفقیت
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
