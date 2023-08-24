import deceasedData from "../assets/deceased.json"
import { DeceasedLineGraph } from "../graphs/DeceasedLineGraph"

import { useMemo } from "react"
import { Person } from "../interface"

export const Page1 = () => {
  const deceasedDataMemo: Array<string> = useMemo(() => {
    const ageOptions = deceasedData.data.table.columns[5].typeOptions!.choices
    const genderOptions =
      deceasedData.data.table.columns[4].typeOptions!.choices

    console.log("Gender: ", genderOptions)

    const deceasedDataArr: Array<Person> = []

    const ageMap: Record<string, string> = {}
    for (const [key, value] of Object.entries(ageOptions)) {
      ageMap[key] = value.name
    }

    deceasedData.data.table.rows.forEach(
      ({
        cellValuesByColumnId: {
          fldTKrApalVoFMKMh: id,
          fldHfL2UA8oU0Imne: name,
          fldoWIjKkayTFXAt5: ageOptionId,
        },
      }) => {
        const person = {
          id: id,
          name: name,
          age: ageMap[ageOptionId] || "unknown",
        }
        // console.log("person: ", person)
        deceasedDataArr.push(person)
      }
    )
    return deceasedDataArr
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
