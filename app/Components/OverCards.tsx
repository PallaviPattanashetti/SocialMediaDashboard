
import { AccountData } from "@/interfaces/interfaces";
import DashboardCard from "./SocialDashboard";

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

export default function OverviewCards({ stats, isDarkMode }: { stats: Record<string, AccountData>, isDarkMode: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {OVERVIEW_CONFIG.map((c) => {
        const s = stats[c.id];
        return (
          <DashboardCard 
            key={c.id} 
            type="overview"
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