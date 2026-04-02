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


export const getData = async () => {
  try {
    const res = await fetch('https://socialmediadashboardpp-dqehaabyb9ajh6bc.westus3-01.azurewebsites.net/api/Dashboard/data');
    if (!res.ok) return null;
    const data = await res.json();
    
    const ids = ["fb", "tw", "ig", "yt", "fb-v", "fb-l", "ig-l", "ig-v", "tw-r", "tw-l", "yt-l", "yt-v"];
    const formatted: any = {};
    data.forEach((item: any, i: number) => {
      if (ids[i]) formatted[ids[i]] = item;
    });
    return formatted;
  } catch { return null; }
};