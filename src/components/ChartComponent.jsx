import React, { useState } from "react"
import fullscreen from "../assets/fullscreen.svg"
import compare from "../assets/compare.svg"
import Chart from "./Chart"

const ChartComponent = () => {
  const [timeframe, setTimeframe] = useState("1d")
  const timeFrames = [
    { timeframe: "1d" },
    { timeframe: "3d" },
    { timeframe: "1w" },
    { timeframe: "1m" },
    { timeframe: "6m" },
    { timeframe: "1y" },
    { timeframe: "max" },
  ]

  return (
    <div className="flex flex-col justify-center">
      <div className="pl-14 pr-48 pt-7  text-lg  flex items-center gap-32">
      <div className="flex items-center gap-8 text-gray-700">
        <div className="flex items-center gap-2 ">
          <img src={fullscreen} alt="" />
          <p>Fullscreen</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={compare} alt="" />
          <p>Compare</p>
        </div>
      </div>

      <div>
        {timeFrames.map((e) => (
          <button
            onClick={() => setTimeframe(e.timeframe)}
            className={`px-4 py-1 mr-3 ${
              timeframe === e.timeframe
                ? "bg-[#4B40EE] rounded-md text-white"
                : " text-gray-700"
            }`}
          >
            {e?.timeframe}
          </button>
        ))}
      </div>
    </div>
    <Chart/>
    </div>
  )
}

export default ChartComponent
