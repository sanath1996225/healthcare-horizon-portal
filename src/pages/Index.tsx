
import { ArrowRight, BarChart, DollarSign, CheckCircle, FileText, PieChart, Users, Clock, Activity, Shield, Award, BadgePercent, Zap } from 'lucide-react';
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
              <h2>End-to-End Revenue Cycle Solutions</h2>
              <p>
                We deliver comprehensive revenue cycle management solutions designed 
                to maximize reimbursements and optimize financial performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <ServiceCard 
                title="Medical Billing"
                description="Expert handling of the complete billing cycle from claim submission to payment posting and reconciliation."
                icon={<DollarSign size={24} />}
                imageSrc="https://images.unsplash.com/photo-1583912086096-8c60d75a13e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
              />
              <ServiceCard 
                title="Eligibility Verification"
                description="Thorough insurance verification to ensure coverage and reduce claim denials before services are provided."
                icon={<CheckCircle size={24} />}
                imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
              />
              <ServiceCard 
                title="Claim Processing"
                description="Efficient claim creation, submission and tracking to accelerate reimbursement and minimize rejections."
                icon={<FileText size={24} />}
                imageSrc="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
              />
              <ServiceCard 
                title="Denial Management"
                description="Strategic appeals process with root cause analysis to recover denied claims and prevent future denials."
                icon={<Activity size={24} />}
                imageSrc="https://images.unsplash.com/photo-1606202634080-4db5ddf022e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
              />
              <ServiceCard 
                title="Patient Billing"
                description="Clear, compassionate patient billing services that improve collection rates and patient satisfaction."
                icon={<Users size={24} />}
                imageSrc="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
              />
              <ServiceCard 
                title="Practice Analytics"
                description="Insightful financial reporting and analytics to identify trends and optimize your revenue cycle."
                icon={<BarChart size={24} />}
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
              />
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="#solutions" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
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
                <span>Proven Results</span>
              </div>
              <h2>Measurable Financial Improvements</h2>
              <p>
                Our solutions deliver consistent, measurable results for healthcare practices of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <StatsCard 
                value="97%"
                label="First-Pass Claim Rate"
                description="Industry average is 75-85%"
                icon={<Award className="text-blue-600" size={24} />}
                accentColor="bg-blue-500"
              />
              <StatsCard 
                value="35%"
                label="Reduction in A/R Days"
                description="Average client improvement"
                icon={<BadgePercent className="text-indigo-600" size={24} />}
                accentColor="bg-indigo-500"
              />
              <StatsCard 
                value="$3.8M"
                label="Additional Revenue"
                description="Per year for mid-size practices"
                icon={<DollarSign className="text-sky-600" size={24} />}
                accentColor="bg-sky-500"
              />
              <StatsCard 
                value="24/7"
                label="Support & Monitoring"
                description="For all clients"
                icon={<Clock className="text-violet-600" size={24} />}
                accentColor="bg-violet-500"
              />
            </div>
            
            <div className="mt-16 bg-blue-50 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Our Commitment to Excellence</h3>
                  <p className="text-navy-700 mb-6">
                    At MedRCM360, we understand the unique challenges healthcare providers face in today's complex reimbursement landscape. Our tailored solutions deliver:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Increased collection rates through optimized billing workflows',
                      'Accelerated cash flow with faster reimbursement cycles',
                      'Reduced denials through proactive eligibility verification',
                      'Complete visibility with comprehensive reporting and analytics'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-primary mt-8">View Client Success Stories</button>
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
        
        {/* Data Driven Solutions Section */}
        <section id="data-driven" className="section bg-gradient-to-r from-blue-900 to-navy-900 text-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-blue-800 bg-opacity-50 px-3 py-1 text-sm font-medium text-blue-200">
                  <span>Data-Driven Approach</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
                  Technology-Enabled Revenue Cycle Management
                </h2>
                <p className="text-lg text-blue-100 mb-8">
                  Our advanced analytics platform transforms raw data into actionable insights, helping you make informed decisions to optimize your revenue cycle.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-800 bg-opacity-30 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Zap className="text-blue-300 mr-3" size={24} />
                      <h4 className="text-xl font-medium text-white">Predictive Analytics</h4>
                    </div>
                    <p className="text-blue-100">Anticipate payment obstacles before they occur</p>
                  </div>
                  
                  <div className="bg-blue-800 bg-opacity-30 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <PieChart className="text-blue-300 mr-3" size={24} />
                      <h4 className="text-xl font-medium text-white">Performance Metrics</h4>
                    </div>
                    <p className="text-blue-100">Track key indicators with customizable dashboards</p>
                  </div>
                </div>
                
                <button className="bg-white text-blue-800 hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition-all shadow-sm hover:shadow inline-flex items-center">
                  <span>Schedule a Demo</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=750&q=80" 
                    alt="Data Analytics Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-blue-700 p-4 rounded-xl shadow-lg w-48">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                      <BarChart className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200">Average increase</p>
                      <p className="text-xl font-bold text-white">+42%</p>
                      <p className="text-xs text-blue-200">in collections</p>
                    </div>
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
              <h2>Trusted by Healthcare Providers</h2>
              <p>
                Our clients consistently report improved financial outcomes and operational efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Testimonial 
                quote="MedRCM360 transformed our revenue cycle. Our clean claims rate increased by 23% and we've seen a significant reduction in days in A/R."
                author="Dr. Robert Williams"
                position="Medical Director"
                company="Pacific Medical Group"
                imageSrc="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
              />
              <Testimonial 
                quote="The analytics platform provides our team with invaluable insights. We can now make data-driven decisions that have improved our bottom line."
                author="Lisa Chen"
                position="Practice Manager"
                company="Valley Health Partners"
                imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
              />
              <Testimonial 
                quote="Switching to MedRCM360 was the best decision we made. Their team is responsive, knowledgeable, and truly cares about our practice's success."
                author="Dr. James Rodriguez"
                position="Owner"
                company="Wellness Medical Center"
                imageSrc="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
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
                  Ready to Optimize Your Revenue Cycle?
                </h2>
                <p className="text-lg text-navy-700 mb-8">
                  Contact us today for a complimentary practice assessment and discover how MedRCM360 can improve your financial performance.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-blue-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-navy-900">Free Practice Assessment</h4>
                      <p className="text-navy-700">
                        Get a comprehensive analysis of your current revenue cycle performance at no cost.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="text-blue-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-navy-900">No Long-Term Contracts</h4>
                      <p className="text-navy-700">
                        We earn your business every month with performance-based services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Users className="text-blue-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-navy-900">Dedicated Account Team</h4>
                      <p className="text-navy-700">
                        Work with a team of specialists who understand your unique practice needs.
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
