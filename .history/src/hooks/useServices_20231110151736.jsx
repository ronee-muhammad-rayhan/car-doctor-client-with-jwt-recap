import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useServices = (asc, min, max) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // fetch('https://car-doctor-server-topaz-one.vercel.app/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    axiosSecure(
      `/services?sort=${asc ? "asc" : "desc"}&min=${min}&max=${max}`
    ).then((res) => setServices(res.data));
  }, [asc]);

  return services;
};

export default useServices;
