interface CardProps {
  type: "top" | "overview";
  label?: string;
  count: number | string;
  user?: string;
  growth: number;
  isUp: boolean;
  isDarkMode: boolean;
  icon: string;
  color?: string;
}

export default function DashboardCard({ type, label, count, user, growth, isUp, isDarkMode, icon, color }: CardProps) {
  const isTop = type === "top";
  const cardBg = isDarkMode ? "bg-[#252a41] hover:bg-[#2e344e]" : "bg-[#f0f2fa] hover:bg-[#e1e4f0]";
  const textColor = isDarkMode ? "text-white" : "text-[#1e202a]";

  const borderStyle = color?.includes("linear") 
    ? { borderImage: `${color} 1`, borderTopWidth: '4px', borderStyle: 'solid' } 
    : { borderTopColor: color || "transparent", borderTopWidth: '4px' };

  return (
    <div className={`p-6 rounded-md cursor-pointer transition-all ${cardBg} ${isTop ? "text-center" : ""}`} style={borderStyle}>
      <div className={`flex items-center gap-2 mb-5 ${isTop ? "justify-center" : "justify-between"}`}>
        {!isTop && <span className="text-sm font-bold text-slate-500">{label}</span>}
        <img src={icon} alt="" className="w-5 h-5" />
        {isTop && <span className="text-xs font-bold text-slate-500">{user}</span>}
      </div>

      <div className={isTop ? "" : "flex justify-between items-end"}>
        <h2 className={`${isTop ? "text-5xl" : "text-3xl"} font-bold ${textColor}`}>{count}</h2>
        {isTop && <p className="text-xs tracking-[0.3em] text-slate-500 uppercase mt-2">Followers</p>}

        <div className={`flex items-center gap-1 font-bold text-xs mt-4 ${isUp ? "text-[#1db489]" : "text-[#dc414c]"} ${isTop ? "justify-center" : ""}`}>
          <img src={isUp ? "/assets/icon-up.svg" : "/assets/icon-down.svg"} alt="" />
          {growth} {isTop ? "Today" : ""}
        </div>
      </div>
    </div>
  );
}











