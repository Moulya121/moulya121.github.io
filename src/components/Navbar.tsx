import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Left side: Brand Name */}
          <button
            className="flex-shrink-0 text-white text-xl font-bold select-none cursor-pointer bg-transparent border-none p-0"
            onClick={() => scrollToSection('hero')}
            aria-label="Scroll to top"
          >
            Moulya
          </button>

          {/* Right side: Hamburger + Desktop Menu */}
          <div className="flex items-center">
            {/* Hamburger: mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-300"></span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {['overview', 'skills', 'projects', 'activities', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors group"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative">
                    {item === 'overview' ? 'About Me' : item}
                    <span className="absolute left-0 bottom-0 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 w-full overflow-hidden"
          >
            <div className="flex flex-col items-end px-4 pb-4 pt-2 space-y-2">
              {['overview', 'skills', 'projects', 'activities', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium capitalize transition-colors w-full text-right"
                >
                  {item === 'overview' ? 'About Me' : item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

