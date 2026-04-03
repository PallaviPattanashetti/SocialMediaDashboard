interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  totalFollowers: string;
}

export default function Navbar({ isDarkMode, setIsDarkMode, totalFollowers }: NavbarProps) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Social Media Dashboard</h1>
    
        <p className="text-slate-500 font-bold text-sm mt-1">Total Followers: {totalFollowers}</p>
      </div>
      
      <div className="flex items-center justify-between w-full md:w-auto gap-3 md:border-none pt-4 md:pt-0">
        <span className="text-xs font-bold text-slate-500">Dark Mode</span>
        <button 
          
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-all ${
            isDarkMode 
              ? "bg-linear-to-r from-[#378fe6] to-[#3eda82]" 
              : "bg-slate-300"
          }`}
        >
          <div className={`w-4 h-4 rounded-full bg-white transition-all duration-300 ${
            isDarkMode 
              ? "translate-x-6" 
              : "translate-x-0" 
          }`} />
        </button>
      </div>
    </header>
  );
}