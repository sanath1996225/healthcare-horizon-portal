
import { BarChart, PieChart, LineChart, Activity, TrendingUp, DollarSign, Zap } from 'lucide-react';

const AnalyticsDashboard = () => {
  return (
    <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-navy-900 mb-2">AI-Powered Analytics Dashboard</h3>
        <p className="text-navy-700">Real-time insights into your revenue cycle performance with predictive analytics</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white mr-3">
            <TrendingUp size={20} />
          </div>
          <div>
            <p className="text-sm text-navy-600">Collection Rate</p>
            <p className="text-xl font-bold text-navy-900">98.2%</p>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp size={12} className="mr-1" /> +2.4%
            </p>
          </div>
        </div>
        <div className="bg-indigo-50 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white mr-3">
            <Activity size={20} />
          </div>
          <div>
            <p className="text-sm text-navy-600">Claim Acceptance</p>
            <p className="text-xl font-bold text-navy-900">96.7%</p>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp size={12} className="mr-1" /> +1.8%
            </p>
          </div>
        </div>
        <div className="bg-sky-50 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center text-white mr-3">
            <DollarSign size={20} />
          </div>
          <div>
            <p className="text-sm text-navy-600">Revenue Growth</p>
            <p className="text-xl font-bold text-navy-900">$1.2M</p>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp size={12} className="mr-1" /> +15.3%
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative h-64 rounded-lg overflow-hidden bg-gray-50 border border-gray-200 mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <LineChart className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <p className="text-navy-900 text-sm text-center">Interactive Revenue Forecast</p>
            <p className="text-navy-600 text-xs text-center">Powered by AI predictive modeling</p>
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80" 
          alt="Analytics Dashboard" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="relative bg-blue-50 rounded-lg p-4 flex flex-col items-center justify-center h-32">
          <PieChart className="h-8 w-8 text-blue-600 mb-2" />
          <p className="text-sm font-medium text-navy-900 text-center">Payer Mix Analysis</p>
          <p className="text-xs text-navy-600 text-center">AI-optimized revenue distribution</p>
        </div>
        <div className="relative bg-indigo-50 rounded-lg p-4 flex flex-col items-center justify-center h-32">
          <BarChart className="h-8 w-8 text-indigo-600 mb-2" />
          <p className="text-sm font-medium text-navy-900 text-center">Denial Trend Prediction</p>
          <p className="text-xs text-navy-600 text-center">Proactive intervention suggestions</p>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all shadow-sm hover:shadow flex items-center mx-auto">
          <span>Request Live Demo</span>
          <Zap size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
