"use client";

import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="text-3xl text-neutral-900">
        Welcome to the client page
      </div>
      <div className="text-xl text-neutral-500">
        this page is Generated on client side and provides client side
        interactivity.
      </div>
      <button
        className="p-2 border rounded-sm hover:bg-neutral-300 duration-200 ease"
        onClick={handleClick}
      >
        Count{count}
      </button>
    </div>
  );
};
