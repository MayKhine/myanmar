import { FC } from "react"
import { Person, dataPerGenderProps } from "../interface"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

export type DeceasedLineGraphProps = {
  data: Array<Person>
  dataPerGender: dataPerGenderProps
}

export const DeceasedLineGraph: FC<DeceasedLineGraphProps> = ({
  data,
  dataPerGender,
}) => {
  console.log("In graph: ", dataPerGender)
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <Line type="monotone" dataKey="amt" stroke="red" />
    </LineChart>
  )
}
