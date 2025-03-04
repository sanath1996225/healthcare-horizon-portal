
import React, { useState } from 'react';
import { ArrowRight, Search, PlusCircle, MinusCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Faq = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is AI-powered revenue cycle management?",
          answer: "AI-powered revenue cycle management leverages artificial intelligence technologies such as machine learning, natural language processing, and predictive analytics to automate and optimize the healthcare revenue cycle process. This includes intelligent claims processing, denial prevention, patient billing, and financial analytics to improve efficiency, accuracy, and financial outcomes."
        },
        {
          question: "How does your solution differ from traditional RCM services?",
          answer: "Unlike traditional RCM services that rely heavily on manual processes and basic automation, our AI-powered platform uses advanced machine learning algorithms to predict issues before they occur, identify optimization opportunities, and continuously improve based on outcomes data. This results in higher clean claim rates, lower denial rates, faster payment cycles, and improved patient financial experiences compared to traditional approaches."
        },
        {
          question: "Is your solution suitable for all healthcare organizations?",
          answer: "Our solution is designed to scale for healthcare organizations of all sizes, from small independent practices to large health systems. We offer tailored implementations based on your specific needs, specialties, and existing systems. Our flexible platform can be configured to address the unique challenges of different healthcare specialties and organizational structures."
        }
      ]
    },
    {
      category: "Implementation & Integration",
      questions: [
        {
          question: "How long does implementation typically take?",
          answer: "Implementation timelines vary based on the size and complexity of your organization, but typically range from 6-12 weeks. Our structured implementation process includes system integration, data migration, configuration, training, and go-live support to ensure a smooth transition with minimal disruption to your operations."
        },
        {
          question: "Can your solution integrate with our existing EHR/PM system?",
          answer: "Yes, our platform is designed to integrate seamlessly with all major EHR and practice management systems through standard HL7, FHIR, and API connections. We maintain certified integrations with Epic, Cerner, Allscripts, athenahealth, eClinicalWorks, NextGen, and many other systems to ensure smooth data exchange and workflow integration."
        },
        {
          question: "What kind of training and support do you provide?",
          answer: "We provide comprehensive training for all user roles through a combination of live sessions, on-demand videos, and documentation. Our implementation includes dedicated onboarding support, and once live, you'll have access to our 24/7 technical support team, regular check-ins with your success manager, and ongoing optimization consultations to ensure you achieve maximum value."
        }
      ]
    },
    {
      category: "Technology & Security",
      questions: [
        {
          question: "How do you ensure the security and privacy of our data?",
          answer: "Security and compliance are foundational to our platform. We maintain HITRUST certification, SOC 2 Type II compliance, and follow all HIPAA requirements. Our infrastructure includes end-to-end encryption, regular security audits, multi-factor authentication, role-based access controls, and continuous monitoring to protect sensitive healthcare and financial data."
        },
        {
          question: "How accurate are your AI and machine learning models?",
          answer: "Our AI models achieve 95%+ accuracy across various RCM functions, with continuous improvement through ongoing learning. We measure accuracy through rigorous validation against known outcomes and expert review. Our models are trained on billions of healthcare transactions across diverse specialties, regions, and payer types to ensure robust performance across different scenarios."
        },
        {
          question: "What happens if the AI makes a mistake?",
          answer: "While our AI achieves high accuracy, we implement multiple safeguards to prevent and catch errors. This includes confidence scoring (where low-confidence predictions are routed for human review), exception handling processes, automated quality checks, and continuous monitoring. Our implementation also includes configurable thresholds for when human intervention is required based on your risk tolerance and specific requirements."
        }
      ]
    },
    {
      category: "Results & ROI",
      questions: [
        {
          question: "What kind of ROI can we expect?",
          answer: "Our clients typically see ROI within 3-6 months of implementation. On average, our solutions deliver 15-35% reduction in denials, 20-30% improvement in A/R days, 5-15% increase in net collections, and 25-40% reduction in manual processing costs. We provide detailed ROI projections during the consultation process based on your specific organizational metrics and challenges."
        },
        {
          question: "How do you measure success?",
          answer: "We establish clear key performance indicators (KPIs) at the beginning of our partnership aligned with your goals. Common metrics include clean claim rate, first-pass resolution rate, denial rate, A/R days, cost to collect, patient satisfaction, and total revenue impact. Our analytics platform provides real-time visibility into these metrics, and we conduct regular performance reviews to ensure we're meeting or exceeding targets."
        },
        {
          question: "Do you offer any guarantees?",
          answer: "Yes, we offer performance guarantees tied to specific, measurable improvements in your revenue cycle metrics. Depending on the solution components implemented, these can include minimum percentage improvements in clean claim rates, denial rates, and A/R days. We also offer pricing models with performance-based components, where a portion of our compensation is directly tied to the results we deliver."
        }
      ]
    }
  ];
  
  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faqs.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqs;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
                <span>Resource Center</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Find answers to common questions about our AI-powered revenue cycle
                management solutions and implementation process.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="w-full p-4 pl-12 pr-4 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 backdrop-blur-sm placeholder-gray-500 text-gray-900"
                  placeholder="Search frequently asked questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-navy-900">{category.category}</h2>
                    
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => {
                        const index = categoryIndex * 100 + faqIndex;
                        const isOpen = openIndex === index;
                        
                        return (
                          <div 
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                          >
                            <button
                              className="w-full flex items-center justify-between p-5 bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                              onClick={() => toggleFaq(index)}
                            >
                              <span className="font-medium text-navy-900 pr-8">{faq.question}</span>
                              {isOpen ? (
                                <MinusCircle className="flex-shrink-0 h-5 w-5 text-blue-600" />
                              ) : (
                                <PlusCircle className="flex-shrink-0 h-5 w-5 text-blue-600" />
                              )}
                            </button>
                            
                            {isOpen && (
                              <div className="p-5 bg-gray-50 border-t border-gray-200">
                                <p className="text-navy-700">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-navy-700 mb-4">No results found for "{searchQuery}"</p>
                  <p className="text-navy-600">Try another search term or browse the categories below.</p>
                </div>
              )}
              
              {/* Still Have Questions */}
              <div className="mt-16 bg-blue-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-navy-900">Still have questions?</h3>
                <p className="text-navy-700 mb-6">
                  Our team is ready to answer any questions you may have about our AI-powered 
                  revenue cycle management solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all shadow-sm hover:shadow flex items-center justify-center"
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                  <a 
                    href="#schedule-demo" 
                    className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-medium py-2 px-6 rounded-md transition-all flex items-center justify-center"
                  >
                    <span>Schedule a Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faq;
