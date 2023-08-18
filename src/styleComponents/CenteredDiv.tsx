const CenteredDivProps = () => {
  backgroundColor: String
  height: String
  width: string
}

export const CenteredDiv: FC<CenteredDivProps> = ({
  backgroundColor,
  height,
  width,
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: backgroundColor,
        width: width ? width : "100%",
        height: height ? height : "100%",
      }}
    >
      {children}
    </div>
  )
}
