
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 pt-16 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">RevenueCare</h4>
            <p className="text-gray-300 mb-6">
              Optimizing healthcare financial performance with innovative solutions.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {[
                'Revenue Cycle Management',
                'Claims Processing',
                'Denial Management',
                'Patient Billing',
                'Financial Reporting'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              {[
                'Case Studies',
                'Blog',
                'Webinars',
                'Industry Reports',
                'FAQ'
              ].map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  123 Healthcare Avenue<br />
                  Suite 200<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+18005551234" className="text-gray-300 hover:text-white transition-colors">
                  (800) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@revenuecare.com" className="text-gray-300 hover:text-white transition-colors">
                  info@revenuecare.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} RevenueCare. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a 
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
