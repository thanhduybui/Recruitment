import { useEffect, useState, Dispatch, SetStateAction } from "react";

export default function useAlert(
  initialState: boolean,
  duration = 1500
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [showAlert, setShowAlert] = useState<boolean>(initialState);

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [showAlert, duration]);

  return [showAlert, setShowAlert];
}
