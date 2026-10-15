import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  ArrowRight, 
  Search, 
  Plus, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  DollarSign, 
  TrendingUp, 
  Filter, 
  Eye, 
  Trash2, 
  Edit3, 
  Save, 
  Building2, 
  PhoneCall, 
  Mail,
  ShieldCheck,
  Check,
  X
} from 'lucide-react';
import { Booking, BlogPost, BookingStatus } from '../../types';

interface AdminPanelProps {
  bookings: Booking[];
  onUpdateBookingStatus: (id: string, status: BookingStatus) => void;
  blogPosts: BlogPost[];
  onAddNewBlogPost: (post: BlogPost) => void;
  onDeleteBlogPost: (id: string) => void;
  onNavigateBackToSite: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  bookings,
  onUpdateBookingStatus,
  blogPosts,
  onAddNewBlogPost,
  onDeleteBlogPost,
  onNavigateBackToSite
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'bookings' | 'cms' | 'settings'>('dashboard');
  
  // Bookings filter
  const [bookingSearch, setBookingSearch] = useState('');
  const [bookingStatusFilter, setBookingStatusFilter] = useState<string>('all');
  const [selectedBookingDetails, setSelectedBookingDetails] = useState<Booking | null>(null);

  // CMS modal state
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('بخشنامه‌ها');
  const [newPostExcerpt, setNewPostExcerpt] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  // Settings state
  const [torontoPhone, setTorontoPhone] = useState('+1 (416) 555-0199');
  const [tehranPhone, setTehranPhone] = useState('+98 (21) 8899-0011');
  const [onlineFee, setOnlineFee] = useState('1450000');
  const [settingsSavedToast, setSettingsSavedToast] = useState(false);

