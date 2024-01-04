import { Option } from "@data/interface";
import axios from "axios";
import { useState, useEffect } from "react";

export default function useLocationAPI() {
  const [locations, setLocation] = useState<Option[]>([]);

  useEffect(() => {
    axios.get("https://provinces.open-api.vn/api/p/").then((res) => {
      const provinces: Option[] = res.data.map((item) => ({
        id: item.code,
        name: item.name,
      }));
      setLocation(provinces);
    });
  }, []);

  return locations;
}
