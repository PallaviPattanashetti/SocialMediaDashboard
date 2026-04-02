


// export default function DashboardCard({ type, label, count, user, growth, isUp, isOn, icon, color = "" }: any) {
// const cardStyle = isOn ? "bg-white text-hsl[#230, 17%, 14%]" : "bg-[#1d2539] text-white";
// const growthColor = isUp ? "text-green-400" : "text-red-500";

// const isChange = color && color.includes("linear-change");

// const toggleButton = isChange 
// ? { borderImageSource: color, borderImageSlice: 1 } 
// : { borderTopColor: color || "transparent" }; 

// if (type === "top") {
// return (
// <div 
// className={`p-8 rounded-xl border-t-8 shadow-md text-center transition-all ${cardStyle}`} 
// style={toggleButton}
// >
// <div className="flex items-center justify-center gap-2 mb-6 opacity-70 text-xs font-bold">
// <img src={icon} className="w-5 h-5" alt="" /> {user}
// </div>
// <h2 className="text-6xl font-black">{count}</h2>
// <p className="text-xs tracking-[0.3em] opacity-50 uppercase mt-1">Followers</p>

// <div className={`mt-6 font-bold text-xs ${growthColor} flex items-center justify-center gap-1`}>
// <img src={isUp ? "/assets/icon-up.svg" : "/assets/icon-down.svg"} className="w-3 h-3" alt="" />
// {growth} Today
// </div>
// </div>
// );
// }

// return (
// <div className={`p-6 rounded-lg shadow-sm transition-all ${cardStyle}`}>
// <div className="flex justify-between items-center mb-6">
// <span className="text-sm font-bold opacity-60">{label}</span>
// <img src={icon} className="w-5 h-5" alt="" />
// </div>

// <div className="flex justify-between items-end">
// <h3 className="text-3xl font-black">{count}</h3>

// <div className={`text-xs font-bold ${growthColor} flex items-center gap-1`}>
// <img src={isUp ? "/assets/icon-up.svg" : "/assets/icon-down.svg"} className="w-3 h-3" alt="" />
// {growth}
// </div>
// </div>
// </div>
// );
// }




interface DashboardCardProps {
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

export default function DashboardCard({ type = "overview", label, count, user, growth, isUp, isOn, icon, color = "" }: DashboardCardProps) {
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
      {/* Header logic */}
      <div className={`flex items-center gap-2 mb-6 ${isTop ? "justify-center opacity-70" : "justify-between"}`}>
        {!isTop && <span className="text-sm font-bold opacity-60">{label}</span>}
        <img src={icon} className="w-5 h-5" alt="" />
        {isTop && <span className="text-xs font-bold">{user}</span>}
      </div>

      {/* Main Stats */}
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