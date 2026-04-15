import { useState, useRef, useEffect } from 'react';
import { Search, Bell, Settings, Plus, X } from 'lucide-react';
import { searchData, SearchItem } from '@/src/lib/searchData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  return (
    <header className="bg-surface/90 backdrop-blur-xl sticky top-0 z-30 flex justify-between items-center w-full px-8 h-16 border-b border-outline-variant">
      <div className="flex items-center gap-8 flex-1">
        <span className="text-xl font-bold tracking-tighter text-on-surface uppercase">JuriSpace</span>
        
        <div className="max-w-md w-full relative" ref={searchRef}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={16} />
          <input 
            type="text" 
            placeholder="Search matters, clients, tasks..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            className="w-full bg-surface border border-outline-variant rounded-xl py-2 pl-10 pr-10 text-sm focus:ring-1 focus:ring-primary transition-all placeholder:text-outline"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
            >
              <X size={14} />
            </button>
          )}

          {/* Search Results Dropdown */}
          {isSearchFocused && (searchQuery || searchResults.length > 0) && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-outline-variant shadow-2xl overflow-hidden z-50 max-h-[400px] overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="py-2">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result.tab)}
                      className="w-full px-4 py-3 hover:bg-surface flex flex-col items-start transition-colors text-left border-b border-outline-variant last:border-0"
                    >
                      <div className="flex justify-between w-full mb-1">
                        <span className="text-xs font-bold text-on-surface uppercase tracking-tight">{result.title}</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-surface border border-outline-variant rounded text-secondary">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-[10px] text-secondary font-medium">{result.description}</p>
                    </button>
                  ))}
                </div>
              ) : searchQuery ? (
                <div className="p-8 text-center">
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">No results found for "{searchQuery}"</p>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-8 px-6">
        {['Dashboard', 'Matters', 'Documents', 'Calendar'].map((item) => (
          <button 
            key={item}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              (activeTab === 'dashboard' && item === 'Dashboard') || (activeTab === 'matters' && item === 'Matters')
                ? 'text-primary border-b-2 border-primary pb-1' 
                : 'text-secondary hover:text-on-surface'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 text-secondary hover:text-primary transition-all">
          <Bell size={18} />
        </button>
        <button className="p-2 text-secondary hover:text-primary transition-all">
          <Settings size={18} />
        </button>
        
        <div className="h-6 w-[1px] bg-outline mx-2" />
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-on-surface">Dr. Ricardo Silva</p>
            <p className="text-[9px] text-secondary font-bold uppercase tracking-widest">OAB/SP 123.456</p>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6iZF65uJZtUm8n_ErPa-o5v86n94vy_a99f35DZ6DoXTCvA6hIaSL6Mfim988-_96RkHLsQSm7BMnBcy0ssoImz3Hl2c8KWkYyRDXUFZTpDBInzSyyRHDHh887wFFb34SACdxx5BDILVArtu45rW9_RGYMUrOR7GW2wXCnQszYOyRkjkfIEok9TCqh5JiYDCdq2uH6VW_QBQGvXQvvQ7ofG5_MyT01-d4q8F5DiVSZRjau2f1csOiXGhX14fqD9pK4JOzoI0hI0U" 
              alt="User profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <button className="bg-primary px-4 py-2 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest hover:bg-primary-container transition-colors active:scale-95 flex items-center gap-2">
          <Plus size={16} />
          New Case
        </button>
      </div>
    </header>
  );
}
