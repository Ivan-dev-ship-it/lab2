import { useEffect, useState } from "react";
import * as api from "../api/countriesApi";

export default function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    api.getAll().then(setCountries);
  }, []);

  return { countries }; 
}