  // Filtered bookings
  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.fullName.includes(bookingSearch) || b.trackingCode.includes(bookingSearch) || b.visaType.includes(bookingSearch);
    const matchesStatus = bookingStatusFilter === 'all' || b.status === bookingStatusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSaveNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle) return;

    const newPost: BlogPost = {
      id: 'post-' + Date.now(),
      title: newPostTitle,
      category: newPostCategory,
      excerpt: newPostExcerpt || 'خلاصه خبر جدید درباره مهاجرت کانادا...',
      content: newPostContent || 'متن کامل بخشنامه اداره مهاجرت...',
      date: 'امروز',
      author: 'مدیر سامانه (RCIC)',
      readTime: '۴ دقیقه',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80',
      isPublished: true
    };

    onAddNewBlogPost(newPost);
    setIsAddPostModalOpen(false);
    setNewPostTitle('');
    setNewPostExcerpt('');
    setNewPostContent('');
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSavedToast(true);
    setTimeout(() => setSettingsSavedToast(false), 3000);
  };

  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case 'confirmed':
        return <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-300">تایید شده</span>;
      case 'pending':
        return <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-amber-100 text-amber-800 border border-amber-300">در دست بررسی</span>;
      case 'on_hold':
        return <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-blue-100 text-blue-800 border border-blue-300">معلق / استعلام</span>;
      case 'completed':
        return <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-slate-200 text-slate-800 border border-slate-300">برگزار شده</span>;
      default:
        return <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-rose-100 text-rose-800 border border-rose-300">لغو شده</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row text-right">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-white shrink-0 border-l border-slate-800 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-xl shadow-md">
                🍁
              </div>
              <div>
                <h2 className="text-base font-black font-['Vazirmatn']">پنل مدیریت</h2>
                <p className="text-[10px] text-slate-400">آپادانا ویزا کانادا</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5 text-xs font-bold">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeTab === 'dashboard' 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>داشبورد و آمار کلی</span>
            </button>

            <button
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition ${
                activeTab === 'bookings' 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4" />
                <span>مدیریت رزروها و پرونده‌ها</span>
              </div>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-300 border border-slate-700">
                {bookings.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('cms')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition ${
                activeTab === 'cms' 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4" />
                <span>مدیریت محتوا و وبلاگ (CMS)</span>
              </div>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-300 border border-slate-700">
                {blogPosts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeTab === 'settings' 
                  ? 'bg-red-600 text-white shadow-md' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>تنظیمات عمومی و دفاتر</span>
            </button>
          </nav>
        </div>

        {/* Back to Website button at bottom */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={onNavigateBackToSite}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition border border-slate-700"
          >
            <span>مشاهده و بازگشت به سایت</span>
            <ArrowRight className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        
        {/* Top Header of Admin */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-300">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              {activeTab === 'dashboard' && 'داشبورد مدیریت و شاخص‌های کلیدی'}
              {activeTab === 'bookings' && 'لیست رزروها و متقاضیان مشاوره'}
              {activeTab === 'cms' && 'سیستم مدیریت مقالات و اخبار (CMS)'}
              {activeTab === 'settings' && 'تنظیمات عمومی و تعرفه‌ها'}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              پلتفرم یکپارچه مدیریت پرونده‌های مهاجرتی کانادا • کاربر: ادمین ارشد (RCIC Manager)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold bg-white border border-slate-300 px-3 py-1.5 rounded-xl text-slate-700 shadow-xs">
              امروز: پنجشنبه ۲۴ اردیبهشت ۱۴۰۵
            </span>
          </div>
        </div>

        {/* 1. DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Stat Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500">مجموع رزروها</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-2xl font-black text-slate-900 font-['Vazirmatn']">{bookings.length} پرونده</p>
                <p className="text-[11px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +۱۸٪ رشد نسبت به ماه قبل
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500">نوبت‌های امروز</span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-2xl font-black text-slate-900 font-['Vazirmatn']">۴ جلسه</p>
                <p className="text-[11px] text-slate-500 font-medium mt-1">۲ آنلاین، ۲ حضوری تهران</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500">درآمد مشاوره‌ها</span>
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <DollarSign className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-2xl font-black text-slate-900 font-['Vazirmatn']">۸,۶۵۰,۰۰۰ <span className="text-xs font-normal">تومان</span></p>
                <p className="text-[11px] text-emerald-600 font-bold mt-1">تسویه‌شده از طریق درگاه شتاب</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500">وضعیت پرونده‌ها</span>
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-red-700 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-2xl font-black text-slate-900 font-['Vazirmatn']">۹۸.۴٪ موفقیت</p>
                <p className="text-[11px] text-slate-500 font-medium mt-1">تاییدیه سفارت کانادا</p>
              </div>
            </div>

            {/* Quick Consultation Table */}
            <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                <h3 className="text-base font-black text-slate-900">آخرین درخواست‌های ثبت‌شده</h3>
                <button
                  onClick={() => setActiveTab('bookings')}
                  className="text-xs font-bold text-red-600 hover:text-red-700"
                >
                  مشاهده همه متقاضیان →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-right">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 pb-2">
                      <th className="py-2.5 font-bold">کد پیگیری</th>
                      <th className="py-2.5 font-bold">نام متقاضی</th>
                      <th className="py-2.5 font-bold">نوع ویزا</th>
                      <th className="py-2.5 font-bold">تاریخ و ساعت</th>
                      <th className="py-2.5 font-bold">وضعیت</th>
                      <th className="py-2.5 font-bold">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {bookings.slice(0, 4).map((b) => (
                      <tr key={b.id} className="hover:bg-slate-50">
                        <td className="py-3 font-mono font-bold text-red-600" dir="ltr">{b.trackingCode}</td>
                        <td className="py-3 font-bold text-slate-900">{b.fullName}</td>
                        <td className="py-3 text-slate-600">{b.visaType}</td>
                        <td className="py-3 text-slate-500">{b.date} ({b.timeSlot})</td>
                        <td className="py-3">{getStatusBadge(b.status)}</td>
                        <td className="py-3">
                          <button
                            onClick={() => setSelectedBookingDetails(b)}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
                            title="مشاهده جزئیات"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 2. BOOKINGS TAB */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  value={bookingSearch}
                  onChange={(e) => setBookingSearch(e.target.value)}
                  placeholder="جستجو با نام، کد یا نوع ویزا..."
                  className="w-full text-xs p-2.5 pr-8 rounded-xl border border-slate-300 bg-slate-50"
                />
                <Search className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5" />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
                <span className="text-xs text-slate-500 font-bold ml-1">فیلتر وضعیت:</span>
                {[
                  { id: 'all', label: 'همه' },
                  { id: 'confirmed', label: 'تایید شده' },
                  { id: 'pending', label: 'در دست بررسی' },
                  { id: 'on_hold', label: 'معلق' },
                  { id: 'completed', label: 'برگزار شده' }
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setBookingStatusFilter(st.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                      bookingStatusFilter === st.id
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Comprehensive Table */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-right">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                    <tr>
                      <th className="p-4 font-bold">کد پیگیری</th>
                      <th className="p-4 font-bold">نام متقاضی</th>
                      <th className="p-4 font-bold">نوع ویزا</th>
                      <th className="p-4 font-bold">شیوه جلسه</th>
                      <th className="p-4 font-bold">زمان نوبت</th>
                      <th className="p-4 font-bold">مبلغ</th>
                      <th className="p-4 font-bold">وضعیت پرونده</th>
                      <th className="p-4 font-bold">تغییر وضعیت</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-slate-50/80">
                        <td className="p-4 font-mono font-bold text-red-600" dir="ltr">{b.trackingCode}</td>
                        <td className="p-4">
                          <p className="font-bold text-slate-900">{b.fullName}</p>
                          <p className="text-[10px] text-slate-400 font-mono" dir="ltr">{b.phone}</p>
                        </td>
                        <td className="p-4 font-medium text-slate-700">{b.visaType}</td>
                        <td className="p-4 text-slate-600">
                          {b.consultationType === 'online' ? 'آنلاین تصویری' :
                           b.consultationType === 'in_person_tehran' ? 'حضوری تهران' :
                           b.consultationType === 'in_person_toronto' ? 'حضوری تورنتو' : 'تلفنی'}
                        </td>
                        <td className="p-4 text-slate-600">
                          <p>{b.date}</p>
                          <p className="text-[10px] text-slate-400">{b.timeSlot}</p>
                        </td>
                        <td className="p-4 font-bold text-slate-800">
                          {b.fee.toLocaleString('fa-IR')} ت
                        </td>
                        <td className="p-4">{getStatusBadge(b.status)}</td>
                        <td className="p-4">
                          <select
                            value={b.status}
                            onChange={(e) => onUpdateBookingStatus(b.id, e.target.value as BookingStatus)}
                            className="text-[11px] font-bold p-1.5 rounded-lg border border-slate-300 bg-white"
                          >
                            <option value="pending">در دست بررسی</option>
                            <option value="confirmed">تایید نهایی</option>
                            <option value="on_hold">معلق / مدارک ناقص</option>
                            <option value="completed">برگزار شد</option>
                            <option value="cancelled">لغو نوبت</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 3. CMS TAB */}
        {activeTab === 'cms' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900">مدیریت مقالات و بخشنامه‌های وب‌سایت</h3>
                <p className="text-xs text-slate-500">انتشار و اصلاح آسان بدون نیاز به کدنویسی</p>
              </div>
              <button
                onClick={() => setIsAddPostModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>افزودن مقاله جدید</span>
              </button>
            </div>

            {/* Articles Table */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xs overflow-hidden">
              <table className="w-full text-xs text-right">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                  <tr>
                    <th className="p-4 font-bold">تصویر</th>
                    <th className="p-4 font-bold">عنوان مقاله</th>
                    <th className="p-4 font-bold">دسته‌بندی</th>
                    <th className="p-4 font-bold">نویسنده</th>
                    <th className="p-4 font-bold">تاریخ</th>
                    <th className="p-4 font-bold">عملیات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {blogPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-slate-50">
                      <td className="p-4">
                        <img src={post.image} alt={post.title} className="w-12 h-12 rounded-xl object-cover" />
                      </td>
                      <td className="p-4 font-bold text-slate-900 max-w-xs">{post.title}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold">
                          {post.category}
                        </span>
                      </td>
                      <td className="p-4 text-slate-600">{post.author}</td>
                      <td className="p-4 text-slate-500">{post.date}</td>
                      <td className="p-4">
                        <button
                          onClick={() => onDeleteBlogPost(post.id)}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition"
                          title="حذف مقاله"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal for adding article */}
            {isAddPostModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
                <div className="bg-white rounded-3xl max-w-lg w-full p-6 border border-slate-200 shadow-2xl relative text-right">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <h4 className="text-base font-black text-slate-900">ایجاد و انتشار مقاله جدید</h4>
                    <button onClick={() => setIsAddPostModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSaveNewPost} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">عنوان مقاله:</label>
                      <input
                        type="text"
                        required
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        placeholder="مثال: آخرین دراو اکسپرس اینتری و حداقل نمره قبولی"
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">دسته‌بندی:</label>
                      <select
                        value={newPostCategory}
                        onChange={(e) => setNewPostCategory(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
                      >
                        <option value="قوانین و بخشنامه‌ها">قوانین و بخشنامه‌ها</option>
                        <option value="اکسپرس اینتری">اکسپرس اینتری</option>
                        <option value="ویزای تحصیلی">ویزای تحصیلی</option>
                        <option value="ویزای کاری">ویزای کاری</option>
                        <option value="استارتاپ و سرمایه‌گذاری">استارتاپ و سرمایه‌گذاری</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">خلاصه کوتاه:</label>
                      <textarea
                        rows={2}
                        value={newPostExcerpt}
                        onChange={(e) => setNewPostExcerpt(e.target.value)}
                        placeholder="چکیده کوتاه مقاله جهت نمایش در کارت..."
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">متن کامل مقاله:</label>
                      <textarea
                        rows={4}
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        placeholder="متن کامل خبر، بندهای قانونی و توصیه‌ها..."
                        className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setIsAddPostModalOpen(false)}
                        className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                      >
                        انصراف
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-sm"
                      >
                        انتشار در وب‌سایت
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. SETTINGS TAB */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-xs">
            <h3 className="text-base font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">
              تنظیمات عمومی دفاتر و قیمت‌گذاری مشاوره‌ها
            </h3>

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">شماره تماس دفتر تورنتو 🇨🇦:</label>
                  <input
                    type="text"
                    value={torontoPhone}
                    onChange={(e) => setTorontoPhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">شماره تماس دفتر تهران 🇮🇷:</label>
                  <input
                    type="text"
                    value={tehranPhone}
                    onChange={(e) => setTehranPhone(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">تعرفه پایه جلسه مشاوره آنلاین (تومان):</label>
                <input
                  type="text"
                  value={onlineFee}
                  onChange={(e) => setOnlineFee(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                <p className="text-xs font-bold text-slate-800 mb-1">وضعیت لایسنس مشاور رسمی (RCIC):</p>
                <p className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> شماره ثبت #R532891 فعال و استعلام‌شده در CICC
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 shadow-sm transition"
                >
                  <Save className="w-4 h-4" />
                  <span>ذخیره تغییرات</span>
                </button>

                {settingsSavedToast && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-1 animate-in fade-in">
                    <Check className="w-4 h-4" /> تنظیمات با موفقیت ذخیره گردید.
                  </span>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Booking Details Modal */}
        {selectedBookingDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-slate-200 shadow-2xl relative text-right">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <h4 className="text-base font-black text-slate-900">اطلاعات پرونده: {selectedBookingDetails.trackingCode}</h4>
                <button onClick={() => setSelectedBookingDetails(null)} className="text-slate-400 hover:text-slate-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <p><strong>متقاضی:</strong> {selectedBookingDetails.fullName}</p>
                <p><strong>شماره تماس:</strong> <span dir="ltr">{selectedBookingDetails.phone}</span></p>
                <p><strong>ایمیل:</strong> <span dir="ltr">{selectedBookingDetails.email}</span></p>
                <p><strong>نوع ویزا:</strong> {selectedBookingDetails.visaType}</p>
                <p><strong>مشاور مسئول:</strong> {selectedBookingDetails.advisor}</p>
                <p><strong>زمان جلسه:</strong> {selectedBookingDetails.date} ({selectedBookingDetails.timeSlot})</p>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-800 mb-1">یادداشت متقاضی:</p>
                  <p>{selectedBookingDetails.notes || 'توضیحات خاصی ثبت نشده است.'}</p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedBookingDetails(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold"
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
