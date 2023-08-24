import deceasedData from "../assets/deceased.json"
import { DeceasedLineGraph } from "../graphs/DeceasedLineGraph"

import { useMemo } from "react"
import { Person } from "../interface"

export const Page1 = () => {
  const deceasedDataArr: Array<Person> = []
  const deceasedPerGender: Record<string, number> = {}

  const deceasedDataMemo: Array<string> = useMemo(() => {
    const _deceasedPerGender: Record<string, number> = {}

    //age map
    const ageOptions = deceasedData.data.table.columns[5].typeOptions!.choices
    const ageMap: Record<string, string> = {}
    for (const [key, value] of Object.entries(ageOptions)) {
      ageMap[key] = value.name
    }
    //gender map
    const genderOptions =
      deceasedData.data.table.columns[4].typeOptions!.choices
    const genderMap: Record<string, string> = {}
    for (const [key, value] of Object.entries(genderOptions)) {
      genderMap[key] = value.name
      // _deceasedPerGender[key] = 0
    }
    // console.log(genderOptions)
    // console.log("_deceasedPerGender: ", _deceasedPerGender)
    //state map
    const stateOptions =
      deceasedData.data.table.columns[10].typeOptions!.choices
    const stateMap: Record<string, string> = {}
    for (const [key, value] of Object.entries(stateOptions)) {
      stateMap[key] = value.name
    }

    // console.log(deceasedData)
    deceasedData.data.table.rows.forEach(
      ({
        cellValuesByColumnId: {
          fldTKrApalVoFMKMh: id,
          fldHfL2UA8oU0Imne: name,
          fldoWIjKkayTFXAt5: ageOptionId,
          fldEkqAJpzoONtvmb: genderOptionId,
          flduovX2qvCfrHEZ5: stateOptionId,
          fld8LEP7Vo3kxhYA5: deceasedDate,
        },
      }) => {
        const person = {
          id: id,
          name: name,
          age: ageMap[ageOptionId] || "unknown",
          gender: genderMap[genderOptionId] || "unknown",
          state: stateMap[stateOptionId] || "unknown",
          deceasedDate: deceasedDate,
        }
        deceasedDataArr.push(person)

        //update the _deceasedPerGender data
        if (_deceasedPerGender[genderOptionId]) {
          _deceasedPerGender[genderOptionId] =
            _deceasedPerGender[genderOptionId] + 1
        } else {
          _deceasedPerGender[genderOptionId] = 1
        }
      }
    )

    //deceasedPerGender update
    for (const [key, value] of Object.entries(_deceasedPerGender)) {
      const gender = genderMap[key] || "unknown"
      deceasedPerGender[gender] = value
    }
    // console.log("_deceasedPerGender: ", _deceasedPerGender)

    return deceasedDataArr
  }, [deceasedData])

  // console.log("deceasedDataArr: ", deceasedDataArr)
  // console.log("deceasedPerGender: ", deceasedPerGender)

  //how many ppl died : gender
  //how many ppl died: age
  //how many ppl died: state

  return (
    <DeceasedLineGraph
      data={deceasedDataArr}
      dataPerGender={deceasedPerGender}
    ></DeceasedLineGraph>
  )
}
