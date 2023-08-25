import { FC } from "react"

export type GraphTitleProps = {
  graphTitle: string
  bgColor: string
  width: number
}
export const GraphTitle: FC<GraphTitleProps> = ({
  graphTitle,
  bgColor,
  width,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor || "lightgray",
        width: width ?? "fit-content",
      }}
    >
      {graphTitle}
    </div>
  )
}
