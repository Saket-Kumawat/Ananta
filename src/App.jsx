import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CareersPage from "./pages/CareersPage";
import NotFoundPage from "./pages/NotFoundPage";
// import TestimonialsPage from "./pages/TestimonialsPage";
// import GuaranteePage from "./pages/GuaranteePage";
// import FAQPage from "./pages/FAQPage";
// import ProcessPage from "./pages/ProcessPage";
import AwardsPage from "./pages/AwardsPage";
import WhatsAppBubble from './components/WhatsAppBubble';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Ananta Studio - Website & App Development for Local Businesses in Jaipur</title>
        <meta
          name="description"
          content="Ananta Studio helps restaurants, cafes, and startups in Jaipur get online with stunning websites and mobile apps. Affordable, fast, and professional service."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
            {/* <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/guarantee" element={<GuaranteePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/process" element={<ProcessPage />} /> */}
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
      <WhatsAppBubble />
    </>
  );
};

export default App;
