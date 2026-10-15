export type VisaCategory = 'study' | 'work' | 'express_entry' | 'tourist' | 'investment' | 'family';

export interface ServiceItem {
  id: string;
  title: string;
  category: VisaCategory;
  shortDesc: string;
  duration: string;
  feeFrom: string;
  requirements: string[];
  icon: string;
  badge: string;
  accentColor: string;
  popular?: boolean;
}

export type BookingStatus = 'pending' | 'confirmed' | 'on_hold' | 'completed' | 'cancelled';

export interface Booking {
  id: string;
  trackingCode: string;
  fullName: string;
  phone: string;
  email: string;
  visaType: string;
  consultationType: 'online' | 'phone' | 'in_person_tehran' | 'in_person_toronto';
  date: string;
  timeSlot: string;
  advisor: string;
  fee: number;
  status: BookingStatus;
  notes?: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  isPublished: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  destination: string;
  visaType: string;
  year: string;
  avatar: string;
  comment: string;
  rating: number;
  videoPreview?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
