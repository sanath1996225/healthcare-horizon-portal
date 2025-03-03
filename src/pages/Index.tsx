
import { ArrowRight, BarChart, DollarSign, CheckCircle, FileText, PieChart, Users, Clock, Activity, Shield, Award, BadgePercent, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import StatsCard from '@/components/StatsCard';
import AiFeaturesShowcase from '@/components/AiFeaturesShowcase';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import LeadQualifier from '@/components/LeadQualifier';
import Testimonial from '@/components/Testimonial';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                <span>Our Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                AI-Powered Revenue Cycle Management
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                Our comprehensive suite of AI-enhanced RCM solutions delivers exceptional results 
                through automation, predictive analytics, and intelligent workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Intelligent Claims Management"
                description="AI-powered claims processing with predictive denial prevention and automated scrubbing."
                icon={<FileText size={24} />}
                imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                link="#claims"
              />
              <ServiceCard 
                title="Smart Denials Management"
                description="Machine learning algorithms identify denial patterns and automate appeals for faster resolution."
                icon={<Activity size={24} />}
                imageSrc="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                link="#denials"
              />
              <ServiceCard 
                title="Predictive Analytics"
                description="Advanced forecasting and visualization tools that transform your data into actionable insights."
                icon={<BarChart size={24} />}
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                link="#analytics"
              />
              <ServiceCard 
                title="Virtual Patient Financial Counseling"
                description="AI-assisted communication tools to improve patient collections and satisfaction."
                icon={<Users size={24} />}
                imageSrc="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                link="#patient"
              />
              <ServiceCard 
                title="Automated Coding Optimization"
                description="NLP-powered coding assistance that ensures accuracy and optimizes reimbursement."
                icon={<DollarSign size={24} />}
                imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                link="#coding"
              />
              <ServiceCard 
                title="Compliance Intelligence"
                description="Real-time monitoring and AI-driven alerts to ensure regulatory compliance and prevent audits."
                icon={<Shield size={24} />}
                imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
                link="#compliance"
              />
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href="#contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <span>View all solutions</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section id="results" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                <span>Client Outcomes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                AI-Driven Performance Improvements
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                Our clients consistently achieve exceptional results through our AI-powered 
                revenue cycle management solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard 
                value="35%"
                label="Reduction in Denials"
                description="Through AI-powered prevention"
                icon={<Activity className="text-blue-600" size={24} />}
                accentColor="bg-blue-500"
                bgColor="bg-blue-50"
              />
              <StatsCard 
                value="22%"
                label="Decrease in A/R Days"
                description="Faster reimbursement cycles"
                icon={<Clock className="text-indigo-600" size={24} />}
                accentColor="bg-indigo-500"
                bgColor="bg-indigo-50"
                textColor="text-indigo-600"
              />
              <StatsCard 
                value="$4.2M"
                label="Average Revenue Lift"
                description="For mid-size practices"
                icon={<DollarSign className="text-purple-600" size={24} />}
                accentColor="bg-purple-500"
                bgColor="bg-purple-50"
                textColor="text-purple-600"
              />
              <StatsCard 
                value="98.2%"
                label="Clean Claim Rate"
                description="First-pass claim acceptance"
                icon={<CheckCircle className="text-sky-600" size={24} />}
                accentColor="bg-sky-500"
                bgColor="bg-sky-50"
                textColor="text-sky-600"
              />
            </div>
            
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <AnalyticsDashboard />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-navy-900">Real-Time Analytics & Insights</h3>
                <p className="text-navy-700 mb-6">
                  Our AI-powered analytics platform transforms complex healthcare data into 
                  actionable insights, helping you make informed decisions to optimize your 
                  revenue cycle performance.
                </p>
                <ul className="space-y-4">
                  {[
                    'Predictive forecasting of cash flow and revenue trends',
                    'AI-driven root cause analysis of denials and underpayments',
                    'Automated benchmarking against industry standards',
                    'Personalized recommendations for performance improvement',
                    'Real-time monitoring of key financial indicators'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-navy-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all shadow-sm hover:shadow flex items-center">
                  <span>Explore Analytics Platform</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Features Showcase */}
        <AiFeaturesShowcase />
        
        {/* Lead Qualifier Section */}
        <section id="assessment" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                <span>Find Your Solution</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                Personalized RCM Assessment
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                Answer a few questions about your practice to receive AI-tailored recommendations 
                for optimizing your revenue cycle.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <LeadQualifier />
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                <span>Success Stories</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                Trusted by Healthcare Leaders
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                See how our AI-powered RCM solutions have transformed financial 
                performance for healthcare organizations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Testimonial 
                quote="The AI-driven denial prevention has been a game-changer. We've seen a 42% reduction in denials and recovered over $2.3M in previously uncollected revenue."
                author="Dr. Sarah Johnson"
                position="CEO"
                company="Northwest Medical Group"
                imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
              />
              <Testimonial 
                quote="The predictive analytics dashboard gives us unprecedented visibility into our financial performance. We can now forecast revenue with 94% accuracy."
                author="Michael Chen"
                position="CFO"
                company="Pacific Healthcare Partners"
                imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
              />
              <Testimonial 
                quote="Implementing the AI coding assistant has increased our clean claim rate to 98.7% and reduced our A/R days by 15. The ROI has been remarkable."
                author="Dr. Rebecca Martinez"
                position="Practice Manager"
                company="Valley Medical Center"
                imageSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
              />
            </div>
            
            <div className="mt-16 bg-blue-600 rounded-xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6A0DAD]/30 rounded-full -translate-y-1/4 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/40 rounded-full translate-y-1/4 -translate-x-1/4"></div>
              
              <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Transform Your Revenue Cycle?</h3>
                <p className="text-blue-100 mb-8">
                  Join the hundreds of healthcare organizations that have revolutionized their 
                  financial performance with our AI-powered RCM platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg">
                    Request Demo
                  </button>
                  <button className="bg-transparent hover:bg-blue-700 text-white border border-white font-medium py-3 px-8 rounded-md transition-all">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  <span>Get Started</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-navy-900">
                  Transform Your Revenue Cycle with AI
                </h2>
                <p className="text-lg text-navy-700 mb-8">
                  Contact us today for a personalized demo and discover how our AI-powered 
                  platform can revolutionize your healthcare organization's financial performance.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Zap className="text-blue-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-navy-900">AI Revenue Assessment</h4>
                      <p className="text-navy-700">
                        Get a comprehensive analysis of your revenue cycle with AI-identified opportunities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="text-blue-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-navy-900">Performance Guarantee</h4>
                      <p className="text-navy-700">
                        We're so confident in our results, we offer a performance-based pricing option.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Users className="text-blue-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-navy-900">Dedicated AI Support Team</h4>
                      <p className="text-navy-700">
                        Work with revenue cycle experts and AI specialists who understand healthcare.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-4">
                    <Award className="text-blue-600 h-6 w-6 mr-2" />
                    <h4 className="text-lg font-medium text-navy-900">Industry Recognition</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {['HFMA', 'HIMSS', 'MGMA'].map((award, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg text-center">
                        <p className="text-sm font-medium text-navy-900">{award}</p>
                        <p className="text-xs text-navy-600">Certified</p>
                      </div>
                    ))}
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
