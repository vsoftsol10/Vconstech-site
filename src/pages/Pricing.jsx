import { Link } from 'react-router-dom';
import { useState } from 'react';
import pricingHeroVideo from '../assets/pricing-hero.mp4';

// Razorpay public key (set VITE_RAZORPAY_KEY_ID in your env for production)
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_live_SUcwPuBShurSZi';

// Dynamically load Razorpay checkout script
const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Payment method SVG icons
const UPIIcon = () => (
  <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#6B3FA0" />
    <path d="M24 10L34 20H28V30H20V20H14L24 10Z" fill="white" />
    <path d="M24 38L14 28H20V18H28V28H34L24 38Z" fill="#00BCD4" />
  </svg>
);

const CardIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="3" stroke="#1a1a2e" fill="none" />
    <path d="M2 10H22" stroke="#1a1a2e" strokeWidth="2" />
    <rect x="5" y="14" width="4" height="2" rx="0.5" fill="#1a1a2e" />
    <rect x="11" y="14" width="3" height="2" rx="0.5" fill="#1a1a2e" />
  </svg>
);

const NetBankingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21" stroke="#1a5276" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M3 10H21" stroke="#1a5276" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 3L21 10H3L12 3Z" fill="#1a5276" />
    <path d="M6 10V21" stroke="#1a5276" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 10V21" stroke="#1a5276" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 10V21" stroke="#1a5276" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CheckoutPanel = ({ plan, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [coupon, setCoupon] = useState('');
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  if (!plan) return null;

  const priceNum = plan.price ? parseInt(plan.price.replace(/[^0-9]/g, '')) : 0;
  const tax = Math.round(priceNum * 0.18);
  const total = priceNum + tax;

  const paymentMethods = [
    { id: 'upi', label: 'UPI', sublabel: 'Pay via UPI ID', Icon: UPIIcon },
    { id: 'card', label: 'Credit / Debit Card', sublabel: 'Visa, Mastercard, Rupay', Icon: CardIcon },
    { id: 'netbanking', label: 'Net Banking', sublabel: 'All major banks supported', Icon: NetBankingIcon },
  ];

  const handlePayment = async () => {
    if (!plan) return;

    // Simple front-end validation for UPI option
    if (paymentMethod === 'upi' && !upiId.trim()) {
      alert('Please enter your UPI ID to continue.');
      return;
    }

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded || !window.Razorpay) {
      alert('Unable to load payment gateway. Please check your connection and try again.');
      return;
    }

    const amountInPaise = total * 100; // Razorpay expects amount in paise

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: amountInPaise,
      currency: 'INR',
      name: 'Vconstech',
      description: `${plan.name} Plan (${plan.period})`,
      handler: function (response) {
        console.log('Razorpay payment success:', response);
        setShowSuccessModal(true);
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        plan_name: plan.name,
        plan_period: plan.period,
        selected_payment_method: paymentMethod,
        upi_id: paymentMethod === 'upi' ? upiId : '',
      },
      theme: {
        color: '#ffbe01',
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on('payment.failed', function (response) {
      console.error('Razorpay payment failed:', response);
      alert('Payment failed. Please try again or use a different method.');
    });

    razorpay.open();
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccessModal && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-50 transition-opacity duration-300"
            onClick={() => {
              setShowSuccessModal(false);
              onClose();
            }}
          />
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowSuccessModal(false);
                onClose();
              }
            }}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center"
              style={{ animation: 'modalIn 0.4s cubic-bezier(0.4,0,0.2,1)' }}
            >
              <style>{`
                @keyframes modalIn {
                  from { transform: scale(0.9); opacity: 0; }
                  to { transform: scale(1); opacity: 1; }
                }
              `}</style>

              {/* Success Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your purchase. Our team will contact you shortly to activate your plan.
              </p>

              <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">📧 Check your email</span> for confirmation and next steps
                </p>
              </div>

              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  onClose();
                }}
                className="w-full bg-[#ffbe01] text-black font-semibold py-3 rounded-xl hover:bg-yellow-400 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Side Panel — full screen on mobile, fixed width on desktop */}
      <div
        className="fixed bottom-0 right-0 z-50 bg-white shadow-2xl flex flex-col
                   w-full h-[92vh]
                   sm:top-0 sm:bottom-auto sm:h-full sm:w-[420px] sm:max-w-full"
        style={{ animation: 'panelIn 0.32s cubic-bezier(0.4,0,0.2,1)' }}
      >
        <style>{`
          @keyframes panelIn {
            from { transform: translateY(60px); opacity: 0; }
            to   { transform: translateY(0);    opacity: 1; }
          }
          @media (min-width: 640px) {
            @keyframes panelIn {
              from { transform: translateX(100%); opacity: 0; }
              to   { transform: translateX(0);    opacity: 1; }
            }
          }
        `}</style>

        {/* Drag handle (mobile only) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-300"/>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Complete Purchase</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Review your plan and proceed</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">

          {/* Plan Summary Card */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="inline-block bg-[#ffbe01] text-black text-xs font-bold px-2.5 py-0.5 rounded-full mb-1.5">
                  {plan.name} Plan
                </span>
                <p className="text-xs text-gray-500">{plan.period}</p>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 whitespace-nowrap">{plan.price}</p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {plan.features.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[#ffbe01] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-600 leading-snug">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-2">Payment Method</p>
            <div className="space-y-2">
              {paymentMethods.map(({ id, label, sublabel, Icon: IconComponent }) => {
                // `no-unused-vars` doesn't always recognize JSX component usage.
                void IconComponent;
                return (
                  <label
                    key={id}
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === id
                      ? 'border-[#ffbe01] bg-yellow-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={id}
                      checked={paymentMethod === id}
                      onChange={() => setPaymentMethod(id)}
                      className="accent-[#ffbe01] w-4 h-4 flex-shrink-0"
                    />
                    {/* Icon box */}
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <IconComponent />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-800 leading-tight">{label}</p>
                      <p className="text-xs text-gray-400 truncate">{sublabel}</p>
                    </div>
                  </label>
                );
              })}
            </div>

            {paymentMethod === 'upi' && (
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Enter UPI ID (e.g. name@ybl)"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ffbe01] focus:ring-2 focus:ring-[#ffbe01]/20"
                />
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="mt-3 space-y-2">
                <input
                  type="text"
                  placeholder="Card number"
                  maxLength={19}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ffbe01] focus:ring-2 focus:ring-[#ffbe01]/20"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    maxLength={5}
                    className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ffbe01] focus:ring-2 focus:ring-[#ffbe01]/20"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    maxLength={3}
                    className="w-1/2 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ffbe01] focus:ring-2 focus:ring-[#ffbe01]/20"
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'netbanking' && (
              <div className="mt-3">
                <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#ffbe01] focus:ring-2 focus:ring-[#ffbe01]/20 bg-white">
                  <option value="">Select your bank</option>
                  <option>State Bank of India</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Kotak Mahindra Bank</option>
                  <option>Bank of Baroda</option>
                  <option>Punjab National Bank</option>
                  <option>Canara Bank</option>
                </select>
              </div>
            )}
          </div>

          {/* Coupon Code */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Coupon Code</span>
              </div>
              {!showCouponInput && (
                <button
                  onClick={() => setShowCouponInput(true)}
                  className="text-sm font-semibold text-[#c9960a] hover:underline"
                >
                  Add
                </button>
              )}
            </div>
            {showCouponInput && (
              <div className="mt-2.5 flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#ffbe01] min-w-0"
                />
                <button className="bg-black text-white text-sm px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap flex-shrink-0">
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* Price Breakdown */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span className="truncate mr-2">{plan.name} Plan ({plan.period})</span>
              <span className="font-medium text-gray-900 whitespace-nowrap">{plan.price}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Taxes &amp; fees (18% GST)</span>
              <span className="font-medium text-gray-900">₹{tax.toLocaleString('en-IN')}</span>
            </div>
            <div className="pt-3 border-t border-gray-200 flex justify-between">
              <span className="text-base font-bold text-gray-900">Total</span>
              <span className="text-base font-bold text-gray-900">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-400 leading-relaxed pb-2">
            By completing payment, you agree to our{' '}
            <span className="underline cursor-pointer text-gray-500">Terms of Service</span> and{' '}
            <span className="underline cursor-pointer text-gray-500">Privacy Policy</span>.
            You can cancel your subscription at any time.
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="px-5 py-4 border-t border-gray-100 flex gap-3 bg-white flex-shrink-0">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            className="flex-1 py-3 rounded-xl bg-[#ffbe01] text-black font-semibold text-sm hover:bg-yellow-400 transition-colors"
          >
            Complete Payment
          </button>
        </div>
      </div>
    </>
  );
};

const Pricing = () => {
  const [checkoutPlan, setCheckoutPlan] = useState(null);

  const plans = [
    {
      name: "Free Trial",
      price: "₹0",
      period: "7 days",
      description:
        "Try Vconstech risk-free for 7 days with access to core features.",
      features: [
        "7-day full access",
        "Up to 2 users",
        "Basic project management",
        "Email support",
        "Upgrade anytime"
      ],
      popular: false,
      cta: "Start Trial"
    },
    {
      name: "Basic",
      price: "₹999",
      period: "per month",
      description:
        "Best for small teams and site engineers starting with digital project management.",
      features: [
        "Up to 3 users (Site Engineers)",
        "Desktop access only",
        "Basic project management",
        "Billing management",
        "Email support"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Premium",
      price: "₹1,499",
      period: "per month",
      description:
        "Ideal for growing construction teams needing multi-device access and billing support.",
      features: [
        "5 to 10 users",
        "Desktop, Mobile & Tablet access",
        "Advanced project management",
        "Billing management",
        "Billing & invoicing",
        "Email support"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Advanced",
      period: "per user / month",
      description:
        "Fully customizable plan based on your business needs with premium features.",
      features: [
        "Custom number of users",
        "₹1,000 per additional user",
        "Desktop, Mobile & Tablet access",
        "All Premium features",
        "Custom configurations",
        "Priority email support"
      ],
      popular: true,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all our plans. No credit card required to get started."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support for Starter plans, priority support for Professional plans, and 24/7 phone support for Enterprise clients."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, we offer a 20% discount when you choose annual billing for Professional plans."
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Checkout Side Panel */}
      {checkoutPlan && (
        <CheckoutPanel plan={checkoutPlan} onClose={() => setCheckoutPlan(null)} />
      )}

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={pricingHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-[#ffbe01]">Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your construction business.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-[#ffbe01] transform scale-105' : ''
                  }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#ffbe01]">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-[#ffbe01] mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.name === "Advanced" ? (
                    <Link
                      to="/contact"
                      className="block text-center py-3 px-6 rounded-md font-semibold transition-colors duration-200 bg-[#ffbe01] text-black hover:bg-yellow-400"
                    >
                      {plan.cta}
                    </Link>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        onClick={() => setCheckoutPlan(plan)}
                        className="flex-1 text-center py-3 px-4 rounded-md font-semibold transition-colors duration-200 bg-[#ffbe01] text-black hover:bg-yellow-400"
                      >
                        Buy Now
                      </button>
                      <Link
                        to="/contact"
                        className="flex-1 text-center py-3 px-4 rounded-md font-semibold transition-colors duration-200 bg-black text-white hover:bg-gray-800"
                      >
                        Enquiry Now
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose Vconstech?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More than just software – a complete solution for construction management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized for speed and performance, even with large construction projects.</p>
            </div>

            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee for your critical data.</p>
            </div>

            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support from our expert team whenever you need assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and see how Vconstech can transform your construction business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#ffbe01] text-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#ffbe01] text-[#ffbe01] px-8 py-3 rounded-md font-semibold text-lg hover:bg-[#ffbe01] hover:text-black transition-colors duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;