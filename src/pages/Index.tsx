
import { ArrowRight, BarChart, DollarSign, CheckCircle, FileText, PieChart, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Testimonial from '@/components/Testimonial';
import StatsCard from '@/components/StatsCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Services Section */}
        <section id="services" className="section bg-gray-50">
          <div className="container">
            <div className="section-title">
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                <span>Our Core Services</span>
              </div>
              <h2>Comprehensive Revenue Cycle Solutions</h2>
              <p>
                We deliver end-to-end revenue cycle management solutions designed 
                to optimize financial performance for healthcare organizations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <ServiceCard 
                title="Revenue Cycle Management"
                description="End-to-end RCM solutions that streamline operations from patient registration to payment collection."
                icon={<DollarSign size={24} />}
              />
              <ServiceCard 
                title="Claims Management"
                description="Advanced claims processing and submission to maximize clean claim rates and minimize denials."
                icon={<FileText size={24} />}
              />
              <ServiceCard 
                title="Denial Management"
                description="Proactive denial prevention and strategic appeals process to recover lost revenue."
                icon={<CheckCircle size={24} />}
              />
              <ServiceCard 
                title="Patient Financial Services"
                description="Patient-friendly billing solutions that improve collection rates and enhance satisfaction."
                icon={<Users size={24} />}
              />
              <ServiceCard 
                title="Financial Analytics"
                description="Data-driven insights and reporting to identify trends and optimize financial performance."
                icon={<BarChart size={24} />}
              />
              <ServiceCard 
                title="Performance Optimization"
                description="Continuous process improvement and benchmarking to drive operational excellence."
                icon={<PieChart size={24} />}
              />
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="#solutions" 
                className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
              >
                <span>Explore all solutions</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section id="results" className="section">
          <div className="container">
            <div className="section-title">
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                <span>Real Results</span>
              </div>
              <h2>Driving Financial Performance</h2>
              <p>
                Our solutions consistently deliver measurable results for healthcare organizations of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <StatsCard 
                value="98.5%"
                label="Clean Claim Rate"
                description="Industry average is 75-85%"
              />
              <StatsCard 
                value="32%"
                label="Denial Reduction"
                description="Average client improvement"
              />
              <StatsCard 
                value="$4.2M"
                label="Average Annual Savings"
                description="For mid-size hospitals"
              />
              <StatsCard 
                value="12 Days"
                label="Reduced A/R Days"
                description="Average improvement"
              />
            </div>
            
            <div className="mt-16 bg-blue-50 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Proven Results Across the Healthcare Spectrum</h3>
                  <p className="text-navy-700 mb-6">
                    From small physician practices to large hospital systems, our solutions adapt 
                    to your unique needs while delivering consistent financial improvement.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Reduced operating costs by optimizing staffing and workflows',
                      'Increased net collections through improved first-pass resolution',
                      'Enhanced cash flow with accelerated reimbursement timelines',
                      'Improved patient satisfaction with transparent billing practices'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-blue-500 mr-2 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary mt-8">View Case Studies</button>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-intense">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=750&q=80" 
                      alt="Healthcare analytics dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="section bg-gray-50">
          <div className="container">
            <div className="section-title">
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                <span>Client Success</span>
              </div>
              <h2>Trusted by Leading Healthcare Organizations</h2>
              <p>
                Hear what our clients have to say about their experience working with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Testimonial 
                quote="Their team really understands the complexities of healthcare revenue cycles. Within six months, we saw a 28% increase in our clean claim rate and a significant reduction in A/R days."
                author="Dr. Sarah Johnson"
                position="CFO"
                company="Northside Medical Center"
              />
              <Testimonial 
                quote="The analytics dashboards provide our leadership team with real-time insights that have transformed our financial decision-making process."
                author="Michael Chen"
                position="Revenue Cycle Director"
                company="Valley Health System"
              />
              <Testimonial 
                quote="Not only did they help us improve our bottom line, but they also enhanced our patients' financial experience. It's rare to find a partner that excels at both."
                author="Jennifer Martinez"
                position="CEO"
                company="Westside Medical Group"
              />
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  <span>Get Started</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-navy-900">
                  Ready to Transform Your Revenue Cycle?
                </h2>
                <p className="text-lg text-navy-700 mb-8">
                  Contact us today to learn how our solutions can be tailored to your organization's unique needs.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-blue-500 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-navy-900">Free Assessment</h4>
                      <p className="text-navy-700">
                        Get a complimentary analysis of your current revenue cycle performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-blue-500 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-navy-900">Custom Solution Design</h4>
                      <p className="text-navy-700">
                        Receive a tailored plan designed specifically for your organization's needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-blue-500 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-navy-900">Dedicated Support</h4>
                      <p className="text-navy-700">
                        Work with a dedicated team of healthcare financial experts throughout implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
