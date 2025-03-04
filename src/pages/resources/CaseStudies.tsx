
import React from 'react';
import { ArrowRight, Download, FileText, Users, BarChart2, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                <span>Success Stories</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Client Case Studies
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Discover how healthcare organizations have transformed their revenue cycle
                performance with our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg flex items-center">
                  <span>Download All Case Studies</span>
                  <Download size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Case Study */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  <span>Featured Success Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6">
                  Northeast Medical Group Achieves 42% Reduction in Denials
                </h2>
                <p className="text-lg text-navy-700 mb-6">
                  Learn how this 350-physician medical group transformed their revenue cycle 
                  with AI-powered denial prevention and claims optimization.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                      <Users size={16} />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Organization Type</span>
                      <p className="font-medium text-navy-900">Multi-specialty Medical Group</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                      <BarChart2 size={16} />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Key Results</span>
                      <p className="font-medium text-navy-900">42% Denial Reduction, $3.2M Additional Revenue</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                      <Shield size={16} />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Solutions Used</span>
                      <p className="font-medium text-navy-900">Claims Processing, Denial Management, Analytics</p>
                    </div>
                  </div>
                </div>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all shadow-sm hover:shadow flex items-center">
                  <span>Read Full Case Study</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
              
              <div className="bg-gray-100 rounded-xl p-4 h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  [Case Study Image]
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                Client Success Stories
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                Explore how healthcare organizations across various specialties have optimized 
                their revenue cycle performance with our AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Valley Hospital Reduces A/R Days by 35%",
                  type: "Hospital",
                  focus: "Claims Management & Denial Prevention",
                  result: "35% reduction in A/R days, $4.2M cash flow improvement"
                },
                {
                  title: "Pacific Radiology Increases Clean Claim Rate to 98.7%",
                  type: "Radiology Practice",
                  focus: "Claims Optimization & Coding Accuracy",
                  result: "98.7% clean claim rate, 24% revenue increase"
                },
                {
                  title: "Midwest Pediatrics Transforms Patient Billing",
                  type: "Pediatric Group Practice",
                  focus: "Patient Financial Experience",
                  result: "32% improvement in patient collections, 95% satisfaction"
                },
                {
                  title: "Southern Medical Center Optimizes Revenue Forecasting",
                  type: "Academic Medical Center",
                  focus: "Financial Analytics & Reporting",
                  result: "93% forecasting accuracy, improved cash management"
                },
                {
                  title: "Coastal Orthopedics Automates Denial Management",
                  type: "Orthopedic Practice",
                  focus: "Denial Management & Appeals",
                  result: "68% reduction in write-offs, $1.8M additional revenue"
                },
                {
                  title: "Mountain View Network Implements AI Revenue Cycle",
                  type: "Healthcare Network",
                  focus: "End-to-End RCM Optimization",
                  result: "18% revenue lift, 28% operational cost reduction"
                }
              ].map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      [Case Study Image]
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-navy-900">{study.title}</h3>
                    
                    <div className="mb-3">
                      <span className="text-sm text-gray-500">Organization Type</span>
                      <p className="font-medium text-navy-900">{study.type}</p>
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-sm text-gray-500">Focus Area</span>
                      <p className="font-medium text-navy-900">{study.focus}</p>
                    </div>
                    
                    <div className="mb-5">
                      <span className="text-sm text-gray-500">Key Results</span>
                      <p className="font-medium text-navy-900">{study.result}</p>
                    </div>
                    
                    <a href="#read-more" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      <span>Read case study</span>
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Schedule a consultation to discuss how our AI-powered RCM solutions
                can transform your healthcare organization's financial performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg">
                  Schedule Consultation
                </button>
                <button className="bg-transparent hover:bg-blue-700 text-white border border-white font-medium py-3 px-8 rounded-md transition-all">
                  Download Case Studies
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

export default CaseStudies;
