import { ServiceItem, Booking, BlogPost, Testimonial, FaqItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'study-permit',
    title: 'ویزای تحصیلی و پذیرش دانشگاهی',
    category: 'study',
    shortDesc: 'اخذ پذیرش از معتبرترین دانشگاه‌ها و کالج‌های کانادا (DLI) به همراه Study Permit و اجازه کار دانشجویی.',
    duration: '۴ تا ۸ هفته',
    feeFrom: 'از ۱,۲۰۰ دلار کانادا',
    requirements: ['مدرک زبان (IELTS/TOEFL/Duolingo)', 'تمکن مالی معتبر', 'انگیزه‌نامه و رزومه آکادمیک'],
    icon: 'GraduationCap',
    badge: 'پرمتقاضی‌ترین',
    accentColor: 'blue',
    popular: true
  },
  {
    id: 'express-entry',
    title: 'اکسپرس اینتری و اسکیلد ورکر',
    category: 'express_entry',
    shortDesc: 'اقامت دائم کانادا از طریق فدرال اسکیلد ورکر (FSW) و تجربه کانادایی (CEC) با حداکثر امتیاز سیستم CRS.',
    duration: '۶ تا ۹ ماه',
    feeFrom: 'از ۲,۵۰۰ دلار کانادا',
    requirements: ['حداقل ۳ سال سابقه کار تخصصی', 'نمره زبان CLB 7+', 'معادلسازی مدارک در WES'],
    icon: 'Award',
    badge: 'اقامت دائم مستقیم (PR)',
    accentColor: 'indigo',
    popular: true
  },
  {
    id: 'work-permit',
    title: 'ویزای کاری و جاب آفر کانادا',
    category: 'work',
    shortDesc: 'دریافت مجوز کار بسته یا باز (Open/Closed Work Permit) تحت برنامه‌های LMIA و جاب‌آفر کارفرمایان تاییدشده.',
    duration: '۲ تا ۵ ماه',
    feeFrom: 'از ۱,۸۰۰ دلار کانادا',
    requirements: ['پیشنهاد شغلی رسمی LMIA', 'انطباق تجارب با ناک شغلی (NOC)', 'سلامت پزشکی و گواهی عدم سوء‌پیشینه'],
    icon: 'Briefcase',
    badge: 'ورود به بازار کار',
    accentColor: 'emerald'
  },
  {
    id: 'visitor-visa',
    title: 'ویزای توریستی و مولتیپل ۵ ساله',
    category: 'tourist',
    shortDesc: 'سفرهای توریستی، شرکت در سمینارها و همایش‌ها، و دیدار بستگان با امکان تمدید و تبدیل به ویزای کار در شرایط ویژه.',
    duration: '۳ تا ۶ هفته',
    feeFrom: 'از ۸۵۰ دلار کانادا',
    requirements: ['تاریخچه سفر قوی (Travel History)', 'پیوندهای مالی و عاطفی به کشور مبدا', 'برنامه سفر مدون'],
    icon: 'Plane',
    badge: 'مولتیپل معتبر',
    accentColor: 'rose'
  },
  {
    id: 'startup-visa',
    title: 'استارتاپ ویزا و کارآفرینی کانادا',
    category: 'investment',
    shortDesc: 'جذب سرمایه و دریافت نامه حمایتی (Support Letter) از انکوباتورها و فرشتگان سرمایه‌گذار جهت اقامت دائم کل اعضای تیم.',
    duration: '۱۲ تا ۱۸ ماه',
    feeFrom: 'از ۴,۹۰۰ دلار کانادا',
    requirements: ['طرح تجاری نوآورانه (Business Plan)', 'سطح زبان CLB 5+', 'سرمایه کافی جهت راه‌اندازی استارتاپ'],
    icon: 'Rocket',
    badge: 'سرمایه‌گذاری نوآورانه',
    accentColor: 'amber'
  },
  {
    id: 'family-sponsorship',
    title: 'اسپانسری همسر و سوپرویزای والدین',
    category: 'family',
    shortDesc: 'پیوستن همسر، فرزندان و دریافت سوپرویزای ۱۰ ساله والدین با اقامت ۵ ساله در هر بار ورود به خاک کانادا.',
    duration: '۶ تا ۱۲ ماه',
    feeFrom: 'از ۱,۱۰۰ دلار کانادا',
    requirements: ['شهروندی یا اقامت دائم حامی', 'بیمه پزشکی کانادایی برای والدین', 'اثبات تمکن مالی و رابطه خانوادگی'],
    icon: 'HeartHandshake',
    badge: 'الحاق به خانواده',
    accentColor: 'sky'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'BK-1049',
    trackingCode: 'CA-94821',
    fullName: 'دکتر علیرضا کاظمی',
    phone: '۰۹۱۲۴۵۶۷۸۹۰',
    email: 'a.kazemi@gmail.com',
    visaType: 'اکسپرس اینتری (CRS)',
    consultationType: 'online',
    date: '۱۴۰۵/۰۳/۱۵',
    timeSlot: '۱۰:۳۰ - ۱۱:۳۰',
    advisor: 'افشین دادفر (عضو رسمی RCIC)',
    fee: 1450000,
    status: 'confirmed',
    notes: 'بررسی مجدد امتیازات CRS زبان فرانسه و سابقه پژوهشی',
    createdAt: '۲ ساعت پیش'
  },
  {
    id: 'BK-1048',
    trackingCode: 'CA-88319',
    fullName: 'مهندس سارا محمودی',
    phone: '۰۹۱۸۹۸۷۶۵۴۳',
    email: 'sara.mahmoudi.dev@yahoo.com',
    visaType: 'ویزای تحصیلی (Master CS)',
    consultationType: 'in_person_tehran',
    date: '۱۴۰۵/۰۳/۱۶',
    timeSlot: '۱۵:۰۰ - ۱۶:۰۰',
    advisor: 'مینا سهرابی (کارشناس ارشد پذیرش)',
    fee: 1800000,
    status: 'pending',
    notes: 'پذیرش از دانشگاه مک‌گیل با فاند نسبی، نیاز به نگارش استادی پلن',
    createdAt: 'دیروز'
  },
  {
    id: 'BK-1047',
    trackingCode: 'CA-77124',
    fullName: 'کامران رسولی',
    phone: '۰۹۳۵۱۲۳۴۵۶۷',
    email: 'k.rasooli@outlook.com',
    visaType: 'استارتاپ ویزا (SUV)',
    consultationType: 'online',
    date: '۱۴۰۵/۰۳/۱۴',
    timeSlot: '۱۷:۰۰ - ۱۸:۰۰',
    advisor: 'دکتر هومن شمس (مشاور سرمایه‌گذاری تورنتو)',
    fee: 2500000,
    status: 'confirmed',
    notes: 'طرح استارتاپ حوزه هوش مصنوعی و تجهیزات پزشکی',
    createdAt: '۲ روز پیش'
  },
  {
    id: 'BK-1046',
    trackingCode: 'CA-66519',
    fullName: 'زهرا نیکزاد',
    phone: '۰۹۳۶۷۷۷۸۸۹۹',
    email: 'zahra.nikzad@gmail.com',
    visaType: 'ویزای توریستی مولتیپل',
    consultationType: 'phone',
    date: '۱۴۰۵/۰۳/۱۲',
    timeSlot: '۱۱:۰۰ - ۱۱:۳۰',
    advisor: 'مینا سهرابی',
    fee: 950000,
    status: 'completed',
    notes: 'بررسی مدارک بیومتریک و انگشت‌نگاری در آنکارا',
    createdAt: '۳ روز پیش'
  },
  {
    id: 'BK-1045',
    trackingCode: 'CA-55018',
    fullName: 'امیرحسین پارسا',
    phone: '۰۹۱۲۳۴۵۶۷۱۲',
    email: 'parsa.amir@info.ir',
    visaType: 'جاب آفر و ویزای کاری',
    consultationType: 'in_person_toronto',
    date: '۱۴۰۵/۰۳/۱۰',
    timeSlot: '۱۴:۰۰ - ۱۵:۰۰',
    advisor: 'افشین دادفر (RCIC)',
    fee: 1900000,
    status: 'on_hold',
    notes: 'منتظر استعلام تاییدیه LMIA از کارفرمای بریتیش کلمبیا',
    createdAt: '۴ روز پیش'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'تغییرات اساسی قوانین پذیرش تحصیلی و ویزای کار پس از تحصیل (PGWP) در ۲۰۲۶',
    excerpt: 'اداره مهاجرت، پناهندگی و شهروندی کانادا (IRCC) جزئیات جدیدی از ظرفیت دانشجویان بین‌المللی و تغییر لیست رشته‌های واجد شرایط اعلام کرد.',
    content: 'بر اساس آخرین بخشنامه صادر شده توسط وزیر مهاجرت کانادا، از این پس تنها فارغ‌التحصیلانی که در رشته‌های دارای کمبود نیروی کار استانی (نظیر بهداشت و درمان، فناوری اطلاعات، علوم مهندسی و کشاورزی مدرن) تحصیل کرده باشند از حداکثر زمان ویزای کار باز پس از فراغت از تحصیل برخوردار خواهند شد. کارشناسان آپادانا ویزا توصیه می‌کنند...',
    category: 'قوانین و بخشنامه‌ها',
    date: '۲۲ اردیبهشت ۱۴۰۵',
    author: 'افشین دادفر (عضو رسمی RCIC)',
    readTime: '۶ دقیقه',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    isPublished: true
  },
  {
    id: 'post-2',
    title: 'تحلیل دراوهای اخیر اکسپرس اینتری و راهکارهای افزایش ۵۰ امتیازی در سیستم CRS',
    excerpt: 'با توجه به رقابت بالا در سیستم رتبه‌بندی جامع، یادگیری زبان دوم و ارتقای مهارت‌های استانی چگونه شما را در اولویت دعوت‌نامه قرار می‌دهد؟',
    content: 'در دراو شماره ۳۱۵ اکسپرس اینتری، نمره قبولی در دسته‌بندی عمومی به بالاتر از ۵۰۰ امتیاز رسید. اما داوطلبانی که دارای مهارت زبان فرانسوی در سطح NCLC 7 بودند، توانستند با نمرات بسیار پایین‌تر دعوت‌نامه ITA دریافت کنند...',
    category: 'اکسپرس اینتری',
    date: '۱۸ اردیبهشت ۱۴۰۵',
    author: 'دکتر هومن شمس',
    readTime: '۴ دقیقه',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    isPublished: true
  },
  {
    id: 'post-3',
    title: 'راهنمای گام به گام وقت انگشت‌نگاری (Biometrics) در مراکز VAC استانبول و دبی',
    excerpt: 'نکات کلیدی برای مصاحبه، آماده‌سازی مدارک و پیشگیری از هرگونه تاخیر در بررسی مدارک بیومتریک ویزای کانادا.',
    content: 'پس از سابمیت پرونده در پورتال IRCC، متقاضیان ۳۰ روز فرصت دارند تا به یکی از مراکز VAC در کشورهای همسایه مراجعه کنند. در این مقاله چک‌لیست کامل وسایل ضروری و زمان‌بندی بررسی گذرنامه تشریح شده است...',
    category: 'ویزای توریستی',
    date: '۱۰ اردیبهشت ۱۴۰۵',
    author: 'مینا سهرابی',
    readTime: '۵ دقیقه',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    isPublished: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'مهندس نوید فرهمند',
    destination: 'ونکوور، بریتیش کلمبیا 🇨🇦',
    visaType: 'اکسپرس اینتری (اقامت دائم PR)',
    year: 'بهمن ۱۴۰۴',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'با وجود داشتن دو فرزند و سن ۳۶ سال، تیم آپادانا ویزا با استراتژی دقیق برنامه‌های استانی BC PNP پرونده ما را ظرف کمتر از ۸ ماه به پی‌آر رساندند. پاسخگویی وکیل رسمی پرونده آقای دادفر مثال‌زدنی بود.',
    rating: 5,
    videoPreview: true
  },
  {
    id: 'test-2',
    name: 'شادی کمالی',
    destination: 'تورنتو، انتاریو 🇨🇦',
    visaType: 'ویزای تحصیلی دانشگاه تورنتو (U of T)',
    year: 'فروردین ۱۴۰۵',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    comment: 'بعد از یک ریجکتی در آژانس قبلی، نگارش استادی پلن فوق‌العاده تخصصی کارشناسان آپادانا باعث شد ویزای تحصیلی من در عرض ۲۴ روز کاری بدون نقص و با تاییدیه فول‌اسکالرشیپ تایید شود.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'آرش و پریسا سعادت',
    destination: 'کلگری، آلبرتا 🇨🇦',
    visaType: 'استارتاپ ویزا و ویزای کار همسر',
    year: 'اسفند ۱۴۰۴',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'پیدا کردن انکوباتور معتبر برای ایده نرم‌افزاری ما سخت‌ترین مرحله بود. آپادانا ویزا با روابط مستقیم تجاری در تورنتو، موفق به دریافت Letter of Support ظرف مدت ۴ ماه شدند.',
    rating: 5,
    videoPreview: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'آیا برای عقد قرارداد نیاز به وکیل رسمی مهاجرت کانادا (RCIC) است؟',
    answer: 'بله، طبق قوانین رسمی دولت کانادا (College of Immigration and Citizenship Consultants - CICC)، تنها وکلای دارای شماره ثبت معتبر RCIC و اعضای کانون وکلای استانی کانادا مجاز به دریافت وجه و ارائه مشاوره حقوقی مهاجرتی هستند. تمامی قراردادهای آپادانا ویزا تحت نظارت مستقیم وکلای رجیسترشده رسمی منعقد می‌گردد.',
    category: 'قوانین و قرارداد'
  },
  {
    id: 'faq-2',
    question: 'مدت زمان دریافت ویزای تحصیلی چقدر است و آیا امکان بردن همراه وجود دارد؟',
    answer: 'مدت زمان رسیدگی بسته به زمان سابمیت پرونده بین ۴ تا ۱۰ هفته به طول می‌انجامد. همسر دانشجو واجد شرایط دریافت Open Work Permit (اجازه کار تمام‌وقت) و فرزندان زیر ۱۸ سال واجد شرایط تحصیل رایگان در مدارس دولتی کانادا خواهند بود.',
    category: 'تحصیلی'
  },
  {
    id: 'faq-3',
    question: 'شرایط تبدیل ویزای توریستی به ویزای کاری در داخل خاک کانادا چیست؟',
    answer: 'دارندگان ویزای توریستی در صورت یافتن پیشنهاد شغلی معتبر (LMIA دار یا معاف از LMIA) از یک کارفرمای کانادایی، طبق دستورالعمل‌های موقت می‌توانند بدون نیاز به خروج از خاک کانادا برای دریافت مجوز کار اقدام نمایند.',
    category: 'توریستی و کاری'
  },
  {
    id: 'faq-4',
    question: 'هزینه ارزیابی اولیه پرونده در آپادانا ویزا چقدر است؟',
    answer: 'فرم ارزیابی اولیه آنلاین در وب‌سایت کاملاً رایگان است. پس از تکمیل، کارشناسان ما امتیاز و شانس پرونده شما را به صورت اولیه بررسی کرده و در صورت مثبت بودن شرایط، وقت جلسه مشاوره تخصصی با وکیل تنظیم می‌گردد.',
    category: 'مشاوره'
  }
];

export const STATS = [
  { label: 'نرخ موفقیت پرونده‌ها', value: '۹۸.۴٪', sub: 'بالاترین نرخ صدور ویزا در سال گذشته', icon: 'CheckCircle2', color: 'emerald' },
  { label: 'ویزای اخذ شده در کانادا', value: '۲,۸۵۰+', sub: 'تحصیلی، کاری، اقامت دائم و توریستی', icon: 'Passport', color: 'blue' },
  { label: 'سال سابقه رسمی بین‌المللی', value: '۱۴ سال', sub: 'دفاتر فعال در تهران و تورنتو', icon: 'ShieldCheck', color: 'indigo' },
  { label: 'وکلای عضو رسمی CICC / RCIC', value: '۶ وکیل', sub: 'شماره ثبت معتبر لایسنس دولت فدرال', icon: 'Scale', color: 'rose' }
];
