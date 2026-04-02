
"use client";
import { useState, useEffect, useCallback } from "react";
import DashboardCard from "./Components/SocialDashboard";
import { AccountData } from "@/interfaces/interfaces";
import { getData } from "@/lib/data-service";

const TOP_CONFIG = [
  { id: "fb", user: "@Ken", icon: "/assets/icon-facebook.svg", color: "#1877F2" },
  { id: "tw", user: "@Jose", icon: "/assets/icon-twitter.svg", color: "#1DA1F2" },
  { id: "ig", user: "@Isaiah", icon: "/assets/icon-instagram.svg", color: "linear-gradient(to right, #fdc468, #df4996)" },
  { id: "yt", user: "Jacob D.", icon: "/assets/icon-youtube.svg", color: "#CD201F" }
];

const OVERVIEW_CONFIG = [
  { id: "fb-v", label: "Page Views", icon: "/assets/icon-facebook.svg" },
  { id: "fb-l", label: "Likes", icon: "/assets/icon-facebook.svg" },
  { id: "ig-l", label: "Likes", icon: "/assets/icon-instagram.svg" },
  { id: "ig-v", label: "Profile Views", icon: "/assets/icon-instagram.svg" },
  { id: "tw-r", label: "Retweets", icon: "/assets/icon-twitter.svg" },
  { id: "tw-l", label: "Likes", icon: "/assets/icon-twitter.svg" },
  { id: "yt-l", label: "Likes", icon: "/assets/icon-youtube.svg" },
  { id: "yt-v", label: "Total Views", icon: "/assets/icon-youtube.svg" }
];

export default function Page() {
  const [isOn, setIsOn] = useState(false);
  const [stats, setStats] = useState<Record<string, AccountData>>({});
  const [loading, setLoading] = useState(true);
  const [Refreshing, setIsRefreshing] = useState(false);


  const loadDashboardData = useCallback(async () => {
    setIsRefreshing(true);
    const data = await getData();
    if (data) {
      setStats(data);
    }
    setLoading(false);
    setIsRefreshing(false);
  }, []);

 
  useEffect(() => {
    loadDashboardData();
  }, []); 

  const themeText = isOn ? "text-[#1e202a]" : "text-white";

  return (
    <div className={`min-h-screen transition-all duration-500 ${isOn ? "bg-white" : "bg-[#1e202a]"}`}>
      <div className="max-w-6xl mx-auto p-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className={`text-2xl font-bold ${themeText}`}>Social Media Dashboard</h1>
            <div className="flex items-center gap-3">
              <p className="text-slate-500 font-bold text-sm">Total Followers: 23,004</p>
              <button 
                onClick={loadDashboardData}
                disabled={Refreshing}
                className="text-[10px] uppercase tracking-widest font-bold bg-slate-500/10 hover:bg-slate-500/20 px-2 py-1 rounded transition-all text-slate-500"
              >
                {/* {Refreshing ? "Refreshing..." : "↻ Refresh Data"} */}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500">Dark Mode</span>
            <button 
              onClick={() => setIsOn(!isOn)} 
              className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-all ${isOn ? "bg-slate-300" : "bg-gradient-to-r from-[#378fe6] to-[#3eda82]"}`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-all duration-300 ${isOn ? "translate-x-0" : "translate-x-6"}`} />
            </button>
          </div>
        </header>

        {loading ? (
          <div className="text-center py-20 text-slate-500 font-bold animate-pulse text-xl">
            Loading Dashboard Data...
          </div>
        ) : (
          <>
   
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {TOP_CONFIG.map((c) => {
                const s = stats[c.id];
                return (
                  <DashboardCard 
                    key={c.id} 
                    type="top" 
                    isOn={isOn} 
                    {...c} 
                    count={s?.Count ?? 0} 
                    growth={s?.Growth ?? 0} 
                    isUp={s?.IsUp ?? true} 
                  />
                );
              })}
            </div>

            <h2 className={`text-2xl font-bold mb-6 ${isOn ? "text-slate-600" : "text-white"}`}>
              Overview - Today
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {OVERVIEW_CONFIG.map((c) => {
                const s = stats[c.id];
                return (
                  <DashboardCard 
                    key={c.id} 
                    isOn={isOn} 
                    {...c} 
                    count={s?.Count ?? 0} 
                    growth={s?.Growth ?? 0} 
                    isUp={s?.IsUp ?? true} 
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}