import deceasedData from "../assets/deceased.json"
import { DeceasedLineGraph } from "../graphs/DeceasedLineGraph"

import { useMemo } from "react"
export const Page1 = () => {
  const nameArrMemo: Array<string> = useMemo(() => {
    const nameArr: Array<string> = []
    deceasedData.data.table.rows.forEach((e) => {
      nameArr.push(e.cellValuesByColumnId.fldHfL2UA8oU0Imne)
    })
    return nameArr
  }, [deceasedData])

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  console.log("deceasedData: ", deceasedData)
  return <DeceasedLineGraph data={data}></DeceasedLineGraph>
}
