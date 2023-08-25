import { FC } from "react"
import { Bar, Tooltip, Treemap } from "recharts"
import { TreeMapDataType } from "../interface"
export type TreeMapProps = {
  data: TreeMapDataType
}
export const TreeMap: FC<TreeMapProps> = ({ data }) => {
  console.log("Treemap: ", data)

  return (
    <>
      <Treemap
        width={800}
        height={400}
        data={data}
        dataKey="size"
        aspectRatio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
      >
        <Tooltip />
      </Treemap>
    </>
  )
}

const dataTEST = [
  { name: "42", size: 60 },
  { name: "29", size: 50 },
  { name: "53", size: 38 },
  { name: "44", size: 27 },
  { name: "68", size: 12 },
]
