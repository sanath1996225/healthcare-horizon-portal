
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Social media links
  const socialLinks = [
    { name: 'facebook', icon: <Facebook size={18} />, url: 'https://www.facebook.com/revenuecare' },
    { name: 'twitter', icon: <Twitter size={18} />, url: 'https://www.twitter.com/revenuecare' },
    { name: 'linkedin', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/company/revenuecare' },
    { name: 'instagram', icon: <Instagram size={18} />, url: 'https://www.instagram.com/revenuecare' }
  ];

  // Service links with proper navigation
  const serviceLinks = [
    { name: 'Revenue Cycle Management', url: '/#services', exists: true },
    { name: 'Claims Processing', url: '/services/claims-processing', exists: false },
    { name: 'Denial Management', url: '/services/denial-management', exists: false },
    { name: 'Patient Billing', url: '/services/patient-billing', exists: false },
    { name: 'Financial Reporting', url: '/services/financial-reporting', exists: false }
  ];

  // Resource links
  const resourceLinks = [
    { name: 'Case Studies', url: '/resources/case-studies', exists: false },
    { name: 'Blog', url: '/resources/blog', exists: false },
    { name: 'Webinars', url: '/resources/webinars', exists: false },
    { name: 'Industry Reports', url: '/resources/industry-reports', exists: false },
    { name: 'FAQ', url: '/resources/faq', exists: false }
  ];

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
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  aria-label={`Visit our ${social.name} page`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  {service.exists ? (
                    <a 
                      href={service.url}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {service.name}
                    </a>
                  ) : (
                    <Link 
                      to={service.url}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {service.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    to={resource.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {resource.name}
                  </Link>
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
                <Link 
                  key={item}
                  to={`/legal/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
