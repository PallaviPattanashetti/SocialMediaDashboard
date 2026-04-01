

"use client";
import { useState } from "react";
import DashboardCard from "./Components/SocialDashboard";

export default function Page() {
const [isOn, setIsOn] = useState(false);
const [user, setUser] = useState("");

return (<div
  className="min-h-screen transition-colors duration-500"
style={{ backgroundColor: isOn ? "#ffffff" : "#101624" }}
>
<div className="max-w-6xl mx-auto p-8">

<header className="flex justify-between items-center mb-10">
<div>
<h1 className={`text-2xl font-bold ${isOn ? "text-[#101624]" : "text-white"}`}>
Social Media Dashboard
</h1>
<p className="text-slate-500 font-bold text-sm">
Total Followers: 23,004
</p>
</div>

<div className="flex items-center gap-3">
<span className={`text-xs font-bold ${isOn ? "text-[#101624]" : "text-white"}`}>
{isOn ? "LIGHT MODE" : "DARK MODE"}
</span>
<button
onClick={() => setIsOn(!isOn)}
className={`relative w-14 h-8 flex items-center rounded-full p-1 transition-all border-2 ${
isOn ? "bg-white border-[#101624]" : "bg-[#101624] border-white"
}`}
>
<div
className={`w-5 h-5 rounded-full transition-all duration-300 ${
isOn ? "translate-x-6 bg-[#101624]" : "translate-x-0 bg-white"
}`}
/>
</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
<DashboardCard
type="top"
isOn={isOn}
user="@Ken"
count="1987"
growth="12"
isUp={true}
color="#1877F2"
icon="/assets/icon-facebook.svg"
/>
<DashboardCard
type="top"
isOn={isOn}
ser="@Jose"
count="1044"
growth="99"
sUp={true}
color="#1DA1F2"
icon="/assets/icon-twitter.svg"
/>

<DashboardCard
type="top"
isOn={isOn}
user="@Isaiah"
count="11k"
growth="1099"
isUp={true}
color="linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))"
icon="/assets/icon-instagram.svg"
/>

<DashboardCard
type="top"
isOn={isOn}
user="Jacob D."
count="8239"
growth="144"
isUp={false}
color="#CD201F"
con="/assets/icon-youtube.svg"
/>
</div>

<h2 className={`text-2xl font-bold mb-6 ${isOn ? "text-[#101624]" : "text-white"}`}>
Overview - Today
</h2>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<DashboardCard isOn={isOn} label="Page Views" count="87" growth="3%" isUp={true} icon="/assets/icon-facebook.svg" />
<DashboardCard isOn={isOn} label="Likes" count="52" growth="2%" isUp={false} icon="/assets/icon-facebook.svg" />
<DashboardCard isOn={isOn} label="Likes" count="5462" growth="2257%" isUp={true} icon="assets/icon-instagram.svg" />
<DashboardCard isOn={isOn} label="Profile Views" count="52k" growth="1375%" isUp={true} icon="assets/icon-instagram.svg" />
<DashboardCard isOn={isOn} label="Retweet" count="117" growth="303%" isUp={true} icon="/assets/icon-twitter.svg" />
<DashboardCard isOn={isOn} label="Likes" count="507" growth="553%" isUp={false} icon="/assets/icon-twitter.svg" />
<DashboardCard isOn={isOn} label="Likes" count="107" growth="10%" isUp={false} icon="/assets/icon-youtube.svg" />
<DashboardCard isOn={isOn} label="Total Views" count="1407" growth="12%" isUp={true} icon="/assets/icon-youtube.svg" />
</div>

</div>
</div>
);
}