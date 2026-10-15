import React, { useState } from 'react';
import { Clock, User, ArrowLeft, BookOpen, X, Sparkles, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-right max-w-2xl">
            <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase">
              پایگاه دانش و بخشنامه‌های IRCC
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-2">
              آخرین اخبار و راهنماهای کاربردی مهاجرت کانادا
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              بررسی کارشناسی و به‌روز جدیدترین اطلاعیه‌های اداره مهاجرت کانادا
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-3 py-2 rounded-xl">
              به‌روزرسانی هفتگی توسط وکلای RCIC
            </span>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-slate-200 hover:border-red-400 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-black bg-red-600 text-white px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 text-right">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-red-500" />
                  {post.author}
                </span>

                <button
                  onClick={() => setSelectedArticle(post)}
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 group/btn"
                >
                  <span>مطالعه مقاله</span>
                  <ArrowLeft className="w-3.5 h-3.5 group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Reading Article */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative text-right max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <span className="text-xs font-bold bg-red-100 text-red-700 px-3 py-1 rounded-full">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-black text-slate-900 leading-snug">
                {selectedArticle.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-slate-400 my-4 border-y border-slate-100 py-2.5">
                <span>نویسنده: <strong>{selectedArticle.author}</strong></span>
                <span>تاریخ انتشار: <strong>{selectedArticle.date}</strong></span>
                <span>زمان مطالعه: <strong>{selectedArticle.readTime}</strong></span>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-normal">
                <p className="font-semibold text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {selectedArticle.excerpt}
                </p>
                <p>{selectedArticle.content}</p>
                <p>
                  در صورت تمایل به بررسی شرایط خود بر اساس آخرین تغییرات این بخشنامه، می‌توانید از طریق بخش ارزیابی یا رزرو مشاوره مستقیم با وکلای دفتر آپادانا در ارتباط باشید.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition"
                >
                  بستن
                </button>
                <span className="text-xs text-slate-400">آپادانا ویزا • تورنتو - تهران</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
