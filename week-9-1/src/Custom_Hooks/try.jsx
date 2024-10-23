import { useEffect, useState } from "react";

export default function App() {
  const result = useIsOnline();
  const [count, setCount] = useState(0);
  const xy = useMouseMove();
  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return (
    <>
      {xy.x},{xy.y}
      {result ? <h1>Online</h1> : <h1>Offline</h1>}
      couunt : {count}
      <Apps />
    </>
  );
}

function useMouseMove() {
  const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMouseMove({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return mouseMove;
}

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);
  return isOnline;
}

function useInterval(fn, delay) {
  useEffect(() => {
    const id = setInterval(() => {
      fn();
    }, delay);
    return () => {
      clearInterval(id);
    };
  }, [fn, delay]);
}

function Apps() {
  return (
    <>
      <SearchBar />
    </>
  );
}

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 1000);
  return (
    <>
      <input
        placeholder="Type..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <div>{debouncedValue}</div>
    </>
  );
}

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeID = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timeID);
    };
  }, [value, delay]);
  return debounceValue;
}
