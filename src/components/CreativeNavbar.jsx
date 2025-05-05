import { useState, useEffect } from 'react';

const CreativeNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-2 backdrop-blur-lg bg-gray-900/90 border-b border-gray-800' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-0">
        <div className="flex justify-between items-center">
          {/* 3D Logo */}
          <div className="relative">
            <div className="logo-3d relative px-3 py-0 bg-indigo-600 text-white font-bold text-xl rounded cursor-pointer transform-style-preserve-3d transition-all duration-500 hover:rotate-y-5">
              Gunja Durgarao
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-pink-500 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Home', 'About', 'Skills','Projects', 'Certifications', 'Education&WorkExperience','Github-Stats', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="navbar-item text-white font-medium px-3 py-2 rounded-lg hover:text-indigo-300 relative group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left delay-100"></span>
              </a>
            ))}

            {/* "Hire Me" Button - Desktop */}
            <a
              href="#contact"
              className="relative px-6 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hamburger text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                isMenuOpen ? 'transform rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
              }`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'py-4 max-h-screen' : 'py-0 max-h-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-4 mt-4 px-2 overflow-y-auto max-h-[80vh]">
            {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Education&WorkExperience', 'Github-Stats', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 hover:text-indigo-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 w-full text-center py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .navbar-item {
          transform-style: preserve-3d;
          transition: all 0.5s ease;
        }
        .navbar-item:hover {
          transform: rotateX(20deg) translateY(-5px);
        }
        .logo-3d {
          transform-style: preserve-3d;
          transition: all 0.5s ease;
        }
        .logo-3d:hover {
          transform: rotateY(15deg);
        }
        .logo-3d::before {
          content: '';
          position: absolute;
          top: 0;
          left: -5px;
          width: 5px;
          height: 100%;
          background: #4f46e5;
          transform-origin: right;
          transform: rotateY(90deg);
          border-radius: 5px 0 0 5px;
        }
        .logo-3d::after {
          content: '';
          position: absolute;
          top: -5px;
          left: 0;
          width: 100%;
          height: 5px;
          background: #4338ca;
          transform-origin: bottom;
          transform: rotateX(90deg);
          border-radius: 5px 5px 0 0;
        }
      `}</style>
    </nav>
  );
};

export default CreativeNavbar;
