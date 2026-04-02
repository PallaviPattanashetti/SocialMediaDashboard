

interface DashboardCard {
  type?: "top" | "overview";
  label?: string;
  count?: string | number;
  user?: string;
  growth?: number;
  isUp?: boolean;
  isOn: boolean;
  icon: string;
  color?: string;
}

export default function DashboardCard({ 
  type = "overview", label, count, user, growth, isUp, isOn, icon, color = "" 
}: DashboardCard) {
  const isTop = type === "top";
  const cardBg = isOn ? "bg-[#f0f2fa] text-[#1e202a]" : "bg-[#252a41] text-white";
  const growthColor = isUp ? "text-[#1db489]" : "text-[#dc414c]";

  const borderStyle = color.includes("linear-gradient") 
    ? { borderImageSource: color, borderImageSlice: 1, borderStyle: "solid" } 
    : { borderTopColor: color || "transparent" };

  return (
    <div 
      className={`p-6 rounded-lg shadow-md transition-all border-t-8 ${cardBg} ${isTop ? "text-center p-8" : ""}`} 
      style={borderStyle}
    >
      <div className={`flex items-center gap-2 mb-6 ${isTop ? "justify-center opacity-70" : "justify-between"}`}>
        {!isTop && <span className="text-sm font-bold opacity-60">{label}</span>}
        <img src={icon} className="w-5 h-5" alt="" />
        {isTop && <span className="text-xs font-bold">{user}</span>}
      </div>

      <div className={isTop ? "" : "flex justify-between items-end"}>
        <div>
          <h2 className={`${isTop ? "text-6xl" : "text-3xl"} font-black`}>{count ?? "0"}</h2>
          {isTop && <p className="text-xs tracking-[0.3em] opacity-50 uppercase mt-1">Followers</p>}
        </div>

        {growth !== undefined && (
          <div className={`flex items-center gap-1 font-bold text-xs mt-6 ${growthColor} ${isTop ? "justify-center" : ""}`}>
            <img src={isUp ? "/assets/icon-up.svg" : "/assets/icon-down.svg"} className="w-2 h-1" alt="" />
            {growth} {isTop ? "Today" : ""}
          </div>
        )}
      </div>
    </div>
  );
}