export const getData = async () => {
  try {
    const res = await fetch('https://socialmediadashboardpp-dqehaabyb9ajh6bc.westus3-01.azurewebsites.net/api/Dashboard/data/');
    const data = await res.json();

  
    const item = data[0];

    return {
      count: item.Count,
      growth: item.Growth,
      isUp: item.IsUp
    };
  } catch (error) {
    console.error("Could not get data", error);
    return null;
  }
}