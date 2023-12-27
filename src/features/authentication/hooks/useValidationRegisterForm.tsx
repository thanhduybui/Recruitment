import { useEffect, useCallback, useState } from "react";

export default function useValidationRegisterForm(
  email: string,
  password: string,
  confirmPassword: string
) {
  const [isFormValid, setIsFormValid] = useState(false);

  const validateRegisterForm = useCallback(() => {
    let valid = true;

    // Validate email
    if (!email) {
      valid = false;
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
      valid = false;
    }

    // Validate password
    if (!password) {
      valid = false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      valid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      valid = false;
    }

    return valid;
  }, [email, password, confirmPassword]);

  useEffect(() => {
    setIsFormValid(() => validateRegisterForm());
  }, [email, password, confirmPassword, validateRegisterForm]);

  return { isFormValid };
}
