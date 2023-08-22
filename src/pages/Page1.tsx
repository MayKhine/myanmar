import { motion } from "framer-motion"

import deceasedData from "../assets/deceased.json"
import { useMemo, useState } from "react"
export const Page1 = () => {
  const nameArrMemo: Array<string> = useMemo(() => {
    const nameArr: Array<string> = []
    deceasedData.data.table.rows.forEach((e) => {
      nameArr.push(e.cellValuesByColumnId.fldHfL2UA8oU0Imne)
    })
    return nameArr
  }, [deceasedData])

  const [tempArr, setTempArr] = useState(nameArrMemo.slice(0, 500))

  //push the first 500 data to temp arr
  const slicedArr = nameArrMemo.slice(0, 5)
  console.log("SlicedArr: ", slicedArr)
  // setTempArr(slicedArr)
  console.log("Temp arr: ", tempArr)
  const onAnimationComplete = () => {
    console.log("Animation endeddd")
  }
  return (
    <div>
      <motion.div
        style={{ backgroundColor: "lightgray" }}
        initial={{ opacity: 1, y: "10vh" }} //0.2 99vh start from below and low opacity
        animate={{ translateY: "-100%", opacity: 0.8, y: "100vh" }}
        onAnimationComplete={onAnimationComplete}
        transition={{
          duration: 3, //600,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeOut",
        }}
      >
        {/* {nameArrMemo.map((e) => {
          return <div> {e}</div>
        })} */}

        <div
          style={{
            display: "grid",
            columnGap: "10px",
            gridTemplateColumns: "auto auto auto auto ",
          }}
        >
          {tempArr.map((e) => {
            return <div style={{ display: "inline-grid" }}> {e}</div>
          })}
        </div>
      </motion.div>
    </div>
  )
}
