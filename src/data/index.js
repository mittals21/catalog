import json_data from "./data.json"

function data(limit) {
  if (!Array.isArray(json_data))
    throw new Error("The data is not in the array format")

  if (limit === -1) return json_data

  return json_data.filter((_, index) => index % (limit + 1) === 0)
}

export const getFirstData = json_data[0]
export const getLastData = json_data[json_data.length - 1]

export const seriesesData = new Map([
  ["1d", data(0)],
  ["3d", data(2)],
  ["1w", data(6)],
  ["1m", data(29)],
  ["6m", data(180)],
  ["1y", data(365)],
  ["max", data(-1)],
])

export const intervals = ["1d", "3d", "1w", "1m", "6m", "1y", "max"]
