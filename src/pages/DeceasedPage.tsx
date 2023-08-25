import { FC } from "react"
import { BarGraphDataType } from "../interface"
import { BarGraph } from "../graphs/BarGraph"
import { GraphTitle } from "../styleComponents/GraphTitle"
export type DeceasedPageProps = {
  dataPerGender: Array<BarGraphDataType>
}
export const DeceasedPage: FC<DeceasedPageProps> = ({ dataPerGender }) => {
  console.log("deced by genderr: ", dataPerGender)
  return (
    //how many ppl died : gender
    //how many ppl died: age
    //how many ppl died: state
    <div style={{ display: "flex" }}>
      <div>
        Deceased Page for graphs
        <GraphTitle graphTitle={"Deceased by gender"} width={500}></GraphTitle>
        <BarGraph data={dataPerGender} width={500} height={400}></BarGraph>
      </div>
      {/* <div>
        Deceased Page for graphs
        <GraphTitle graphTitle={"Deceased by gender"} width={500}></GraphTitle>
        <BarGraph data={dataPerAge} width={800} height={400}></BarGraph>
      </div> */}
    </div>
  )
}
