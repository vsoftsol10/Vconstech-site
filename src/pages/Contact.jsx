import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import contactHero from '../assets/contact-hero.mp4';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Starting contact form submission...');
    console.log('Form data:', formData);

    try {
      const templateParams = {
        customer_name: formData.name,
        customer_email: formData.email,
        customer_company: formData.company || 'Not provided',
        customer_phone: formData.phone || 'Not provided',
        contact_subject: formData.subject,
        customer_message: formData.message,
        contact_date: new Date().toLocaleDateString(),
        contact_type: 'Demo Booking Request'
      };

      console.log('Sending contact email with params:', templateParams);

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Contact email sent successfully:', result);
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending contact form:', error);
      console.log('Full error object:', error);
      console.log('Error text:', error?.text);
      console.log('Error status:', error?.status);

      // More detailed error handling
      let errorMessage = 'Failed to send message. Please try again.';

      if (error?.text?.includes('Invalid service id')) {
        errorMessage = '❌ Email service configuration error. Please contact support.';
      } else if (error?.text?.includes('Template not found')) {
        errorMessage = '❌ Email template not found. Please contact support.';
      } else if (error?.text?.includes('Invalid user id')) {
        errorMessage = '❌ Invalid email configuration. Please contact support.';
      } else if (error?.text?.includes('rate limit')) {
        errorMessage = '⏰ Too many requests. Please try again in a few minutes.';
      } else if (!navigator.onLine) {
        errorMessage = '📡 No internet connection. Please check your connection.';
      } else if (error?.text) {
        errorMessage = `❌ Email error: ${error.text}`;
      }

      alert(errorMessage);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      details: ["+91 90954 22237"],
      description: "Available 24/7"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      details: ["info@thevsoft.com"],
      description: "We respond within 24 hours"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Office",
      details: ["Upstair, Kotak Mahindra Bank,", "Lakshmi Complex, Anbunagar Extension", "Vannarapettai, Tirunelveli.", "Tamilnadu - 627002, India."],
      description: "Visit us for a demo"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
         <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={contactHero} type="video/mp4" />
  </video>

  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10"></div>
  {/* You can adjust opacity: bg-black/30, bg-black/40, bg-black/70 */}

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-[#ffbe01]">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your construction business? Let's talk about how Vconstech can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#ffbe01] focus:border-[#ffbe01] transition-colors duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#ffbe01] focus:border-[#ffbe01] transition-colors duration-200"
                      placeholder="john@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#ffbe01] focus:border-[#ffbe01] transition-colors duration-200"
                      placeholder="ABC Construction"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#ffbe01] focus:border-[#ffbe01] transition-colors duration-200"
                      placeholder="+91 9094442237"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#ffbe01] focus:border-[#ffbe01] transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#ffbe01] focus:border-[#ffbe01] transition-colors duration-200 resize-none"
                    placeholder="Tell us about your construction project needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ffbe01] text-black py-3 px-6 rounded-md font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Prefer to reach out directly? Here are our contact details and office information.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-700 font-medium">
                          {detail}
                        </p>
                      ))}
                      <p className="text-gray-600 text-sm mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
