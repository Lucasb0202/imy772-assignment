"use client"

import { useState } from "react";

export default function Home() {
  
  const buttons = [
    {
      symbol: "0",
    },
    {
      symbol: "1",
    },
    {
      symbol: "2",
    },
    {
      symbol: "3",
    },
    {
      symbol: "4",
    },
    {
      symbol: "5",
    },
    {
      symbol: "6",
    },
    {
      symbol: "7",
    },
    {
      symbol: "8",
    },
    {
      symbol: "9",
    },
    {
      symbol: "A",
    },
    {
      symbol: "B",
    },
    {
      symbol: "C",
    },
    {
      symbol: "D",
    },
    {
      symbol: "E",
    },
    {
      symbol: "F",
    },
    {
      symbol: "AC"
    }, 
    {
      symbol: "="
    },
    {
      symbol: "+"
    },
    {
      symbol: "-"
    },
    {
      symbol: "X"
    },
    {
      symbol: "÷"
    }
  ]

  const [displayValue, setDisplayValue] = useState("")
  const handleButtonClick = (symbol) => {
    if (symbol === "AC") {
      setDisplayValue("")
    } else {
      setDisplayValue(displayValue + symbol)
    }
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-white w-1/5 h-fit rounded-2xl bg-black overflow-hidden flex flex-col">
        <div className="h-[100px] w-full text-white flex items-end justify-end px-4 py-2 text-3xl">
          {displayValue}
        </div>
        <div className="w-full px-2 py-2">
          <div className="grid grid-cols-4 gap-2 h-full">
            {buttons.map((item, index) => (
              <button
                key={index}
                className={`cursor-pointer rounded-full ${item.symbol === "AC" || item.symbol == "=" || item.symbol == "X" || item.symbol == "÷" || item.symbol == "+" || item.symbol == "-" ? "bg-amber-600" : "bg-gray-800" } aspect-square w-full text-white text-xl`}
                onClick={() => handleButtonClick(item.symbol)}
              >
                <span className="text-2xl">
                  {item.symbol}
                </span>
              </button>
            ))}
          </div>
      </div>
  </div>
</div>
  );
}
