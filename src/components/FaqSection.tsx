import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(f => 
    f.question.includes(searchQuery) || f.answer.includes(searchQuery) || f.category.includes(searchQuery)
  );

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase">
            پاسخ به ابهامات متداول
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            پرسش‌های متداول متقاضیان مهاجرت کانادا
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            شفافیت در پاسخ به سوالات حقوقی، هزینه‌ها، ویزاها و فرآیندها
          </p>
        </div>

        {/* Search filter */}
        <div className="relative mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجو در بین سوالات متداول (مثال: هزینه، وکیل، تحصیلی)..."
            className="w-full py-3.5 pr-11 pl-4 rounded-2xl border-2 border-slate-200 bg-white text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-red-500 shadow-xs"
          />
          <Search className="w-5 h-5 text-slate-400 absolute right-4 top-3.5" />
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span className="text-sm font-bold text-slate-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 font-normal">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2.5 py-0.5 rounded-md">
                        دسته‌بندی: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
