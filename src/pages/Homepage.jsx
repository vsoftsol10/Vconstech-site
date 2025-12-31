import { Link } from 'react-router-dom';
import heroVideo from '../assets/herobck.mp4';
import softwareErpImg from '../assets/software-Erp.jpg';
import dashboardImg from '../assets/vconstech-Homepage.png';
import reportsImg from '../assets/vconstech-Financialpage.png';
import mobileImg from '../assets/vconstech-materialManagementPage.png';
import contractorImg from '../assets/contractorCard.jpg';
import interiorImg from '../assets/interiorCard.jpg';
import ownerImg from '../assets/ownerCard.jpg';
import Time1 from '../assets/Time1.jpg'; // adjust path as needed
import digital from "../assets/digital.jpg";
import costoverruns from "../assets/costoverruns.jpg"
import costmanagement from "../assets/cost management.jpg";

const Homepage = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Project Management",
      description: "Complete project lifecycle management from planning to completion with real-time tracking and reporting."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Cost Control",
      description: "Monitor budgets, track expenses, and manage costs effectively across all your construction projects."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Team Collaboration",
      description: "Seamless communication and collaboration between all stakeholders including contractors, suppliers, and clients."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 14l3-3 4 4 5-6"/>
        </svg>

      ),
      title: "Financial Management",
      description: "Comprehensive financial tracking, invoicing, payment processing, and financial reporting for construction projects."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Labour Management",
      description: "Efficient workforce planning, time tracking, productivity monitoring, and labor cost optimization."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#ffbe01]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Material Control",
      description: "Inventory management, material procurement, supplier coordination, and material usage tracking."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Construction ERP Software for Efficient <span className="text-[#ffbe01]">Project Management</span>.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#ffbe01] text-black px-6 sm:px-8 py-3 rounded-md font-semibold text-base sm:text-lg hover:bg-yellow-400 transition-colors duration-200 w-full sm:w-auto text-center"
            >
              Start Free Trial
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-md font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-colors duration-200 w-full sm:w-auto text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-12">
            Designed for Construction Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ownerImg, contractorImg, interiorImg].map((img, i) => (
              <div key={i} className="relative rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer">
                <img src={img} alt="" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 p-6">
                    <div className="text-2xl md:text-3xl font-bold text-[#ffbe01] mb-4">
                      {i === 0 ? "Building Developer" : i === 1 ? "Contractor" : "Interior Designer"}
                    </div>
                    <div className="text-white text-sm md:text-base leading-relaxed">
                      {i === 0
                        ? "Comprehensive project oversight and financial management solutions"
                        : i === 1
                        ? "Streamlined operations, workforce management, and cost control"
                        : "Creative project management with material tracking and client coordination"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Powerful Features for Construction Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            Everything you need to manage your construction projects efficiently and effectively.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-black mb-4 flex-grow">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Vconstech Section */}
      <section className="py-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Why Choose <span className="text-[#ffbe01]">Vconstech</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Addressing the biggest challenges in construction management with proven solutions that save time, reduce costs, and boost profitability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <img src={Time1} alt="Project Delays" className="max-w-26 md:max-w-36 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"/>
              <h3 className="text-xl font-semibold text-[#ffbe01] mb-2">Project Delays</h3>
              <p className="text-sm text-gray-600 mb-4 font-medium">Common construction challenge</p>
              <h4 className="text-lg font-semibold text-[#ffbe01] mb-2">Vconstech Solution</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Real-time project tracking, automated progress updates, and intelligent scheduling prevent delays and ensure projects stay on track with 98% on-time delivery rate.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <img src={costoverruns} alt="Project Delays" className="max-w-36 md:max-w-36 mx-auto h-fit transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"/>
              <h3 className="text-xl font-semibold text-[#ffbe01] mb-2 ">Cost Overruns</h3>
              <p className="text-sm text-gray-600 mb-4 font-medium">Budget management nightmare</p>
              <h4 className="text-lg font-semibold text-[#ffbe01] mb-2">Vconstech Solution</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Advanced cost tracking, budget forecasting, and material cost optimization
                help you stay within budget and maximize profitability on every project.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <img src={digital} alt="Project Delays" className="max-w-26 md:max-w-36 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"/>
              <h3 className="text-xl font-semibold text-[#ffbe01] mb-2">Manual Paperwork</h3>
              <p className="text-sm text-gray-600 mb-4 font-medium">Time-consuming documentation</p>
              <h4 className="text-lg font-semibold text-[#ffbe01] mb-2">Vconstech Solution</h4>
              <p className="text-gray-600 text-center leading-relaxed">
               Digital documentation, automated reporting, and cloud-based file management
                eliminate paperwork hassles and ensure compliance with industry standards.
               </p>
            </div>

            </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Who is <span className="text-[#ffbe01]">Vconstech</span> For?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for construction professionals who demand excellence and efficiency in their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" >
            <div className="bg-white p-8 rounded-lg shadow-lg" >
              <div className="flex items-center mb-6">
                <div className="bg-[#ffbe01] p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-black">Building Developers</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Large-scale developers managing multiple projects simultaneously need comprehensive
                oversight and control over their entire portfolio.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Multi-project portfolio management</li>
                <li>• Regulatory compliance tracking</li>
                <li>• Stakeholder communication</li>
                <li>• Risk management and mitigation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#ffbe01] p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-black">Contractors & Subcontractors</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                General contractors and subcontractors managing complex projects with multiple
                stakeholders and tight deadlines.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Project scheduling and coordination</li>
                <li>• Subcontractor management</li>
                <li>• Quality control and compliance</li>
                <li>• Resource allocation optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#ffbe01] p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-black">Interior Designers</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Interior design firms managing client relationships, design projects,
                and material specifications with precision.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Client project management</li>
                <li>• Design specification tracking</li>
                <li>• Material and vendor coordination</li>
                <li>• Timeline and budget management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#ffbe01] p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                    <polyline points="17,21 17,13 7,13 7,21" />
                    <polyline points="7,3 7,8 15,8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-black">Construction Managers</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Project managers and construction managers overseeing multiple sites,
                teams, and complex project requirements.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Multi-site project oversight</li>
                <li>• Team coordination and communication</li>
                <li>• Safety and compliance monitoring</li>
                <li>• Performance tracking and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              The <span className="text-[#ffbe01]">Importance</span> of Vconstech for Your Construction Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's competitive construction market, efficiency and accuracy are not just advantages—they're necessities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Transform Your Operations</h3>
              <div className="space-y-6">
                
                <div className="flex items-start">
                  <div className="bg-[#ffbe01] p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">Reduce Operational Costs by 30%</h4>
                    <p className="text-gray-600">Eliminate manual processes, reduce errors, and optimize resource allocation across all projects.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#ffbe01] p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">Improve Project Delivery by 40%</h4>
                    <p className="text-gray-600">Streamline workflows, improve coordination, and deliver projects on time and within budget.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#ffbe01] p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-2">Increase Profitability</h4>
                    <p className="text-gray-600">Make data-driven decisions with comprehensive analytics and reporting tools.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-20 rounded-lg">
              <div className="text-center">
                <img
                  src={softwareErpImg}
                  alt="Vconstech ERP Software Interface"
                  className="w-full h-auto rounded-lg shadow-lg max-w-2xl mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Site Tracking Preview Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Get Real-Time Visibility of Your Entire Project
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From materials to manpower - track everything instantly with our user-friendly dashboard that's easy to access anytime, anywhere.
            </p>
          </div>

          {/* Mobile Phone Style Previews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Dashboard Preview - Mobile Style */}
            <div className="flex flex-col items-center">
              {/* Phone Frame */}
              <div className="relative">
                <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-black rounded-2xl overflow-hidden shadow-inner">
                    {/* Phone Notch */}
                    <div className="h-8 bg-black flex justify-center">
                      <div className="w-24 h-5 bg-gray-900 rounded-b-xl mt-1"></div>
                    </div>
                    {/* Screen Content */}
                    <div className="relative bg-white">
                      <img
                        src={dashboardImg}
                        alt="Vconstech Live Dashboard"
                        className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                      />
                      {/* Status Bar */}
                      <div className="absolute top-2 left-4 right-4 flex justify-between items-center text-black text-xs">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-black rounded-sm"></div>
                          <div className="w-4 h-2 bg-black rounded-sm"></div>
                          <div className="w-6 h-2 bg-black rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Title */}
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-black mb-2">Live Dashboard</h3>
                <p className="text-gray-600 text-sm max-w-xs">Real-time project monitoring and instant updates</p>
              </div>
            </div>

            {/* Reports Preview - Mobile Style */}
            <div className="flex flex-col items-center">
              {/* Phone Frame */}
              <div className="relative">
                <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-black rounded-2xl overflow-hidden shadow-inner">
                    {/* Phone Notch */}
                    <div className="h-8 bg-black flex justify-center">
                      <div className="w-24 h-5 bg-gray-900 rounded-b-xl mt-1"></div>
                    </div>
                    {/* Screen Content */}
                    <div className="relative bg-white">
                      <img
                        src={reportsImg}
                        alt="Vconstech Reports Dashboard"
                        className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                      />
                      {/* Status Bar */}
                      <div className="absolute top-2 left-4 right-4 flex justify-between items-center text-black text-xs">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-black rounded-sm"></div>
                          <div className="w-4 h-2 bg-black rounded-sm"></div>
                          <div className="w-6 h-2 bg-black rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Title */}
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-black mb-2">Advanced Reports</h3>
                <p className="text-gray-600 text-sm max-w-xs">Comprehensive analytics and detailed reporting</p>
              </div>
            </div>

            {/* Mobile Access Preview - Mobile Style */}
            <div className="flex flex-col items-center">
              {/* Phone Frame */}
              <div className="relative">
                <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-black rounded-2xl overflow-hidden shadow-inner">
                    {/* Phone Notch */}
                    <div className="h-8 bg-black flex justify-center">
                      <div className="w-24 h-5 bg-gray-900 rounded-b-xl mt-1"></div>
                    </div>
                    {/* Screen Content */}
                    <div className="relative bg-white">
                      <img
                        src={mobileImg}
                        alt="Vconstech Mobile Interface"
                        className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                      />
                      {/* Status Bar */}
                      <div className="absolute top-2 left-4 right-4 flex justify-between items-center text-black text-xs">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-black rounded-sm"></div>
                          <div className="w-4 h-2 bg-black rounded-sm"></div>
                          <div className="w-6 h-2 bg-black rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Title */}
              <div className="text-center mt-6">
                <h3 className="text-xl font-bold text-black mb-2">Mobile Access</h3>
                <p className="text-gray-600 text-sm max-w-xs">Access your projects anywhere, anytime</p>
              </div>
            </div>
          </div>

          {/* Simple Benefits */}
          <div className="text-center mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-[#ffbe01] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black text-sm">Lightning Fast</h4>
              </div>

              <div className="text-center">
                <div className="bg-[#ffbe01] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black text-sm">Mobile Ready</h4>
              </div>

              <div className="text-center">
                <div className="bg-[#ffbe01] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black text-sm">User Friendly</h4>
              </div>

              <div className="text-center">
                <div className="bg-[#ffbe01] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-black text-sm">Secure</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Construction Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of construction professionals who trust Vconstech to manage their projects efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                // Dispatch custom event to open demo modal
                window.dispatchEvent(new CustomEvent('openDemoModal'));
              }}
              className="bg-[#ffbe01] text-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200"
            >
              Schedule Demo
            </button>
            <Link
              to="/pricing"
              className="border-2 border-[#ffbe01] text-[#ffbe01] px-8 py-3 rounded-md font-semibold text-lg hover:bg-[#ffbe01] hover:text-black transition-colors duration-200"
            >
              View Pricing
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#ffbe01] text-[#ffbe01] px-8 py-3 rounded-md font-semibold text-lg hover:bg-[#ffbe01] hover:text-black transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Homepage;
