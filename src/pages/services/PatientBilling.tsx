
import React from 'react';
import { ArrowRight, CreditCard, UserCheck, MessageSquare, PhoneCall, PieChart, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PatientBilling = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-sky-500 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                <span>Patient Financial Experience</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intelligent Patient Billing Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform your patient financial experience with AI-powered communication, 
                flexible payment options, and personalized engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg">
                  Request Demo
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-white border border-white font-medium py-3 px-8 rounded-md transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                Reimagine Patient Financial Engagement
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                Our AI-powered patient billing platform increases collections while improving 
                satisfaction through personalized communication and payment options.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Increased Collections",
                  description: "Average 23% improvement in patient payment rates through personalized engagement",
                  icon: <CreditCard className="text-blue-600 h-8 w-8" />
                },
                {
                  title: "Enhanced Satisfaction",
                  description: "95% patient satisfaction with easy-to-understand statements and payment options",
                  icon: <UserCheck className="text-blue-600 h-8 w-8" />
                },
                {
                  title: "Reduced Costs",
                  description: "Cut billing-related administrative costs by up to 35% through automation",
                  icon: <PieChart className="text-blue-600 h-8 w-8" />
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-900">{benefit.title}</h3>
                  <p className="text-navy-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                Intelligent Patient Billing Features
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                Our comprehensive billing platform combines AI-powered communication with 
                flexible payment options to optimize the patient financial experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Patient Statements",
                  description: "AI-generated, easy-to-understand statements with personalized messaging.",
                  icon: <MessageSquare className="text-blue-600 h-6 w-6" />
                },
                {
                  title: "Digital Payment Portal",
                  description: "Mobile-friendly portal with multiple payment options and saved payment methods.",
                  icon: <CreditCard className="text-blue-600 h-6 w-6" />
                },
                {
                  title: "Automated Payment Plans",
                  description: "Intelligent payment plan recommendations based on balance and patient financial profile.",
                  icon: <Zap className="text-blue-600 h-6 w-6" />
                },
                {
                  title: "Personalized Communication",
                  description: "AI-driven outreach via email, text, or phone based on patient preferences.",
                  icon: <PhoneCall className="text-blue-600 h-6 w-6" />
                },
                {
                  title: "Financial Counseling AI",
                  description: "Automated assistance for patients to understand their bills and coverage.",
                  icon: <UserCheck className="text-blue-600 h-6 w-6" />
                },
                {
                  title: "Performance Analytics",
                  description: "Comprehensive dashboards showing collection rates, payment trends, and patient engagement.",
                  icon: <PieChart className="text-blue-600 h-6 w-6" />
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-900">{feature.title}</h3>
                  <p className="text-navy-700 mb-4">{feature.description}</p>
                  <a href="#learn-more" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    <span>Learn more</span>
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  <span>Client Outcomes</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6">
                  Proven Results for Healthcare Providers
                </h2>
                <p className="text-lg text-navy-700 mb-8">
                  Our intelligent patient billing platform delivers measurable improvements
                  in collections, patient satisfaction, and operational efficiency.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      stat: "23%",
                      description: "Average increase in patient collection rates"
                    },
                    {
                      stat: "35%",
                      description: "Reduction in days in accounts receivable"
                    },
                    {
                      stat: "95%",
                      description: "Patient satisfaction with billing experience"
                    },
                    {
                      stat: "42%",
                      description: "Decrease in billing-related phone calls"
                    }
                  ].map((result, index) => (
                    <div key={index} className="flex">
                      <div className="w-16 text-2xl font-bold text-blue-600">{result.stat}</div>
                      <div className="flex-1 text-navy-700">{result.description}</div>
                    </div>
                  ))}
                </div>
                
                <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all shadow-sm hover:shadow flex items-center">
                  <span>View Case Studies</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
              
              <div className="bg-gray-100 rounded-xl p-8 h-[480px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  [Patient Payment Portal Interface]
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-navy-900">
                  What Our Clients Say
                </h2>
              </div>
              
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-md relative">
                <div className="text-5xl text-blue-200 absolute top-6 left-8">"</div>
                <div className="relative z-10">
                  <p className="text-lg md:text-xl text-navy-700 mb-6 italic">
                    The patient billing platform has completely transformed our revenue cycle. 
                    We've seen a 27% increase in patient collections while reducing our 
                    billing-related call volume by nearly half. Our patients appreciate 
                    the clear communication and flexible payment options.
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold text-navy-900">Sarah Johnson, CFO</p>
                      <p className="text-navy-700">Northeast Medical Center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to Transform Your Patient Financial Experience?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of healthcare organizations that have improved collections
                and patient satisfaction with our intelligent billing platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg">
                  Request Demo
                </button>
                <button className="bg-transparent hover:bg-blue-700 text-white border border-white font-medium py-3 px-8 rounded-md transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PatientBilling;
