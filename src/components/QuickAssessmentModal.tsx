import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, ArrowLeft, RefreshCw, X, ShieldCheck } from 'lucide-react';

interface QuickAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToBooking: () => void;
}

export const QuickAssessmentModal: React.FC<QuickAssessmentModalProps> = ({
  isOpen,
  onClose,
  onProceedToBooking
}) => {
  const [step, setStep] = useState<number>(1);
  const [visaGoal, setVisaGoal] = useState<string>('study');
  const [ageRange, setAgeRange] = useState<string>('20-29');
  const [education, setEducation] = useState<string>('bachelor');
  const [langLevel, setLangLevel] = useState<string>('clb7');
  const [workExp, setWorkExp] = useState<string>('3plus');
  const [calculatedScore, setCalculatedScore] = useState<{
    chance: number;
    scorePoints: number;
    verdict: string;
    tag: string;
    recommendation: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleCalculate = () => {
    let score = 50;
    
    // Age score
    if (ageRange === '20-29') score += 25;
    else if (ageRange === '30-35') score += 18;
    else score += 8;

    // Education
    if (education === 'phd' || education === 'master') score += 20;
    else if (education === 'bachelor') score += 15;
    else score += 10;

    // Language
    if (langLevel === 'clb9') score += 20;
    else if (langLevel === 'clb7') score += 14;
    else score += 5;

    // Work Exp
    if (workExp === '3plus') score += 15;
    else if (workExp === '1to2') score += 8;

    const chance = Math.min(Math.round(score * 0.75), 96);
    let verdict = 'بسیار بالا و ایده‌آل';
    let tag = 'واجد شرایط مستقیم و اولویت ویژه';
    let recommendation = 'شرایط شما برای دریافت دعوت‌نامه اکسپرس اینتری و پذیرش دانشگاهی رده اول کانادا بسیار مناسب است. توصیه می‌شود جهت رزرو وقت اقدام نمایید.';

    if (chance < 65) {
      verdict = 'متوسط به همراه نیاز به تقویت رزومه';
      tag = 'نیازمند بهبود مدرک زبان یا برنامه استانی';
      recommendation = 'با ارتقای نمره زبان به CLB 8+ یا اقدام از طریق کالج‌های استانی شانس شما به بالای ۸۵٪ ارتقا می‌یابد.';
    }

    setCalculatedScore({
      chance,
      scorePoints: score * 4 + 70,
      verdict,
      tag,
      recommendation
    });
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setCalculatedScore(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border-2 border-slate-200 shadow-2xl relative text-right">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-md">
            <Sparkles className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900">
              ارزیابی آنلاین و هوشمند شانس ویزا 🇨🇦
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              محاسبه آنلاین امتیاز با الگوریتم‌های رسمی اداره مهاجرت کانادا (IRCC)
            </p>
          </div>
        </div>

        {step === 1 ? (
          <div className="space-y-4">
            {/* Question 1: Goal */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                ۱. هدف و اولویت اصلی شما برای مهاجرت به کانادا چیست؟
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'study', label: 'تحصیلی و دانشگاهی' },
                  { id: 'express', label: 'اقامت دائم اسکیلد ورکر' },
                  { id: 'work', label: 'کاری و جاب‌آفر' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setVisaGoal(item.id)}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border text-center transition ${
                      visaGoal === item.id 
                        ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Age */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                ۲. رده سنی متقاضی اصلی:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '20-29', label: '۲۰ تا ۲۹ سال (حداکثر امتیاز)' },
                  { id: '30-35', label: '۳۰ تا ۳۵ سال' },
                  { id: '36plus', label: '۳۶ سال به بالا' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setAgeRange(item.id)}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border text-center transition ${
                      ageRange === item.id 
                        ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Education */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                ۳. بالاترین مدرک تحصیلی معتبر:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'phd', label: 'کارشناسی ارشد یا دکتری' },
                  { id: 'bachelor', label: 'کارشناسی (لیسانس)' },
                  { id: 'diploma', label: 'دیپلم یا فوق دیپلم' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEducation(item.id)}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border text-center transition ${
                      education === item.id 
                        ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 4: Language & Experience */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  ۴. سطح زبان انگلیسی/فرانسوی:
                </label>
                <select
                  value={langLevel}
                  onChange={(e) => setLangLevel(e.target.value)}
                  className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 bg-white text-slate-800"
                >
                  <option value="clb9">عالی (IELTS 7.5+ / CLB 9+)</option>
                  <option value="clb7">متوسط به بالا (IELTS 6.5 / CLB 7)</option>
                  <option value="clb5">مقدماتی یا فاقد مدرک رسمی</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  ۵. سابقه کار مرتبط تخصصی:
                </label>
                <select
                  value={workExp}
                  onChange={(e) => setWorkExp(e.target.value)}
                  className="w-full text-xs font-bold p-2.5 rounded-xl border border-slate-300 bg-white text-slate-800"
                >
                  <option value="3plus">بیش از ۳ سال سابقه با بیمه</option>
                  <option value="1to2">۱ تا ۲ سال سابقه کار</option>
                  <option value="none">کمتر از ۱ سال یا بدون سابقه</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleCalculate}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-black text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>محاسبه آنی شانس ویزا</span>
              </button>
            </div>
          </div>
        ) : (
          /* Step 2: Results Display */
          <div className="space-y-5 animate-in fade-in">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-3xl border border-slate-700 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              
              <span className="text-xs bg-white/10 text-slate-200 px-3 py-1 rounded-full font-bold border border-white/10">
                نتیجه برآورد اولیه پرونده شما
              </span>

              <div className="my-4">
                <span className="text-5xl font-black text-emerald-400 font-['Vazirmatn']">
                  {calculatedScore?.chance}٪
                </span>
                <p className="text-xs text-slate-300 font-bold mt-1">
                  شانس قبولی تخمینی: {calculatedScore?.verdict}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden border border-slate-600">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${calculatedScore?.chance}%` }}
                ></div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-700/60">
                <span>تخمین امتیاز فدرال: <strong>~{calculatedScore?.scorePoints} CRS</strong></span>
                <span className="text-emerald-300 font-bold">{calculatedScore?.tag}</span>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-200 text-xs text-blue-900 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold mb-1 text-blue-950">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>توصیه کارشناس ارشد آپادانا ویزا:</span>
              </div>
              <p>{calculatedScore?.recommendation}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onProceedToBooking();
                }}
                className="py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-1.5"
              >
                <span>رزرو مشاوره با وکیل</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition flex items-center justify-center gap-1.5 border border-slate-200"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>محاسبه مجدد</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
