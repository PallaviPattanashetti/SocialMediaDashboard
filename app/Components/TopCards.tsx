
import { AccountData } from "@/interfaces/interfaces";
import DashboardCard from "./SocialDashboard";

const TOP_CONFIG = [
  { id: "fb", user: "@Ken", icon: "/assets/icon-facebook.svg", color: "#1877F2" },
  { id: "tw", user: "@Jose", icon: "/assets/icon-twitter.svg", color: "#1DA1F2" },
  { id: "ig", user: "@Isaiah", icon: "/assets/icon-instagram.svg", color: "linear-gradient(to right, #fdc468, #df4996)" },
  { id: "yt", user: "Jacob D.", icon: "/assets/icon-youtube.svg", color: "#CD201F" }
];

export default function TopCards({ stats, isDarkMode }: { stats: Record<string, AccountData>, isDarkMode: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
      {TOP_CONFIG.map((c) => {
        const s = stats[c.id];
        return (
          <DashboardCard 
            key={c.id} 
            type="top" 
            isDarkMode={isDarkMode} 
            {...c} 
            count={s?.Count ?? 0} 
            growth={s?.Growth ?? 0} 
            isUp={s?.IsUp ?? true} 
          />
        );
      })}
    </div>
  );
}