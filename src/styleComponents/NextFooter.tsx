export type NextFooterProps = {
  text: string
}
export const NextFooter: FC<NextFooterProps> = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: "darkGray",
        display: "flex",
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "40px",
        alignSelf: "center",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
      }}
      onClick={() => {
        console.log("Clicked: pls go to next page")
      }}
    >
      {text}
    </div>
  )
}
