import { motion } from "framer-motion"

import deceasedData from "../assets/deceased.json"
import { useMemo } from "react"
export const Page1 = () => {
  const nameArrMemo: Array<string> = useMemo(() => {
    const nameArr: Array<string> = []
    deceasedData.data.table.rows.forEach((e) => {
      nameArr.push(e.cellValuesByColumnId.fldHfL2UA8oU0Imne)
    })
    return nameArr
  }, [deceasedData])

  return (
    <motion.div
      style={{ backgroundColor: "gray", originX: 0.6 }}
      animate={{ translateY: "-100%" }}
      transition={{
        duration: 5,
        // repeat: Infinity,
        // repeatDelay: 3,
      }}
    >
      {nameArrMemo.map((e) => {
        return <div style={{ backgroundColor: "orange" }}> {e}</div>
      })}
    </motion.div>
  )
}
