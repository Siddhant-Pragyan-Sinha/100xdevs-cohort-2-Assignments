import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, SetDebouncedValue] = useState(value);
  useEffect(() => {
    const setID = setTimeout(() => {
      SetDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(setID);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;
