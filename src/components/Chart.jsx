import React, { useEffect, useRef } from "react"
import { createChart } from "lightweight-charts"
import { seriesesData } from "../data"

const ChartComponent = ({ chartInterval }) => {
  const chartContainerRef = useRef(null)
  const chartInstanceRef = useRef(null)

  useEffect(() => {
    if (chartContainerRef?.current) {
      const chartInstance = createChart(chartContainerRef?.current, {
        width: chartContainerRef?.current?.clientWidth,
        height: 300,
      })

      chartInstanceRef.current = chartInstance

      const lineSeries = chartInstance?.addLineSeries()
      lineSeries?.setData(seriesesData?.get(chartInterval))
      chartInstance.timeScale().fitContent()

      return () => {
        if (chartInstanceRef?.current) {
          chartInstanceRef?.current.remove()
          chartInstanceRef.current = null
        }
      }
    }
  }, [chartInterval])

  return (
    <div ref={chartContainerRef} style={{ height: "300px", width: "100%" }} />
  )
}

export default ChartComponent
