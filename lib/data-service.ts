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

interface RawApiResponse {
  count?: number;
  Count?: number;
  growth?: number;
  Growth?: number;
  isUp?: boolean;
  IsUp?: boolean;
}

export const getData = async (): Promise<Record<string, AccountData> | null> => {
  try {
    const res = await fetch('https://socialmediadashboardpp-dqehaabyb9ajh6bc.westus3-01.azurewebsites.net/api/Dashboard/data', {
      cache: 'no-store'
    });
    
    if (!res.ok) throw new Error("Failed to fetch");
    
    const data: RawApiResponse[] = await res.json();
    const ids = ["fb", "tw", "ig", "yt", "fb-v", "fb-l", "ig-l", "ig-v", "tw-r", "tw-l", "yt-l", "yt-v"];
    const formatted: Record<string, AccountData> = {};

    data.forEach((item, i) => {
      if (ids[i]) {
        formatted[ids[i]] = {
          Count: item.count ?? item.Count ?? 0,
          Growth: item.growth ?? item.Growth ?? 0,
          IsUp: item.isUp ?? item.IsUp ?? true
        };
      }
    });
    return formatted;
  } catch (error) {
    console.error("Data fetch error:", error);
    return null;
  }
};