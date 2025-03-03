
import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

const LeadQualifier = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    practiceSize: '',
    specialty: '',
    annualRevenue: '',
    currentSystem: '',
    painPoints: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isQualified, setIsQualified] = useState<boolean | null>(null);
  
  const painPointOptions = [
    'High claim denial rates',
    'Lengthy reimbursement cycles',
    'Staff productivity issues',
    'Limited reporting capabilities',
    'Poor patient collections',
    'Compliance concerns'
  ];
  
  const handlePainPointToggle = (point: string) => {
    setFormData(prev => {
      const currentPoints = [...prev.painPoints];
      if (currentPoints.includes(point)) {
        return {...prev, painPoints: currentPoints.filter(p => p !== point)};
      } else {
        return {...prev, painPoints: [...currentPoints, point]};
      }
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    // Final submission
    setIsSubmitting(true);
    
    // Simulate AI processing (in a real app, this would call an API)
    setTimeout(() => {
      // Simple qualification logic based on form data
      const isQualified = 
        formData.practiceSize !== 'solo' && 
        formData.painPoints.length >= 2 &&
        formData.annualRevenue !== 'less_than_1m';
      
      setIsQualified(isQualified);
      setIsSubmitting(false);
    }, 2000);
  };
  
  const resetForm = () => {
    setStep(1);
    setFormData({
      practiceSize: '',
      specialty: '',
      annualRevenue: '',
      currentSystem: '',
      painPoints: []
    });
    setIsQualified(null);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-navy-900 mb-2">AI-Powered Practice Assessment</h3>
        <p className="text-navy-700">Answer a few questions to receive a personalized RCM solution recommendation</p>
      </div>
      
      {isQualified === null ? (
        <form onSubmit={handleSubmit}>
          {/* Step indicators */}
          <div className="flex mb-6">
            {[1, 2, 3].map(num => (
              <div key={num} className="flex-1">
                <div 
                  className={`w-full h-1 ${
                    num <= step ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                ></div>
                <div className="text-center mt-1">
                  <span className="text-xs text-navy-600">Step {num}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-navy-800 mb-2">Practice Size</label>
                <select 
                  name="practiceSize"
                  value={formData.practiceSize}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select practice size</option>
                  <option value="solo">Solo practice</option>
                  <option value="small">Small (2-5 providers)</option>
                  <option value="medium">Medium (6-20 providers)</option>
                  <option value="large">Large (21+ providers)</option>
                  <option value="hospital">Hospital/Health System</option>
                </select>
              </div>
              
              <div>
                <label className="block text-navy-800 mb-2">Medical Specialty</label>
                <select 
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select specialty</option>
                  <option value="primary_care">Primary Care</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="neurology">Neurology</option>
                  <option value="oncology">Oncology</option>
                  <option value="multispecialty">Multi-specialty</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          )}
          
          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-navy-800 mb-2">Annual Revenue</label>
                <select 
                  name="annualRevenue"
                  value={formData.annualRevenue}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select annual revenue</option>
                  <option value="less_than_1m">Less than $1 million</option>
                  <option value="1m_to_5m">$1 - $5 million</option>
                  <option value="5m_to_10m">$5 - $10 million</option>
                  <option value="10m_to_50m">$10 - $50 million</option>
                  <option value="more_than_50m">More than $50 million</option>
                </select>
              </div>
              
              <div>
                <label className="block text-navy-800 mb-2">Current RCM System/Process</label>
                <select 
                  name="currentSystem"
                  value={formData.currentSystem}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select current system</option>
                  <option value="in_house">In-house team</option>
                  <option value="outsourced">Outsourced to third party</option>
                  <option value="hybrid">Hybrid approach</option>
                  <option value="ehr_integrated">EHR-integrated solution</option>
                  <option value="none">No formal system in place</option>
                </select>
              </div>
            </div>
          )}
          
          {/* Step 3 */}
          {step === 3 && (
            <div>
              <label className="block text-navy-800 mb-2">Top Revenue Cycle Pain Points (Select all that apply)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {painPointOptions.map(point => (
                  <div 
                    key={point}
                    onClick={() => handlePainPointToggle(point)}
                    className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                      formData.painPoints.includes(point)
                        ? 'bg-blue-50 border-blue-300'
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        formData.painPoints.includes(point)
                          ? 'bg-blue-600 border-blue-600'
                          : 'border-gray-400'
                      }`}>
                        {formData.painPoints.includes(point) && (
                          <CheckCircle className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="ml-2 text-navy-800">{point}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Back
              </button>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center ml-auto ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Processing...
                </>
              ) : step < 3 ? 'Continue' : 'Get AI Assessment'}
            </button>
          </div>
        </form>
      ) : (
        /* Results */
        <div className="text-center py-8">
          {isQualified ? (
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-navy-900 mb-2">Perfect Match Found!</h4>
              <p className="text-navy-700 mb-6">
                Based on your practice profile, our AI recommends our Enterprise RCM Solution with custom workflow automation.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Schedule Consultation
                </button>
                <button 
                  onClick={resetForm}
                  className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Start Over
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h4 className="text-xl font-semibold text-navy-900 mb-2">Thank You For Your Interest!</h4>
              <p className="text-navy-700 mb-6">
                We've received your information and will contact you to discuss how our solutions can best meet your needs.
              </p>
              <button 
                onClick={resetForm}
                className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LeadQualifier;
