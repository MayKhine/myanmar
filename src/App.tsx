import { Parallax } from "react-scroll-parallax"
import { useState, useMemo } from "react"

import { IntroPage } from "./pages/IntroPage"
import { DeceasedPage } from "./pages/DeceasedPage"
// import { TreeMap } from "./graphs/TreeMap"
import { PieChartGraph } from "./graphs/PieChartGraph"
import deceasedData from "./assets/deceased.json"
import { Person, BarGraphDataType, TreeMapDataType } from "./interface.ts"
function App() {
  //data
  const deceasedPerGender: Array<BarGraphDataType> = []
  const deceasedPerAge: Array<TreeMapDataType> = []

  const deceasedDataMemo: Array<Person> = useMemo(() => {
    const _deceasedPerGender: Record<string, number> = {}
    const _deceasedPerAge: Record<string, number> = {}
    const deceasedDataArr: Array<Person> = []

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
    }

    //state map
    const stateOptions =
      deceasedData.data.table.columns[10].typeOptions!.choices
    const stateMap: Record<string, string> = {}
    for (const [key, value] of Object.entries(stateOptions)) {
      stateMap[key] = value.name
    }

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
        const person: Person = {
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

        if (_deceasedPerAge[ageOptionId]) {
          _deceasedPerAge[ageOptionId] = _deceasedPerAge[ageOptionId] + 1
        } else {
          _deceasedPerAge[ageOptionId] = 1
        }
      }
    )

    //deceasedPerGender update
    for (const [key, value] of Object.entries(_deceasedPerGender)) {
      const genderType = genderMap[key] || "unknown"
      const gender: BarGraphDataType = {}
      gender.type = genderType
      gender.value = value
      deceasedPerGender.push(gender)
    }

    //deceasedPerAge update
    for (const [key, value] of Object.entries(_deceasedPerAge)) {
      const ageType = ageMap[key] || "unknown"
      const age: TreeMapDataType = {}
      age.name = ageType
      age.size = value
      // age.order = Number(ageType) || 999
      deceasedPerAge.push(age)
    }
    return deceasedDataArr
  }, [deceasedData])

  const [nextPage, setNextPage] = useState<boolean>(false)

  console.log("deceasedPerGender in app: ", deceasedPerGender) // data seems to appear blank after reloading
  console.log("Memoed data: ", deceasedDataMemo)
  return (
    <>
      <Parallax style={{ height: "100vh" }}>
        <IntroPage setNextPage={setNextPage}></IntroPage>
      </Parallax>
      {nextPage && (
        <>
          <Parallax style={{ height: "100%", backgroundColor: "gray" }}>
            <DeceasedPage
              dataPerGender={deceasedPerGender}
              // dataPerAge={deceasedPerAge}
            ></DeceasedPage>
          </Parallax>
          <Parallax style={{ height: "100vh" }}>
            <div style={{ backgroundColor: "lightGray", height: "100vh" }}>
              {/* <TreeMap data={deceasedPerAge}></TreeMap> */}
              <PieChartGraph></PieChartGraph>
            </div>
          </Parallax>
        </>
      )}
    </>
  )
}

export default App
