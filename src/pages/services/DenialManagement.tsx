
import React from 'react';
import { ArrowRight, BarChart2, CheckCircle, Filter, RotateCcw, Shield, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DenialManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                <span>RCM Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Denial Management
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Recover lost revenue and prevent future denials with our intelligent
                denial management solution powered by machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-indigo-600 font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg">
                  Schedule Demo
                </button>
                <button className="bg-transparent hover:bg-indigo-700 text-white border border-white font-medium py-3 px-8 rounded-md transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "35%", label: "Average Denial Reduction" },
                { value: "89%", label: "Appeal Success Rate" },
                { value: "42%", label: "Faster Resolution Time" },
                { value: "$3.2M", label: "Avg. Annual Recovery" }
              ].map((stat, index) => (
                <div key={index} className="p-6 rounded-xl border border-gray-100 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-navy-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                Intelligent Denial Management Features
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                Our AI-powered platform transforms denial management from reactive to proactive,
                identifying patterns and preventing denials before they occur.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Root Cause Analysis",
                  description: "AI algorithms identify underlying patterns and systemic issues causing denials.",
                  icon: <Filter className="text-indigo-600 h-6 w-6" />
                },
                {
                  title: "Automated Appeal Generation",
                  description: "Intelligent templates and documentation assembly for faster appeals.",
                  icon: <Zap className="text-indigo-600 h-6 w-6" />
                },
                {
                  title: "Predictive Prevention",
                  description: "Machine learning models flag high-risk claims before submission.",
                  icon: <BarChart2 className="text-indigo-600 h-6 w-6" />
                },
                {
                  title: "Denial Workflow Automation",
                  description: "Smart routing of denials to appropriate specialists for resolution.",
                  icon: <RotateCcw className="text-indigo-600 h-6 w-6" />
                },
                {
                  title: "Payer Policy Monitoring",
                  description: "Continuous updates to stay aligned with changing payer requirements.",
                  icon: <Shield className="text-indigo-600 h-6 w-6" />
                },
                {
                  title: "Performance Analytics",
                  description: "Comprehensive reporting on denial trends and financial impact.",
                  icon: <CheckCircle className="text-indigo-600 h-6 w-6" />
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-900">{feature.title}</h3>
                  <p className="text-navy-700 mb-4">{feature.description}</p>
                  <a href="#learn-more" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                    <span>Learn more</span>
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                  Our AI-Driven Approach to Denial Management
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-navy-700">
                  We combine artificial intelligence with revenue cycle expertise to create
                  a comprehensive denial management solution.
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100 hidden md:block"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {[
                    {
                      title: "Denial Prevention",
                      description: "Our AI identifies high-risk claims before submission and recommends corrective actions to prevent denials.",
                      align: "left"
                    },
                    {
                      title: "Automated Detection",
                      description: "When denials occur, our system automatically categorizes them by type, reason, and financial impact for prioritized handling.",
                      align: "right"
                    },
                    {
                      title: "Intelligent Appeals",
                      description: "AI-powered templates generate customized appeals with supporting documentation and payer-specific requirements.",
                      align: "left"
                    },
                    {
                      title: "Performance Analytics",
                      description: "Comprehensive dashboards track appeal success rates, denial patterns, and revenue impact across your organization.",
                      align: "right"
                    }
                  ].map((item, index) => (
                    <div key={index} className="relative flex items-center">
                      <div className={`hidden md:block w-1/2 ${item.align === 'right' ? 'md:pr-12' : 'md:pl-12 order-1'}`}>
                        {item.align === 'left' && (
                          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">{item.title}</h3>
                            <p className="text-navy-700">{item.description}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white relative z-10 mx-auto">
                        {index + 1}
                      </div>
                      
                      <div className={`md:w-1/2 ${item.align === 'left' ? 'md:pr-12' : 'md:pl-12 order-1'}`}>
                        <div className="md:hidden flex items-center mb-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white mr-4">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold text-navy-900">{item.title}</h3>
                        </div>
                        
                        {(item.align === 'right' || window.innerWidth < 768) && (
                          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="hidden md:block text-xl font-semibold mb-3 text-navy-900">{item.title}</h3>
                            <p className="text-navy-700">{item.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to Transform Your Denial Management?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join healthcare organizations that have reduced denials by up to 35%
                and recovered millions in previously lost revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-indigo-600 font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg">
                  Request Demo
                </button>
                <button className="bg-transparent hover:bg-indigo-700 text-white border border-white font-medium py-3 px-8 rounded-md transition-all">
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

export default DenialManagement;
