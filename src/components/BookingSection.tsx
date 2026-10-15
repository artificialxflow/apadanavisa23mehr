import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  CreditCard, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight,
  Video,
  Building,
  FileCheck2,
  Receipt
} from 'lucide-react';
import { Booking } from '../types';

interface BookingSectionProps {
  onNewBookingCreated: (booking: Booking) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ onNewBookingCreated }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  
  // Step 1 state: Service & Format
  const [visaType, setVisaType] = useState<string>('تحصیلی و دانشگاهی (Study Permit)');
  const [format, setFormat] = useState<'online' | 'phone' | 'in_person_tehran' | 'in_person_toronto'>('online');
  
  // Step 2 state: Advisor, Date, Time
  const [advisor, setAdvisor] = useState<string>('افشین دادفر (عضو رسمی RCIC)');
  const [selectedDate, setSelectedDate] = useState<string>('۱۴۰۵/۰۳/۱۸');
  const [selectedTime, setSelectedTime] = useState<string>('۱۱:۰۰ - ۱۲:۰۰');

  // Step 3 state: User info
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [hasResume, setHasResume] = useState<boolean>(false);

  // Step 4 state: Payment simulation
  const [discountCode, setDiscountCode] = useState<string>('');
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [isProcessingPay, setIsProcessingPay] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  const baseFee = format === 'online' ? 1450000 : format === 'phone' ? 980000 : 1950000;
  const finalFee = discountApplied ? Math.round(baseFee * 0.85) : baseFee;

  const handleApplyDiscount = () => {
    if (discountCode.trim().toLowerCase() === 'canada2026' || discountCode.trim() === 'کانادا') {
      setDiscountApplied(true);
    } else {
      alert('کد تخفیف معتبر نیست. (کد تست: canada2026)');
    }
  };

  const handleProcessPayment = () => {
    setIsProcessingPay(true);
    setTimeout(() => {
      setIsProcessingPay(false);
      const trackingCode = 'CA-' + Math.floor(10000 + Math.random() * 90000);
      const newBooking: Booking = {
        id: 'BK-' + Math.floor(2000 + Math.random() * 8000),
        trackingCode,
        fullName: fullName || 'متقاضی محترم',
        phone: phone || '۰۹۱۲۰۰۰۰۰۰۰',
        email: email || 'user@example.com',
        visaType,
        consultationType: format,
        date: selectedDate,
        timeSlot: selectedTime,
        advisor,
        fee: finalFee,
        status: 'confirmed',
        notes: notes || 'ثبت آنلاین از طریق وبسایت با پرداخت موفق',
        createdAt: 'هم‌اکنون'
      };

      setConfirmedBooking(newBooking);
      onNewBookingCreated(newBooking);
      setCurrentStep(5);
    }, 1200);
  };

  return (
    <section id="booking-section" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full uppercase">
            سیستم رزرواسیون مستقیم
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            رزرو جلسه مشاوره حقوقی و تخصصی مهاجرت
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg mx-auto">
            بررسی پرونده به مدت ۶۰ دقیقه توسط وکلای رسمی CICC به صورت آنلاین یا در دفاتر تهران و تورنتو
          </p>
        </div>

        {/* Multi-step Progress Bar */}
        <div className="mb-10">
          <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold">
            <div className={`p-2 rounded-xl border ${currentStep >= 1 ? 'bg-red-50 text-red-700 border-red-300' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>
              ۱. نوع ویزا و فرمت
            </div>
            <div className={`p-2 rounded-xl border ${currentStep >= 2 ? 'bg-red-50 text-red-700 border-red-300' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>
              ۲. زمان و وکیل
            </div>
            <div className={`p-2 rounded-xl border ${currentStep >= 3 ? 'bg-red-50 text-red-700 border-red-300' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>
              ۳. اطلاعات و رزومه
            </div>
            <div className={`p-2 rounded-xl border ${currentStep >= 4 ? 'bg-red-50 text-red-700 border-red-300' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>
              ۴. پرداخت و تایید
            </div>
          </div>
        </div>

        {/* Card Container with clear border */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-md">
          
          {/* STEP 1: Select Visa & Format */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-red-600" />
                <span>گام اول: زمینه مهاجرتی و نحوه برگزاری جلسه</span>
              </h3>

              {/* Visa Type Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  دسته پرونده یا نوع ویزای مورد نظر:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'تحصیلی و دانشگاهی (Study Permit)',
                    'اکسپرس اینتری و اقامت دائم (PR)',
                    'جاب‌آفر و ویزای کاری (Work Permit)',
                    'استارتاپ ویزا و کارآفرینی',
                    'توریستی مولتیپل ۵ ساله',
                    'اسپانسری همسر و خانواده'
                  ].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVisaType(v)}
                      className={`p-3 rounded-2xl text-xs font-bold border text-right transition flex items-center justify-between ${
                        visaType === v
                          ? 'bg-white border-red-600 text-red-700 shadow-sm'
                          : 'bg-white/70 border-slate-200 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <span>{v}</span>
                      {visaType === v && <CheckCircle2 className="w-4 h-4 text-red-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Consultation Format */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  شیوه برگزاری جلسه مشاوره:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    onClick={() => setFormat('online')}
                    className={`p-4 rounded-2xl border cursor-pointer transition text-right ${
                      format === 'online'
                        ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-xs'
                        : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Video className="w-5 h-5 text-blue-600" />
                      <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        پیشنهاد ما
                      </span>
                    </div>
                    <p className="text-sm font-bold">جلسه آنلاین تصویری (Google Meet)</p>
                    <p className="text-xs text-slate-500 mt-1">بدون محدودیت جغرافیایی، ۶۰ دقیقه کامل</p>
                    <p className="text-xs font-black text-blue-700 mt-2">۱,۴۵۰,۰۰۰ تومان</p>
                  </div>

                  <div
                    onClick={() => setFormat('in_person_tehran')}
                    className={`p-4 rounded-2xl border cursor-pointer transition text-right ${
                      format === 'in_person_tehran'
                        ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-xs'
                        : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Building className="w-5 h-5 text-red-600" />
                      <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        تهران
                      </span>
                    </div>
                    <p className="text-sm font-bold">حضوری دفتر تهران (جردن)</p>
                    <p className="text-xs text-slate-500 mt-1">بررسی فیزیکی مدارک، عقد قرارداد</p>
                    <p className="text-xs font-black text-blue-700 mt-2">۱,۹۵۰,۰۰۰ تومان</p>
                  </div>

                  <div
                    onClick={() => setFormat('in_person_toronto')}
                    className={`p-4 rounded-2xl border cursor-pointer transition text-right ${
                      format === 'in_person_toronto'
                        ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-xs'
                        : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg">🇨🇦</span>
                      <span className="text-[10px] font-bold bg-red-100 text-red-800 px-2 py-0.5 rounded">
                        تورنتو
                      </span>
                    </div>
                    <p className="text-sm font-bold">حضوری دفتر تورنتو (Bay St)</p>
                    <p className="text-xs text-slate-500 mt-1">دیدار با وکیل در کانادا یا آنلاین کانادا</p>
                    <p className="text-xs font-black text-blue-700 mt-2">۷۵ دلار کانادا (~۱.۹ م ت)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition"
                >
                  <span>مرحله بعد: انتخاب زمان و مشاور</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Time & Advisor */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                <span>گام دوم: انتخاب مشاور و تقویم وقت</span>
              </h3>

              {/* Advisor Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  وکیل یا مشاور پرونده:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: 'افشین دادفر (عضو رسمی RCIC)', spec: 'پرونده‌های اکسپرس اینتری و ویزای کار فدرال' },
                    { name: 'مینا سهرابی (کارشناس ارشد پذیرش)', spec: 'پذیرش دانشگاهی، استادی پلن و بورسیه' },
                    { name: 'دکتر هومن شمس (مشاور تورنتو)', spec: 'استارتاپ ویزا، ثبت شرکت و سرمایه‌گذاری' }
                  ].map((adv) => (
                    <button
                      key={adv.name}
                      type="button"
                      onClick={() => setAdvisor(adv.name)}
                      className={`p-3.5 rounded-2xl border text-right transition ${
                        advisor === adv.name
                          ? 'bg-white border-red-600 text-red-800 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <p className="text-xs font-black">{adv.name}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{adv.spec}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    روزهای در دسترس:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['۱۴۰۵/۰۳/۱۸ (دوشنبه)', '۱۴۰۵/۰۳/۱۹ (سه‌شنبه)', '۱۴۰۵/۰۳/۲۰ (چهارشنبه)', '۱۴۰۵/۰۳/۲۲ (جمعه)'].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setSelectedDate(d)}
                        className={`p-2.5 rounded-xl border text-xs font-bold text-center transition ${
                          selectedDate === d
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    سانس ساعت مشاوره:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['۱۰:۰۰ - ۱۱:۰۰', '۱۱:۰۰ - ۱۲:۰۰', '۱۵:۰۰ - ۱۶:۰۰', '۱۷:۰۰ - ۱۸:۰۰'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`p-2.5 rounded-xl border text-xs font-bold text-center transition ${
                          selectedTime === t
                            ? 'bg-red-600 text-white border-red-600 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition"
                >
                  بازگشت
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition"
                >
                  <span>مرحله بعد: ورود مشخصات</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: User Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <User className="w-5 h-5 text-red-600" />
                <span>گام سوم: مشخصات فردی و مدارک پرونده</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    نام و نام خانوادگی متقاضی (فارسی):
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: سهراب حسینی"
                    className="w-full text-xs font-bold p-3 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    شماره موبایل جهت پیامک تایید و یادآوری:
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                    className="w-full text-xs font-bold p-3 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:border-red-500"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    آدرس ایمیل معتبر:
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full text-xs font-bold p-3 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:border-red-500"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    بارگذاری رزومه یا مدرک تحصیلی/زبان (اختیاری):
                  </label>
                  <div 
                    onClick={() => setHasResume(!hasResume)}
                    className="w-full p-2.5 rounded-xl border-2 border-dashed border-slate-300 hover:border-red-400 bg-white text-center cursor-pointer text-xs transition"
                  >
                    {hasResume ? (
                      <span className="text-emerald-700 font-bold flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> فایل رزومه (CV_Resume.pdf) بارگذاری شد
                      </span>
                    ) : (
                      <span className="text-slate-500">
                        کلیک برای انتخاب فایل رزومه (PDF یا Word)
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  توضیحات کوتاه یا سوال مشخص درباره پرونده:
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="در صورت داشتن سابقه رد شدن ویزا یا شرایط خاص ذکر بفرمایید..."
                  className="w-full text-xs p-3 rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-hidden focus:border-red-500 font-medium"
                ></textarea>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition"
                >
                  بازگشت
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition"
                >
                  <span>مرحله بعد: پیش‌فاکتور و پرداخت</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Checkout & Payment Simulation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-red-600" />
                <span>گام چهارم: پیش‌فاکتور و درگاه پرداخت آنلاین</span>
              </h3>

              {/* Order Summary Box */}
              <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-xs space-y-3">
                <div className="flex justify-between items-center text-xs text-slate-600 pb-2 border-b border-slate-100">
                  <span>نوع ویزا و پرونده:</span>
                  <span className="font-bold text-slate-900">{visaType}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-600 pb-2 border-b border-slate-100">
                  <span>وکیل مسئول:</span>
                  <span className="font-bold text-slate-900">{advisor}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-600 pb-2 border-b border-slate-100">
                  <span>تاریخ و زمان نوبت:</span>
                  <span className="font-bold text-slate-900">{selectedDate} - ساعت {selectedTime}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-600 pb-2 border-b border-slate-100">
                  <span>نام متقاضی:</span>
                  <span className="font-bold text-slate-900">{fullName || 'متقاضی محترم'}</span>
                </div>

                {/* Discount Code */}
                <div className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      placeholder="کد تخفیف (مثال: canada2026)"
                      className="text-xs p-2.5 rounded-xl border border-slate-300 flex-1 bg-slate-50 font-mono"
                      dir="ltr"
                    />
                    <button
                      type="button"
                      onClick={handleApplyDiscount}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition"
                    >
                      اعمال کد
                    </button>
                  </div>
                  {discountApplied && (
                    <p className="text-[11px] text-emerald-600 font-bold mt-1">
                      ✓ تخفیف ۱۵ درصدی ویژه با موفقیت اعمال گردید.
                    </p>
                  )}
                </div>

                {/* Final Price */}
                <div className="flex justify-between items-center text-sm font-black pt-3 border-t-2 border-slate-200">
                  <span className="text-slate-900">مبلغ قابل پرداخت:</span>
                  <span className="text-red-600 text-lg font-['Vazirmatn']">
                    {finalFee.toLocaleString('fa-IR')} تومان
                  </span>
                </div>
              </div>

              {/* Gateway Selection */}
              <div className="p-4 bg-slate-100 rounded-2xl border border-slate-300 flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>اتصال امن به درگاه پرداخت رسمی شتاب (شاپرک) / کارت‌های بین‌المللی</span>
                </div>
                <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-bold">
                  SSL Encrypted
                </span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition"
                >
                  بازگشت
                </button>
                <button
                  type="button"
                  disabled={isProcessingPay}
                  onClick={handleProcessPayment}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-sm flex items-center gap-2 shadow-lg transition active:scale-98"
                >
                  {isProcessingPay ? (
                    <span>در حال اتصال به شاپرک و تایید...</span>
                  ) : (
                    <>
                      <span>پرداخت آنلاین و ثبت قطعی نوبت</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Success Receipt */}
          {currentStep === 5 && confirmedBooking && (
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  رزرو وقت مشاوره با موفقیت ثبت شد! 🍁
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  پیامک و ایمیل تاییدیه حاوی لینک اختصاصی جلسه به شماره شما ارسال گردید.
                </p>
              </div>

              {/* Receipt Ticket */}
              <div className="bg-white max-w-md mx-auto p-6 rounded-3xl border-2 border-emerald-300 shadow-md text-right space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-xs text-slate-500">کد رهگیری پرونده:</span>
                  <span className="text-sm font-black font-mono text-red-600" dir="ltr">
                    {confirmedBooking.trackingCode}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-600">
                  <span>نام متقاضی:</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.fullName}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-600">
                  <span>وکیل پاسخگو:</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.advisor}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-600">
                  <span>تاریخ و زمان نوبت:</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.date} - ساعت {confirmedBooking.timeSlot}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <span>مبلغ پرداخت شده:</span>
                  <span className="font-extrabold text-emerald-700">
                    {confirmedBooking.fee.toLocaleString('fa-IR')} تومان (موفق)
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentStep(1);
                    setConfirmedBooking(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition"
                >
                  ثبت رزرو وقت دیگر
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
