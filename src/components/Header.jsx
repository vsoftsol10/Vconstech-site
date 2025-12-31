import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/constech-logo.png';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionForOpen, setSolutionForOpen] = useState(false);
  const [peopleWeSupportOpen, setPeopleWeSupportOpen] = useState(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);
  const [mobilePeopleOpen, setMobilePeopleOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMobileSolutionOpen(false);
    setMobilePeopleOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-24 md:h-28 lg:h-32 xl:h-36">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img
                src={logo}
                alt="Vconstech Logo"
                className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback text logo */}
              <div className="flex items-center" style={{ display: 'none' }}>
                <div className="bg-[#ffbe01] p-2 md:p-3 lg:p-4 xl:p-5 rounded-md">
                  <span className="text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">V</span>
                </div>
                <span className="ml-2 text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">Vconstech</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
            >
              About Us
            </Link>
            
            {/* Solution For Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionForOpen(true)}
              onMouseLeave={() => setSolutionForOpen(false)}
            >
              <button className="text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200 flex items-center">
                Solution For
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionForOpen && (
                <div 
                  className="absolute top-full left-0 mt-4 bg-white rounded-lg shadow-xl border border-gray-200 py-6 z-50"
                  onMouseEnter={() => setSolutionForOpen(true)}
                  onMouseLeave={() => setSolutionForOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-6 px-4" style={{ minWidth: '900px' }}>
                    {/* Column 1: PROJECT MANAGEMENT */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">PROJECT MANAGEMENT</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Site Survey</span>
                            <span className="block text-xs text-gray-500 mt-1">Smart recce and technical survey.</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Design Management</span>
                            <span className="block text-xs text-gray-500 mt-1">Manage designs, versions & mark changes</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Proposals & BOQ</span>
                            <span className="block text-xs text-gray-500 mt-1">Create & share BOQ with Clients</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Activity Schedule</span>
                            <span className="block text-xs text-gray-500 mt-1">Schedule activities, set deadlines and highlight dependencies</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Work Progress</span>
                            <span className="block text-xs text-gray-500 mt-1">Daily Reports & Live Status</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Audit & Handover</span>
                            <span className="block text-xs text-gray-500 mt-1">Snaglist, Joint Measurements & Handover documents</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Column 2: VENDOR MANAGEMENT */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">VENDOR MANAGEMENT</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Discover & Manage Vendors</span>
                            <span className="block text-xs text-gray-500 mt-1">Find most relevent vendors for your Job</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Manage Catalogues</span>
                            <span className="block text-xs text-gray-500 mt-1">BOQ templates & material libraries</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Rate Contracts</span>
                            <span className="block text-xs text-gray-500 mt-1">Create & Fetch RCs.</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Orders Management</span>
                            <span className="block text-xs text-gray-500 mt-1">Divide work among vendors</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Column 3: TASK MANAGEMENT */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">TASK MANAGEMENT</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Tasks & Reminders</span>
                            <span className="block text-xs text-gray-500 mt-1">Automate your Tasks</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Contextual Collaboration</span>
                            <span className="block text-xs text-gray-500 mt-1">Comment on specific incident or follow-ups</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] rounded transition-colors">
                            <span className="font-semibold">Manage Approvals</span>
                            <span className="block text-xs text-gray-500 mt-1">All your approvals in one place.</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* People We Support Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPeopleWeSupportOpen(true)}
              onMouseLeave={() => setPeopleWeSupportOpen(false)}
            >
              <button className="text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200 flex items-center">
                People We Support
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {peopleWeSupportOpen && (
                <div 
                  className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setPeopleWeSupportOpen(true)}
                  onMouseLeave={() => setPeopleWeSupportOpen(false)}
                >
                  <Link to="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] font-medium transition-colors">
                    Builders
                  </Link>
                  <Link to="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] font-medium transition-colors">
                    Contractor
                  </Link>
                  <Link to="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] font-medium transition-colors">
                    Interiors
                  </Link>
                  <Link to="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ffbe01] font-medium transition-colors">
                    Site Engineers
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#ffbe01] text-black px-6 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#ffbe01] focus:outline-none focus:text-[#ffbe01]"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.829a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.829z"/>
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              {/* Solution For Mobile */}
              <div>
                <button
                  onClick={() => setMobileSolutionOpen(!mobileSolutionOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
                >
                  Solution For
                  <svg className={`w-4 h-4 transform transition-transform ${mobileSolutionOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSolutionOpen && (
                  <div className="pl-6 pr-3 py-2 space-y-1 bg-gray-50">
                    <div className="mb-2">
                      <h4 className="text-xs font-bold text-gray-900 uppercase mb-2">PROJECT MANAGEMENT</h4>
                      <div className="space-y-1">
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Site Survey</span>
                          <span className="block text-xs text-gray-500">Smart recce and technical survey.</span>
                        </Link>
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Design Management</span>
                          <span className="block text-xs text-gray-500">Manage designs, versions & mark changes</span>
                        </Link>
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Proposals & BOQ</span>
                          <span className="block text-xs text-gray-500">Create & share BOQ with Clients</span>
                        </Link>
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Activity Schedule</span>
                          <span className="block text-xs text-gray-500">Schedule activities, set deadlines and highlight dependencies</span>
                        </Link>
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Work Progress</span>
                          <span className="block text-xs text-gray-500">Daily Reports & Live Status</span>
                        </Link>
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Audit & Handover</span>
                          <span className="block text-xs text-gray-500">Snaglist, Joint Measurements & Handover documents</span>
                        </Link>
                      </div>
                    </div>
                    <div className="mb-2">
                      <h4 className="text-xs font-bold text-gray-900 uppercase mb-2">VENDOR MANAGEMENT</h4>
                      <div className="space-y-1">
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Discover & Manage Vendors</span>
                          <span className="block text-xs text-gray-500">Find most relevent vendors for your Job</span>
                        </Link>
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Manage Catalogues</span>
                          <span className="block text-xs text-gray-500">BOQ templates & material libraries</span>
                        </Link>
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Rate Contracts</span>
                          <span className="block text-xs text-gray-500">Create & Fetch RCs.</span>
                        </Link>
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Orders Management</span>
                          <span className="block text-xs text-gray-500">Divide work among vendors</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 uppercase mb-2">TASK MANAGEMENT</h4>
                      <div className="space-y-1">
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Tasks & Reminders</span>
                          <span className="block text-xs text-gray-500">Automate your Tasks</span>
                        </Link>
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Contextual Collaboration</span>
                          <span className="block text-xs text-gray-500">Comment on specific incident or follow-ups</span>
                        </Link>
                        <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] rounded">
                          <span className="font-semibold">Manage Approvals</span>
                          <span className="block text-xs text-gray-500">All your approvals in one place.</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* People We Support Mobile */}
              <div>
                <button
                  onClick={() => setMobilePeopleOpen(!mobilePeopleOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
                >
                  People We Support
                  <svg className={`w-4 h-4 transform transition-transform ${mobilePeopleOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobilePeopleOpen && (
                  <div className="pl-6 pr-3 py-2 space-y-1 bg-gray-50">
                    <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] font-medium" onClick={closeMenu}>
                      Builders
                    </Link>
                    <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] font-medium" onClick={closeMenu}>
                      Contractor
                    </Link>
                    <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] font-medium" onClick={closeMenu}>
                      Interiors
                    </Link>
                    <Link to="#" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#ffbe01] font-medium" onClick={closeMenu}>
                      Site Engineers
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-[#ffbe01] font-medium transition-colors duration-200"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <div className="px-3 py-2">
                <Link
                  to="/contact"
                  className="bg-[#ffbe01] text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors duration-200 block text-center"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;