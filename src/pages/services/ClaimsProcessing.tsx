
import React from 'react';
import { ArrowRight, CheckCircle, FileText, PieChart, Shield, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ClaimsProcessing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                <span>RCM Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Claims Processing
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Streamline your claims lifecycle with intelligent automation and real-time analytics
                for improved cash flow and reduced denials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg">
                  Request Demo
                </button>
                <button className="bg-transparent hover:bg-blue-700 text-white border border-white font-medium py-3 px-8 rounded-md transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                Intelligent Claims Management Features
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                Our AI-powered claims processing solution optimizes every step of the claims
                lifecycle to maximize reimbursement and minimize delays.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Claim Scrubbing",
                  description: "Machine learning algorithms identify and correct errors before submission to prevent denials.",
                  icon: <Shield className="text-blue-600 h-6 w-6" />
                },
                {
                  title: "Real-time Eligibility Verification",
                  description: "Automated insurance verification ensures patient coverage before service delivery.",
                  icon: <CheckCircle className="text-blue-600 h-6 w-6" />
                },
                {
                  title: "Intelligent Claim Routing",
                  description: "Smart workflows direct claims to the optimal processing path for faster adjudication.",
                  icon: <Zap className="text-blue-600 h-6 w-6" />
                },
                {
                  title: "Predictive Denial Prevention",
                  description: "AI models flag high-risk claims for intervention before submission.",
                  icon: <PieChart className="text-blue-600 h-6 w-6" />
                },
                {
                  title: "Automated Status Tracking",
                  description: "Real-time monitoring of claims throughout the adjudication process.",
                  icon: <FileText className="text-blue-600 h-6 w-6" />
                },
                {
                  title: "Compliance Assurance",
                  description: "Continuous updates to ensure claims meet changing payer requirements.",
                  icon: <Shield className="text-blue-600 h-6 w-6" />
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
        
        {/* Process Flow */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                Streamlined Claims Processing Workflow
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                Our intelligent platform optimizes each step of the claims lifecycle
                for maximum efficiency and revenue capture.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    step: "1",
                    title: "Pre-Submission Optimization",
                    description: "AI-powered claim scrubbing and validation to ensure clean claims"
                  },
                  {
                    step: "2",
                    title: "Intelligent Submission",
                    description: "Automated routing to appropriate clearinghouses and payers"
                  },
                  {
                    step: "3",
                    title: "Active Monitoring",
                    description: "Real-time tracking with automated follow-up for pending claims"
                  },
                  {
                    step: "4",
                    title: "Payment Reconciliation",
                    description: "Automated payment posting and variance detection"
                  },
                  {
                    step: "5",
                    title: "Denial Management",
                    description: "AI-assisted appeal generation and submission"
                  },
                  {
                    step: "6",
                    title: "Performance Analytics",
                    description: "Continuous improvement through data-driven insights"
                  }
                ].map((step, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-navy-900">{step.title}</h3>
                    <p className="text-navy-700">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to Optimize Your Claims Processing?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of healthcare organizations that have increased their clean claim rates and
                accelerated reimbursement with our AI-powered platform.
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

export default ClaimsProcessing;
