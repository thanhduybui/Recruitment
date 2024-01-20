import { convertLocation } from "@features/job";
import { useState, useEffect } from "react";
export default function useLocationName(id: string) {
  const [locationName, setLocationName] = useState("");
  useEffect(() => {
    const getLocationName = async () => {
      const locationName = await convertLocation(id);
      setLocationName(locationName);
    };
    getLocationName();
  }, [id]);
  return locationName;
}
