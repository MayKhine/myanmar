import { FC } from "react"

export type GraphTitleProps = {
  graphTitle: string
  bgColor?: string
  width?: number
  fontSize?: number
}
export const GraphTitle: FC<GraphTitleProps> = ({
  graphTitle,
  bgColor,
  width,
  fontSize,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor ?? "lightgray",
        width: width ?? "fit-content",
        fontSize: fontSize ?? "1.5em",
      }}
    >
      {graphTitle}
    </div>
  )
}
