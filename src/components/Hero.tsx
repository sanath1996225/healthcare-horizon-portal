
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-50 -skew-y-6 translate-y-24 transform-gpu"></div>
      </div>
      
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg animate-fade-up">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
              <span>Medical Revenue Cycle Management</span>
            </div>
            
            <h1 className="mb-6 font-bold leading-tight text-navy-900">
              Maximizing Your <br />
              <span className="text-blue-600">Healthcare Revenue</span>
            </h1>
            
            <p className="mb-8 text-lg text-navy-700">
              Comprehensive revenue cycle management solutions designed to optimize 
              financial performance for healthcare providers of all sizes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2">
                <span>Get Started</span>
                <ArrowRight size={16} />
              </button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
          
          <div className="relative flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-intense">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/90 to-navy-500/80"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=750&q=80" 
                alt="Healthcare professionals"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 text-white text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Trusted by 400+</h3>
                  <p className="text-white/90">Healthcare Providers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
