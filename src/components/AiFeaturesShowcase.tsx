
import { Brain, Zap, Shield, Sparkles, BarChart, MessageSquare } from 'lucide-react';

const AiFeaturesShowcase = () => {
  const features = [
    {
      icon: <Brain size={32} className="text-blue-600" />,
      title: "ML-Powered Claim Prediction",
      description: "Our machine learning algorithms predict claim outcomes before submission, reducing denials by up to 35%."
    },
    {
      icon: <Zap size={32} className="text-[#6A0DAD]" />,
      title: "Instant Code Validation",
      description: "Real-time ICD-10 and CPT validation with suggestions to optimize reimbursement potential."
    },
    {
      icon: <Shield size={32} className="text-blue-600" />,
      title: "Smart Compliance Guardian",
      description: "AI-powered compliance checks ensure adherence to ever-changing payer requirements and regulations."
    },
    {
      icon: <Sparkles size={32} className="text-[#6A0DAD]" />,
      title: "Intelligent Work Queues",
      description: "Automated prioritization of tasks based on financial impact and probability of successful resolution."
    },
    {
      icon: <BarChart size={32} className="text-blue-600" />,
      title: "Predictive Analytics Dashboard",
      description: "Visualize key metrics and leverage AI-powered forecasting to anticipate future performance."
    },
    {
      icon: <MessageSquare size={32} className="text-[#6A0DAD]" />,
      title: "24/7 AI Assistant",
      description: "Virtual assistant provides instant answers to billing questions for staff and patients alike."
    }
  ];

  return (
    <section id="technology" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
            <span>AI-Powered Technology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-4">
            Advanced AI Features That Drive Results
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-navy-700">
            Our platform leverages the latest in artificial intelligence and machine learning to 
            transform your revenue cycle from reactive to proactive.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-soft p-6 border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-navy-900">{feature.title}</h3>
              <p className="text-navy-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-blue-600 rounded-xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#6A0DAD]/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10 md:max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Ready to see our AI in action?
              </h3>
              <p className="text-blue-100 mb-8">
                Schedule a personalized demo and discover how our AI-powered RCM platform can 
                transform your healthcare organization's financial performance.
              </p>
              <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg">
                Request AI Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiFeaturesShowcase;
