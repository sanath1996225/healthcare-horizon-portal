
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
          <span className="text-2xl font-bold text-navy-900">RevenueCare</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Services', 'Solutions', 'About', 'Resources', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-navy-800 hover:text-blue-500 font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="btn-primary">Request Demo</button>
        </nav>
        
        <button 
          className="md:hidden text-navy-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          'md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-[400px] border-b' : 'max-h-0'
        )}
      >
        <div className="container py-4 flex flex-col space-y-4">
          {['Services', 'Solutions', 'About', 'Resources', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-navy-800 hover:text-blue-500 font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="btn-primary mt-2 self-start">Request Demo</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
