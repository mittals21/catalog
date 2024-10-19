import React, { useState } from "react"
import fullscreen from "../assets/fullscreen.svg"
import compare from "../assets/compare.svg"
import Chart from "./Chart"
import { Box, Modal } from "@mui/material"
import { intervals } from "../data"

const style = {
  position: "fixed",
  top: "2%",
  left: "2%",
  bottom: "2%",
  right: "2%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
}

const ChartComponent = () => {
  const [chartInterval, setChartInterval] = useState("1d")
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="pl-14 pr-48 pt-7  text-lg  flex items-center gap-32">
          <div className="flex items-center gap-8 text-gray-700">
            <div
              onClick={() => setOpen(true)}
              title="Full Screen"
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src={fullscreen} alt="" />
              <p>Fullscreen</p>
            </div>
            <div className="flex items-center gap-2 cursor-not-allowed">
              <img src={compare} alt="" />
              <p>Compare</p>
            </div>
          </div>

          <div>
            {intervals?.map((i) => (
              <button
                key={i}
                onClick={() => setChartInterval(i)}
                className={`px-4 py-1 mr-3 ${
                  chartInterval === i
                    ? "bg-[#4B40EE] rounded-md text-white"
                    : " text-gray-700"
                }`}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
        <div className="px-14 mt-10">
          <Chart chartInterval={chartInterval} />
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <p className="text-center absolute w-full top-5 text-2xl font-light text-[#4B40EE]">
            Scroll Up or Down to change Zoom
          </p>
          <div className="flex h-full w-full justify-center items-center">
            <Chart chartInterval={chartInterval} />
          </div>
          <p className="text-end absolute w-full bottom-3 right-5 text-xl font-light text-[#4B40EE]">
            Esc to Close
          </p>
        </Box>
      </Modal>
    </>
  )
}

export default ChartComponent
