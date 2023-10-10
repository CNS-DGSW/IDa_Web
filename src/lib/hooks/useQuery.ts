import { useLocation } from "react-router-dom";

const useQuery = () => {
  const Location = useLocation();
  const params = new URLSearchParams(Location.search);
  return params;
};

export default useQuery;
