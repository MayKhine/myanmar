import { FC } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

import { BarGraphDataType } from "../interface"
export type BarGraphProps = {
  data: Array<BarGraphDataType>
  width: number
  height: number
  bgColor?: string
}
export const BarGraph: FC<BarGraphProps> = ({
  data,
  width,
  height,
  bgColor,
}) => {
  return (
    <BarChart
      width={width}
      height={height}
      style={{ backgroundColor: bgColor ?? "white" }}
      margin={{
        top: 40,
        right: 20,
        left: 10,
        bottom: 20,
      }}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="type" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="black"></Bar>
    </BarChart>
  )
}
