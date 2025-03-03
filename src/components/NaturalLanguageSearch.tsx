
import { useState } from 'react';
import { Search, X } from 'lucide-react';

const NaturalLanguageSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Simulate search results (in a real app, this would call an API)
    const demoResults = [
      'Revenue Cycle Management Services',
      'AI-Powered Claims Processing',
      'Denial Management Solutions',
      'Healthcare Analytics Dashboard',
      'Patient Payment Solutions'
    ];
    
    setSearchResults(demoResults.filter(item => 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsExpanded(false);
  };

  return (
    <div className={`relative ${isExpanded ? 'w-full' : 'w-auto'}`}>
      <form 
        onSubmit={handleSearch}
        className={`transition-all duration-300 flex items-center ${
          isExpanded 
            ? 'bg-white shadow-md border border-gray-200 rounded-lg' 
            : 'bg-transparent'
        }`}
      >
        <button 
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-2 ${isExpanded ? 'text-blue-600' : 'text-navy-800 hover:text-blue-600'}`}
        >
          <Search size={20} />
        </button>
        
        {isExpanded && (
          <>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask me anything about revenue cycle management..."
              className="w-full py-2 pr-4 focus:outline-none text-navy-800"
              autoFocus
            />
            
            {searchQuery && (
              <button 
                type="button" 
                onClick={clearSearch}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </>
        )}
      </form>
      
      {isExpanded && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg overflow-hidden z-20 border border-gray-200">
          <div className="p-2 bg-blue-50 text-xs text-blue-700">
            AI-powered search results
          </div>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="block p-3 hover:bg-gray-50 text-navy-800"
                  onClick={(e) => {
                    e.preventDefault();
                    clearSearch();
                    // In a real app, this would navigate to the result page
                  }}
                >
                  {result}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NaturalLanguageSearch;
