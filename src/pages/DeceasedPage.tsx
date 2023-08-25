import { FC } from "react"
import { DataPerGenderType } from "../interface"
import { DeceasedPerGenderBarGraph } from "../graphs/DeceasedPerGenderBarGraph"
export type DeceasedPageProps = {
  dataPerGender: Array<DataPerGenderType>
}
export const DeceasedPage: FC<DeceasedPageProps> = ({ dataPerGender }) => {
  return (
    //how many ppl died : gender
    //how many ppl died: age
    //how many ppl died: state

    <div>
      Deceased Page for graphs
      <DeceasedPerGenderBarGraph
        dataPerGender={dataPerGender}
      ></DeceasedPerGenderBarGraph>
    </div>
  )
}
