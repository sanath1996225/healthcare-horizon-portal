
import { ArrowRight, BarChart2, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-50 -skew-y-6 translate-y-24 transform-gpu"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full opacity-60 blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-100 rounded-full opacity-60 blur-xl"></div>
      </div>
      
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg animate-fade-up">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
              <span>AI-Powered Revenue Cycle Management</span>
            </div>
            
            <h1 className="mb-6 font-bold leading-tight text-navy-900">
              Transform Your <br />
              <span className="text-blue-600">Healthcare Revenue</span>
              <span className="text-[#6A0DAD]"> With AI</span>
            </h1>
            
            <p className="mb-8 text-lg text-navy-700">
              Our intelligent RCM platform uses AI and predictive analytics to automate claims, 
              reduce denials, and accelerate reimbursements for healthcare providers.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Reduce claim denials by up to 35%',
                'Increase collections by 12-15%',
                'Shorten A/R days by 20-25%'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-navy-800">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-all shadow-sm hover:shadow flex items-center">
                <span>Get Started</span>
                <ArrowRight size={16} className="ml-2" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-navy-900 font-medium py-3 px-8 rounded-md transition-all border border-gray-200 shadow-sm hover:shadow">
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="relative flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-intense">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/90 to-[#6A0DAD]/80"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=750&q=80" 
                alt="Healthcare professionals"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 text-white text-center">
                  <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                    <BarChart2 size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">$4.2M+</h3>
                  <p className="text-white/90">Additional Revenue Generated</p>
                  <p className="text-white/80 text-sm mt-1">for the average client in 2023</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-[180px]">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-navy-900 font-medium">97% First-Pass</p>
                  <p className="text-navy-600 text-sm">Claim Rate</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-[#6A0DAD] p-3 rounded-xl shadow-lg text-white">
              <p className="text-sm font-medium">AI-Powered</p>
              <p className="text-xs opacity-80">Predictive Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
