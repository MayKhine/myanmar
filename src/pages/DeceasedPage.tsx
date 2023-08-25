import { FC } from "react"
import { BarGraphDataType } from "../interface"
import { DeceasedPerGenderBarGraph } from "../graphs/DeceasedPerGenderBarGraph"
import { BarGraph } from "../graphs/BarGraph"
import { Bar } from "recharts"
export type DeceasedPageProps = {
  dataPerGender: Array<BarGraphDataType>
}
export const DeceasedPage: FC<DeceasedPageProps> = ({ dataPerGender }) => {
  return (
    //how many ppl died : gender
    //how many ppl died: age
    //how many ppl died: state

    <div>
      Deceased Page for graphs
      <BarGraph data={dataPerGender} width={500} height={500}></BarGraph>
    </div>
  )
}
