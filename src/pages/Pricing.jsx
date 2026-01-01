import { Link } from 'react-router-dom';
import pricingHeroVideo from '../assets/pricing-hero.mp4';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹9,999",
      period: "per year",
      description: "Perfect for small construction teams and individual contractors.",
      features: [
        "Up to 5 active projects",
        "Basic project management",
        "Time tracking",
        "Basic reporting",
        "Email support",
        "Mobile app access"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "₹19,999",
      period: "per year",
      description: "Ideal for growing construction companies and development firms.",
      features: [
        "Up to 25 active projects",
        "Advanced project management",
        "Cost tracking & budgeting",
        "Team collaboration tools",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
     {
      name: "Bussiness",
      price: "₹34,999",
      period: "per year",
      description:"Ideal for builders and mid-size construction firms to manage work easily.",
      features: [
        
        "All Professional features",

"Labour management tools",

"Advanced reports ",

"Project scheduling & timeline management",

"Resource allocation & tracking",

"Cost estimation & budgeting tools",

"Document management",

"Team collaboration & communication tools"
      ],
      popular: false,
      cta: "Contact Sales"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large construction companies and enterprise clients.",
      features: [
        "Unlimited projects",
        "All Professional features",
        "Custom workflows",
        "Dedicated account manager",
        "24/7 phone support",
        "On-premise deployment option",
        "Advanced security",
        "Custom training"
      ],
      popular: false,
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
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Video */}
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

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* You can adjust opacity: bg-black/30, bg-black/40, bg-black/70 */}

        {/* Content */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-[#ffbe01] transform scale-105' : ''
                }`}
              >
                 {/* {plan.popular && ( */}
              {/* //     <div className="bg-[#ffbe01] text-black text-center py-2 font-semibold">
              //       Most Popular
              //     </div>
              //   )} */}
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
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`block text-center py-3 px-6 rounded-md font-semibold transition-colors duration-200 ${
                      plan.popular
                        ? 'bg-[#ffbe01] text-black hover:bg-yellow-400'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
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
              <div className="bg-[#ffbe01] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Optimized for speed and performance, even with large construction projects.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#ffbe01] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security with 99.9% uptime guarantee for your critical data.</p>
            </div>

            <div className="text-center">
              <div className="bg-[#ffbe01] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 bg-gray-50">
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
                <h3 className="text-lg font-semibold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
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
