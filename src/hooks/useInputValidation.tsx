import { useEffect, useState } from "react";

type ValidationRule = (
  value: string,
  name?: string,
  passwordValue?: string
) => string;

export default function useInputValidation(
  initialValue: string,
  onChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined,
  validationRule: ValidationRule
) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (inputValue.length === 0) {
      setError(false);
      return;
    }

    const timeout = setTimeout(() => {
      setError(!!validationRule(inputValue));
    }, 300);

    return () => clearTimeout(timeout);
  }, [inputValue, validationRule]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  return { inputValue, error, handleInputChange };
}
