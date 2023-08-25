import { FC } from "react"
import { Person, DataPerGenderType } from "../interface"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { GraphTitle } from "../styleComponents/GraphTitle"
export type DeceasedLineGraphProps = {
  dataPerGender: Array<DataPerGenderType>
}

export const DeceasedPerGenderBarGraph: FC<DeceasedLineGraphProps> = ({
  dataPerGender,
}) => {
  const width = 500
  return (
    <>
      <GraphTitle graphTitle={"Deceased per gender"} width={width} />
      <BarChart
        width={width}
        height={width}
        style={{ backgroundColor: "lightgray" }}
        margin={{
          top: 40,
          right: 20,
          left: 10,
          bottom: 20,
        }}
        data={dataPerGender}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="genderType" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="black"></Bar>
      </BarChart>
    </>
  )
}
