// export const getData = async () => {
//   try {
//     const res = await fetch('https://socialmediadashboardpp-dqehaabyb9ajh6bc.westus3-01.azurewebsites.net/api/Dashboard/data/');
//     const data = await res.json();

  
//     const item = data[0];

//     return {
//       count: item.Count,
//       growth: item.Growth,
//       isUp: item.IsUp
//     };
//   } catch (error) {
//     console.error("Could not get data", error);
//     return null;
//   }
// }

import { AccountData } from "@/interfaces/interfaces";

// Matches your C# DashboardModel perfectly
interface RawDashboardResponse {
  count: number;
  growth: number;
  isUp: boolean;
}

export const getData = async (): Promise<Record<string, AccountData> | null> => {
  try {
    const res = await fetch('https://socialmediadashboardpp-dqehaabyb9ajh6bc.westus3-01.azurewebsites.net/api/Dashboard/data', {
      cache: 'no-store'
    });
    
    if (!res.ok) throw new Error(`Server responded with ${res.status}`);
    
    const data: RawDashboardResponse[] = await res.json();
    const ids = ["fb", "tw", "ig", "yt", "fb-v", "fb-l", "ig-l", "ig-v", "tw-r", "tw-l", "yt-l", "yt-v"];
    const formatted: Record<string, AccountData> = {};

    data.forEach((item, i) => {
      if (ids[i]) {
        // C# JSON serializers usually lowercase the first letter by default
        // This handles both 'Count' and 'count' just in case.
        formatted[ids[i]] = {
          Count: item.count ?? 0,
          Growth: item.growth ?? 0,
          IsUp: item.isUp ?? true
        };
      }
    });
    return formatted;
  } catch (error) {
    console.error("Dashboard Fetch Error:", error);
    return null;
  }
};