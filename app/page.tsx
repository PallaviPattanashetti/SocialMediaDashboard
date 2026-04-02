"use client";
import { useState, useEffect, useCallback } from "react";
import { getData } from "@/lib/data-service";
import { AccountData } from "@/interfaces/interfaces";
import Navbar from "./Components/Navbar";
import TopCards from "./Components/TopCards";
import OverviewCards from "./Components/OverCards";


export default function SocialDashboardPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [stats, setStats] = useState<Record<string, AccountData>>({});
  const [loading, setLoading] = useState(true);

  const loadDashboardData = useCallback(async () => {
    const data = await getData();
    if (data) setStats(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  const themeClass = isDarkMode ? "bg-[#1e202a] text-white" : "bg-white text-[#1e202a]";

  return (
    <div className={`min-h-screen transition-colors duration-500 ${themeClass}`}>
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        
        <Navbar 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
          totalFollowers="23,004" 
        />

        {loading ? (
          <div className="text-center py-20 opacity-50 font-bold animate-pulse text-xl">
            Loading Dashboard...
          </div>
        ) : (
          <>
            <TopCards stats={stats} isDarkMode={isDarkMode} />
            
            <h2 className={`text-2xl font-bold mb-6 mt-12 ${isDarkMode ? "text-white" : "text-slate-600"}`}>
              Overview - Today
            </h2>
            
            <OverviewCards stats={stats} isDarkMode={isDarkMode} />
          </>
        )}
      </div>
    </div>
  );
}

