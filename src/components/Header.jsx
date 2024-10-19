import React, { useState } from "react"
import { getFirstData, getLastData } from "../data"

const Header = () => {
  const [active, setActive] = useState("Chart")

  const navbarData = [
    { title: "Summary" },
    { title: "Chart" },
    { title: "Statistics" },
    { title: "Analysis" },
    { title: "Settings" },
  ]

  return (
    <div className="px-14 pt-14">
      <div className="flex flex-col justify-start gap-4 mb-8">
        <p className="text-7xl text-[#1A243A] relative">
          {getLastData?.value}{" "}
          <span className="text-2xl absolute top-1 text-[#BDBEBF]">USD</span>
        </p>
        <p className="text-green-500 text-lg">
          + {getLastData?.value - getFirstData?.value} (
          {(
            (getLastData?.value - getFirstData?.value) /
            getFirstData?.value
          )?.toFixed(4) * 100}
          %)
        </p>
      </div>

      <div
        className={
          "flex justify-start items-center space-x-4 mb-8 border-b-[1px] border-gray-300"
        }
      >
        {navbarData?.map((e) => (
          <button
            key={e.title}
            onClick={() => setActive(e.title)}
            className={`px-4 text-lg py-2  ${
              active === e.title
                ? "text-black border-b-4 border-blue-600"
                : "text-[#6F7177] hover:text-blue-600"
            }`}
          >
            {e?.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Header
