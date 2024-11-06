import { useState } from "react";
import UseDebounce from "../Custom_Hooks/UseDebounce";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = UseDebounce(inputValue, 1000);
  return (
    <div>
      <input
        type="text"
        placeholder="Type..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <div>
        <span>Debounced Value : {debouncedValue} </span>
      </div>
    </div>
  );
}

export default SearchBar;
