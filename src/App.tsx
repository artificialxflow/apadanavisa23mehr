import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ServicesSection } from './components/ServicesSection';
import { QuickAssessmentModal } from './components/QuickAssessmentModal';
import { BookingSection } from './components/BookingSection';
import { BlogSection } from './components/BlogSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/admin/AdminPanel';
import { INITIAL_BOOKINGS, BLOG_POSTS } from './data/mockData';
import { Booking, BlogPost, BookingStatus, ServiceItem } from './types';
import { LayoutDashboard, Globe, Sparkles } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'admin'>('landing');
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);

  const handleOpenBooking = () => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
    }
    setTimeout(() => {
      const el = document.getElementById('booking-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleOpenAssessment = () => {
    setIsAssessmentOpen(true);
  };

  const handleNewBookingCreated = (newBooking: Booking) => {
    setBookings(prev => [newBooking, ...prev]);
  };

  const handleUpdateBookingStatus = (id: string, status: BookingStatus) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  const handleAddNewBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => [post, ...prev]);
  };

  const handleDeleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Vazirmatn',sans-serif] selection:bg-red-600 selection:text-white">
      {/* If in Landing View */}
      {currentView === 'landing' ? (
        <>
          <Navbar
            currentView={currentView}
            onNavigateView={setCurrentView}
            onOpenBooking={handleOpenBooking}
            onOpenAssessment={handleOpenAssessment}
          />

          <main>
            <Hero 
              onOpenBooking={handleOpenBooking} 
              onOpenAssessment={handleOpenAssessment} 
            />

            <StatsBar />

            <ServicesSection 
              onSelectService={() => handleOpenBooking()} 
              onOpenBooking={handleOpenBooking} 
            />

            <BookingSection 
              onNewBookingCreated={handleNewBookingCreated} 
            />

            <BlogSection />

            <TestimonialsSection />

            <FaqSection />
          </main>

          <Footer />

          {/* Quick Assessment Modal */}
          <QuickAssessmentModal
            isOpen={isAssessmentOpen}
            onClose={() => setIsAssessmentOpen(false)}
            onProceedToBooking={handleOpenBooking}
          />
        </>
      ) : (
        /* If in Admin View */
        <AdminPanel
          bookings={bookings}
          onUpdateBookingStatus={handleUpdateBookingStatus}
          blogPosts={blogPosts}
          onAddNewBlogPost={handleAddNewBlogPost}
          onDeleteBlogPost={handleDeleteBlogPost}
          onNavigateBackToSite={() => setCurrentView('landing')}
        />
      )}

      {/* Floating View Switcher pill button at bottom-left */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={() => setCurrentView(currentView === 'landing' ? 'admin' : 'landing')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-900 text-white text-xs font-bold shadow-2xl backdrop-blur-md border border-slate-700 hover:scale-105 transition-all group"
        >
          {currentView === 'landing' ? (
            <>
              <LayoutDashboard className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>مشاهده پنل مدیریت (Admin)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </>
          ) : (
            <>
              <Globe className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
              <span>مشاهده لندینگ پیج (سایت اصلی)</span>
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
