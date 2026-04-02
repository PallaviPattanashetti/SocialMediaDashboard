

import { AccountData } from "@/interfaces/interfaces";


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