import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import welcomeImg from '../assets/welcome.png';

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// Debug function for testing EmailJS - call this from browser console:
// window.testEmailJS()
window.testEmailJS = async () => {
  console.log('🧪 Testing EmailJS configuration...');
  console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
  console.log('Template ID:', EMAILJS_CONFIG.DEMO_TEMPLATE_ID);
  console.log('Public Key:', EMAILJS_CONFIG.PUBLIC_KEY);

  try {
    const testData = {
      customer_name: 'Test User',
      customer_email: 'test@example.com',
      customer_phone: '123-456-7890',
      customer_profession: 'Building Developer',
      customer_message: 'This is a test message',
      demo_request_date: new Date().toLocaleDateString()
    };

    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.DEMO_TEMPLATE_ID,
      testData,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('✅ EmailJS test successful:', result);
    alert('✅ EmailJS test successful! Check your email.');
  } catch (error) {
    console.error('❌ EmailJS test failed:', error);
    alert(`❌ EmailJS test failed: ${error?.text || error?.message}`);
  }
};

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    message: ''
  });

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Listen for demo modal open event
  useEffect(() => {
    const handleOpenDemoModal = () => {
      setShowDemoModal(true);
    };

    window.addEventListener('openDemoModal', handleOpenDemoModal);
    return () => {
      window.removeEventListener('openDemoModal', handleOpenDemoModal);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Handle demo form changes
  const handleDemoFormChange = (e) => {
    setDemoForm({
      ...demoForm,
      [e.target.name]: e.target.value
    });
  };

  // Handle demo form submission
  const handleDemoSubmit = async (e) => {
    e.preventDefault();

    if (!demoForm.name || !demoForm.email || !demoForm.phone || !demoForm.profession) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Starting demo submission...');
    console.log('Form data:', demoForm);
    console.log('EmailJS Config:', EMAILJS_CONFIG);
    console.log('Using template:', EMAILJS_CONFIG.DEMO_TEMPLATE_ID);

    try {
      const templateParams = {
        customer_name: demoForm.name,
        customer_email: demoForm.email,
        customer_phone: demoForm.phone,
        customer_profession: demoForm.profession,
        customer_message: demoForm.message || 'No additional message',
        demo_request_date: new Date().toLocaleDateString(),
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.DEMO_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('EmailJS result:', result);
      setShowDemoModal(false);
      setShowSuccessModal(true);
      setDemoForm({ name: '', email: '', phone: '', profession: '', message: '' });
    } catch (error) {
      console.error('❌ Error sending demo request:', error);
      console.log('Full error object:', error);
      console.log('Error text:', error?.text);
      console.log('Error status:', error?.status);
      console.log('Error message:', error?.message);
      console.log('Template used:', EMAILJS_CONFIG.DEMO_TEMPLATE_ID);
      console.log('Service used:', EMAILJS_CONFIG.SERVICE_ID);

      // More detailed error handling
      let errorMessage = 'Failed to submit demo request. Please try again.';

      if (error?.text?.includes('Invalid service id')) {
        errorMessage = '❌ Invalid Service ID. Check your EmailJS service configuration.';
      } else if (error?.text?.includes('Template not found')) {
        errorMessage = '❌ Template not found. Check your EmailJS template ID.';
      } else if (error?.text?.includes('Invalid user id')) {
        errorMessage = '❌ Invalid Public Key. Check your EmailJS public key.';
      } else if (error?.text?.includes('rate limit')) {
        errorMessage = '⏰ Too many requests. Please try again in a few minutes.';
      } else if (!navigator.onLine) {
        errorMessage = '📡 No internet connection. Please check your connection.';
      } else if (error?.text) {
        errorMessage = `❌ EmailJS Error: ${error.text}`;
      }

      alert(errorMessage);
    }
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#ffbe01] text-black p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      {/* Book Demo Floating Button */}
      <button
        onClick={() => setShowDemoModal(true)}
        className="fixed bottom-6 left-6 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 z-50 group flex items-center space-x-2"
        aria-label="Book a demo"
      >
        <svg
          className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3a2 2 0 012-2h2a2 2 0 012 2v4m-6 4v10a2 2 0 002 2h8a2 2 0 002-2V11M9 11h6"
          />
        </svg>
        <span className="font-medium text-sm">Book Demo</span>
      </button>

      {/* Demo Request Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-black">Book a Demo</h2>
              <button
                onClick={() => setShowDemoModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div>
                <label htmlFor="demo-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="demo-name"
                  name="name"
                  value={demoForm.name}
                  onChange={handleDemoFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#ffbe01] focus:border-[#ffbe01] transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="demo-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="demo-email"
                  name="email"
                  value={demoForm.email}
                  onChange={handleDemoFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#ffbe01] focus:border-[#ffbe01] transition-colors duration-200"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="demo-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (India) *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-700 text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="demo-phone"
                    name="phone"
                    value={demoForm.phone}
                    onChange={handleDemoFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-r-md focus:ring-[#ffbe01] focus:border-[#ffbe01] transition-colors duration-200"
                    placeholder="98000 100210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="demo-profession" className="block text-sm font-medium text-gray-700 mb-2">
                  Profession *
                </label>
                <select
                  id="demo-profession"
                  name="profession"
                  value={demoForm.profession}
                  onChange={handleDemoFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#ffbe01] focus:border-[#ffbe01] transition-colors duration-200"
                >
                  <option value="">Select your profession</option>
                  <option value="interior-designer">Interior Designer</option>
                  <option value="building-developer">Building Developer</option>
                  <option value="contractor">Contractor</option>
                  <option value="architect">Architect</option>
                  <option value="project-manager">Project Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="demo-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="demo-message"
                  name="message"
                  value={demoForm.message}
                  onChange={handleDemoFormChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#ffbe01] focus:border-[#ffbe01] transition-colors duration-200 resize-none"
                  placeholder="Tell us about your specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ffbe01] text-black py-3 px-6 rounded-md font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200"
              >
                Request Demo
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>By requesting a demo, you agree to our terms of service.</p>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <div className="mb-6">
              <img
                src={welcomeImg}
                alt="Welcome"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-black mb-4">Thank You!</h2>
              <p className="text-gray-600 leading-relaxed">
                Thanks for requesting us for a demo. We will reach out to you soon!
              </p>
            </div>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-[#ffbe01] text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
