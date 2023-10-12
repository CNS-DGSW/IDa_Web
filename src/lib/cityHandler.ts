import City from "models/City";

const cityHandler = (cityName: string): boolean => {
  const filter: any[] = City.filter((e) => e.cityName === cityName);
  if (filter.length) return false;
  else return true;
};

export default cityHandler;
