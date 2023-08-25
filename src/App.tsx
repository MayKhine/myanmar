import { Parallax } from "react-scroll-parallax"
import { useState, useMemo } from "react"

import { IntroPage } from "./pages/IntroPage"
import { DeceasedPage } from "./pages/DeceasedPage"
import { Page1 } from "./pages/Page1"

import deceasedData from "./assets/deceased.json"

function App() {
  //data
  const deceasedDataArr: Array<Person> = []
  const deceasedPerGender: Array<dataPerGenderType> = []
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
      }
    )

    //deceasedPerGender update
    for (const [key, value] of Object.entries(_deceasedPerGender)) {
      const genderType = genderMap[key] || "unknown"
      const gender: dataPerGenderType = {}
      gender.genderType = genderType
      gender.value = value
      deceasedPerGender.push(gender)
    }

    return deceasedDataArr
  }, [deceasedData])

  const [nextPage, setNextPage] = useState<boolean>(false)

  return (
    <>
      <Parallax style={{ height: "100vh" }}>
        <IntroPage setNextPage={setNextPage}></IntroPage>
      </Parallax>
      {nextPage && (
        <>
          <Parallax style={{ height: "100%", backgroundColor: "gray" }}>
            <DeceasedPage dataPerGender={deceasedPerGender}></DeceasedPage>
          </Parallax>
          <Parallax style={{ height: "100vh" }}>
            <div style={{ backgroundColor: "red" }}>whow</div>
          </Parallax>
        </>
      )}
    </>
  )
}

export default App
