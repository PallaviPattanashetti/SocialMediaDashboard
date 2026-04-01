
export default function DashboardCard({ type, label, count, user, growth, isUp, isOn, icon, color = "" }: any) {
const cardStyle = isOn ? "bg-white text-[#101624]" : "bg-[#1d2539] text-white";
const growthColor = isUp ? "text-green-400" : "text-red-500";

const isChange = color && color.includes("linear-change");

const toggleButton = isChange 
? { borderImageSource: color, borderImageSlice: 1 } 
: { borderTopColor: color || "transparent" }; 

if (type === "top") {
return (
<div 
className={`p-8 rounded-xl border-t-8 shadow-md text-center transition-all ${cardStyle}`} 
style={toggleButton}
>
<div className="flex items-center justify-center gap-2 mb-6 opacity-70 text-xs font-bold">
<img src={icon} className="w-5 h-5" alt="" /> {user}
</div>
<h2 className="text-6xl font-black">{count}</h2>
<p className="text-xs tracking-[0.3em] opacity-50 uppercase mt-1">Followers</p>
<div className={`mt-6 font-bold text-xs ${growthColor}`}>
{isUp ? "▲" : "▼"} {growth} Today
</div>
</div>
);
}

return (
<div className={`p-6 rounded-lg shadow-sm transition-all ${cardStyle}`}>
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-bold opacity-60">{label}</span>
<img src={icon} className="w-5 h-5" alt="" />
</div>
<div className="flex justify-between items-end">
<h3 className="text-3xl font-black">{count}</h3>
<div className={`text-xs font-bold ${growthColor}`}>{isUp ? "▲" : "▼"} {growth}</div>
</div>
</div>
);
}