import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import './Component/Solutions/solution.css';

// Import your components
import Layout from "./Component/Header/Layout";
import Home from "./Component/Home/Home";
import TryForFree from "./Component/Forms/TryForFree";
import RequestDemo from "./Component/Forms/RequestDemo";
import Carrer from "./Component/Company/Carrer/Carrer";
import About from "./Component/Company/About/About";
import ContactPage from "./Component/Company/Contact/Contact";
import WhatsappApi from "./Component/Product/Whatsapp/WhatsappApi";
import RcsSms from "./Component/Product/Rcs/RcsSms";
import BulkSms from "./Component/Product/BulkSms/BulkSms";
import VoiceCall from "./Component/Product/VoiceCall/VoiceCall";
import ScrollToTop from "./Scroll/ScrollToTop";
import Terms from "./Component/TermsPrivacy/Terms";
import Privacy from "./Component/TermsPrivacy/Privacy";
import Service from "./Component/Resources/Services/Service";
import MainFaq from "./Component/Resources/FAQ/FAQ";
import NoPage from "./Component/NoPage/NoPage";
import RealEstate from "./Component/Solutions/RealEstate/RealEstate";
import Gaming from "./Component/Solutions/Gaming/Gaming";
import Travel from "./Component/Solutions/Travel/Travel";
import HealthCare from "./Component/Solutions/HealthCare/HealthCare";
import Food from "./Component/Solutions/Food/Food";
import Retail from "./Component/Solutions/Retail/Retail";
import Media from "./Component/Solutions/Media/Media";
import Government from "./Component/Solutions/Government/Government";
import Education from "./Component/Solutions/Education/Education";
import Blog from "./Component/Resources/Blogs/Blog"
import Dec11 from "./Component/Resources/Blogs/December/Dec11";
import Dec13 from "./Component/Resources/Blogs/December/Dec13"; // Import the Blog component

function App() {
  useEffect(() => {
    // Initialize AOS with specific settings
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true,     // Allow animations to happen only once
      mirror: false,  // Disable mirroring animations when scrolling back
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="try-for-free/" element={<TryForFree />} />
          <Route path="request-demo/" element={<RequestDemo />} />
          <Route path="career/" element={<Carrer />} />
          <Route path="about/" element={<About />} />
          <Route path="contact/" element={<ContactPage />} />
          <Route path="whatsapp-api/" element={<WhatsappApi />} />
          <Route path="rcs-sms/" element={<RcsSms />} />
          <Route path="bulk-sms/" element={<BulkSms />} />
          <Route path="voice-call/" element={<VoiceCall />} />
          <Route path="privacy/" element={<Privacy />} />
          <Route path="terms/" element={<Terms />} />
          <Route path="services/" element={<Service />} />
          <Route path="faq/" element={<MainFaq />} />
          <Route path="blogs/" element={<Blog />} /> {/* Use the imported Blog component */}
          <Route path="real-estate/" element={<RealEstate />} />
          <Route path="gaming/" element={<Gaming />} />
          <Route path="tours-travel/" element={<Travel />} />
          <Route path="health-care/" element={<HealthCare />} />
          <Route path="food-beverage/" element={<Food />} />
          <Route path="retail-ecommerce/" element={<Retail />} />
          <Route path="media-entertainment/" element={<Media />} />
          <Route path="government/" element={<Government />} />
          <Route path="education/" element={<Education />} />
          <Route path="blogs/7-simple-way-to-enhance-customer-support-with-whatsapp/" element={<Dec11 />} />
          <Route path="blogs/streamlined-bulk-voice-calling-system/" element={<Dec13 />} />
          <Route path="*" element={<NoPage />} /> {/* Handle unmatched routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
