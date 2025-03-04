
import React from 'react';
import { ArrowRight, BarChart2, PieChart, TrendingUp, Filter, Eye, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FinancialReporting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                <span>Business Intelligence</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Financial Reporting
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Transform complex healthcare data into actionable insights with our
                intelligent analytics and reporting platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-indigo-600 font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg">
                  View Demo
                </button>
                <button className="bg-transparent hover:bg-indigo-500 text-white border border-white font-medium py-3 px-8 rounded-md transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                Intelligent Financial Reporting Features
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                Our AI-powered reporting platform provides unprecedented visibility into your 
                revenue cycle performance with predictive analytics and actionable insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-time Dashboards",
                  description: "Interactive visualizations of key financial metrics updated in real-time.",
                  icon: <BarChart2 className="text-indigo-600 h-6 w-6" />
                },
                {
                  title: "Predictive Analytics",
                  description: "AI-powered forecasting of revenue trends, cash flow, and performance indicators.",
                  icon: <TrendingUp className="text-indigo-600 h-6 w-6" />
                },
                {
                  title: "Custom Report Builder",
                  description: "Intuitive drag-and-drop interface to create personalized reports and visualizations.",
                  icon: <PieChart className="text-indigo-600 h-6 w-6" />
                },
                {
                  title: "Advanced Filtering",
                  description: "Sophisticated filtering capabilities to drill down into specific data segments.",
                  icon: <Filter className="text-indigo-600 h-6 w-6" />
                },
                {
                  title: "Performance Monitoring",
                  description: "Automated tracking of KPIs with intelligent alerts for performance deviations.",
                  icon: <Eye className="text-indigo-600 h-6 w-6" />
                },
                {
                  title: "Insight Generation",
                  description: "AI-generated insights and recommendations based on financial data patterns.",
                  icon: <Zap className="text-indigo-600 h-6 w-6" />
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
        
        {/* Dashboard Showcase */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4 inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600">
                  <span>Interactive Analytics</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6">
                  Transforming Data Into Actionable Insights
                </h2>
                <p className="text-lg text-navy-700 mb-8">
                  Our intelligent reporting platform doesn't just display data—it uncovers hidden patterns, 
                  predicts trends, and recommends actions to optimize your revenue cycle performance.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Interactive dashboards with drill-down capabilities",
                    "Predictive modeling of revenue and cash flow trends",
                    "AI-driven anomaly detection and root cause analysis",
                    "Automated benchmarking against industry standards",
                    "Natural language querying for intuitive data exploration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3 flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-navy-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-all shadow-sm hover:shadow flex items-center">
                  <span>Schedule a Demo</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
              
              <div className="order-1 lg:order-2 bg-white p-4 rounded-xl shadow-md">
                <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    [Financial Dashboard Visualization]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Metrics */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
                Key Financial Metrics at Your Fingertips
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-navy-700">
                Our platform provides comprehensive visibility into all aspects of 
                your revenue cycle performance with intuitive visualizations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Revenue Performance",
                  metrics: ["Net Collections", "Gross Collections", "Collection Rate", "Revenue by Service Line"]
                },
                {
                  title: "Claims Management",
                  metrics: ["Clean Claim Rate", "First Pass Yield", "Denial Rate", "Denial Root Causes"]
                },
                {
                  title: "Accounts Receivable",
                  metrics: ["A/R Days", "Aging Buckets", "A/R by Payer", "Bad Debt Rate"]
                },
                {
                  title: "Operational Efficiency",
                  metrics: ["Cost to Collect", "Staff Productivity", "Processing Times", "Error Rates"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4 text-navy-900 pb-2 border-b border-gray-100">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.metrics.map((metric, idx) => (
                      <li key={idx} className="text-navy-700 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-blue-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to Transform Your Financial Reporting?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join healthcare organizations that have achieved unprecedented visibility into
                their revenue cycle performance with our AI-powered analytics platform.
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

export default FinancialReporting;
