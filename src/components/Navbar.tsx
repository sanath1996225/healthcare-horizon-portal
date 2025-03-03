
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import NaturalLanguageSearch from './NaturalLanguageSearch';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-navy-900">MedRCM<span className="text-blue-600">AI</span></span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#services"
            className="text-navy-800 hover:text-blue-500 font-medium transition-colors"
          >
            Services
          </a>
          <a 
            href="#technology"
            className="text-navy-800 hover:text-blue-500 font-medium transition-colors"
          >
            Technology
          </a>
          <a 
            href="#about"
            className="text-navy-800 hover:text-blue-500 font-medium transition-colors"
          >
            About Us
          </a>
          <a 
            href="#testimonials"
            className="text-navy-800 hover:text-blue-500 font-medium transition-colors"
          >
            Success Stories
          </a>
          <a 
            href="#contact"
            className="text-navy-800 hover:text-blue-500 font-medium transition-colors"
          >
            Contact Us
          </a>
          
          <NaturalLanguageSearch />
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all shadow-sm hover:shadow">
            Request Demo
          </button>
        </nav>
        
        <div className="flex items-center md:hidden">
          <NaturalLanguageSearch />
          
          <button 
            className="ml-4 text-navy-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          'md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-[400px] border-b' : 'max-h-0'
        )}
      >
        <div className="container py-4 flex flex-col space-y-4">
          <a 
            href="#services"
            className="text-navy-800 hover:text-blue-500 font-medium py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#technology"
            className="text-navy-800 hover:text-blue-500 font-medium py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Technology
          </a>
          <a 
            href="#about"
            className="text-navy-800 hover:text-blue-500 font-medium py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#testimonials"
            className="text-navy-800 hover:text-blue-500 font-medium py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Success Stories
          </a>
          <a 
            href="#contact"
            className="text-navy-800 hover:text-blue-500 font-medium py-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all shadow-sm hover:shadow self-start">
            Request Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
