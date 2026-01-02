import React, { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import builders from '../assets/builders-1.jpg';
import contractors from '../assets/contractors-1.jpg';
import engineers from '../assets/site-engg-1.jpg';
import designers from '../assets/interior-1.jpg';

const WeSupport = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait for DOM to be fully rendered before scrolling
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          // Get header height dynamically
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 144; // fallback to max header height

          // Calculate the position to scroll to (element top - header height - some padding)
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementTop - headerHeight - 20; // 20px extra padding

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  const professionals = [
    {
      id: 'builders',
      title: 'Builders',
      challenges: [
        'Lack of real-time project visibility',
        'Cost overruns and delayed timelines',
        'Multiple projects difficult to monitor'
      ],
      solutions: [
        'Centralized dashboard for all projects',
        'Live cost, progress, and material tracking',
        'Clear insights for better decision-making'
      ],
      result: 'Better control, predictable outcomes, and on-time delivery.',
      image: builders,
      reverse: false
    },
    {
      id: 'contractors',
      title: 'Contractors',
      challenges: [
        'Manual tracking of materials and labour',
        'Payment delays and expense confusion',
        'Poor coordination between teams'
      ],
      solutions: [
        'Automated material and labour management',
        'Clear financial tracking and reports',
        'Organized contractor and task management'
      ],
      result: 'Smooth site operations and reduced daily stress.',
      image: contractors,
      reverse: true
    },
    {
      id: 'engineers',
      title: 'Site Engineers',
      challenges: [
        'Difficulty reporting daily site progress',
        'Untracked material usage',
        'Communication gaps with office teams'
      ],
      solutions: [
        'Easy daily reports and live site updates',
        'Real-time material and workforce tracking',
        'Instant data sync with management'
      ],
      result: 'Faster reporting and better site coordination.',
      image: engineers,
      reverse: false
    },
    {
      id: 'designers',
      title: 'Interior Designers',
      challenges: [
        'Design changes not properly tracked',
        'Client approvals taking too long',
        'Budget and execution mismatch'
      ],
      solutions: [
        'Organized file and design version management',
        'Easy client approvals and documentation',
        'Budget tracking aligned with execution'
      ],
      result: 'Happier clients and smoother project delivery.',
      image: designers,
      reverse: true
    }
  ];

  const ProfessionalCard = ({ professional }) => {
    const { emoji, title, challenges, solutions, result, image, reverse } = professional;

    return (
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center mb-32`}>
        {/* Content Side */}
        <div className="flex-1 space-y-6">
          {/* Title */}
          <div className="flex items-center gap-3">
            <span className="text-5xl">{emoji}</span>
            <h3 className="text-4xl font-bold text-gray-900">{title}</h3>
          </div>

          {/* Challenges */}
          <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Challenges
            </h4>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-400">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              How We Fix It
            </h4>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Result */}
          <div className="bg-black text-white rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-yellow-400 mb-2 uppercase tracking-wide">Result</h4>
            <p className="text-lg font-medium">{result}</p>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full">
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400">
              <img
                src={image}
                alt={title}
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-black rounded-full opacity-10 -z-10"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-yellow-500 text-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              People We Support
            </h1>
            <p className="text-2xl font-semibold max-w-4xl mx-auto">
              Built for Every Role on the Project Site
            </p>
            <p className="text-lg max-w-3xl mx-auto text-gray-900">
              From planning to execution, our platform solves real-world challenges faced by construction and interior professionals helping them work smarter, faster, and with complete control.
            </p>
          </div>
        </div>
      </div>

      {/* Professionals Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {professionals.map((professional) => (
          <div key={professional.id} id={professional.id} className="scroll-mt-40">
            <ProfessionalCard professional={professional} />
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-500 text-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            One Platform. Built for Every Professional on Site.
          </h2>
          
          <p className="text-xl max-w-2xl mx-auto">
            Whether you manage, execute, or design, we help you stay in control at every stage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <NavLink to="/contact" className="group bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink to="/contact" className="bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 border-2 border-white">
              Request a Demo
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeSupport;