import { TypeAnimation } from "react-type-animation"
import { Dispatch, useState } from "react"
import { CenteredDiv } from "../styleComponents/CenteredDiv"
import { NextFooter } from "../styleComponents/NextFooter"

export type IntroPageProps = {
  setNextPage: React.Dispatch<React.SetStateAction<boolean>>
}
export const IntroPage: FC<IntroPageProps> = ({ setNextPage }) => {
  const [showSubText, setShowSubText] = useState<boolean>(false)
  return (
    <CenteredDiv backgroundColor={"black"}>
      <CenteredDiv
        backgroundColor={"black"}
        height={"max-content"}
        width={"900px"}
      >
        <div style={{ textAlign: "center" }}>
          <TypeAnimation
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              fontSize: "4em",
              color: "white",
            }}
            sequence={[
              "MYANMAR",
              100,
              (el) => {
                if (!el) return
                el.className = ""
                setShowSubText(true)
                setNextPage(true)
              },
            ]}
            speed={20}
          ></TypeAnimation>
          <div></div>
          {showSubText && (
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                fontSize: "1.5em",
                color: "white",
              }}
              sequence={[
                "Since the military’s coup on February 1, 2021, the political, economic, and humanitarian crisis in Myanmar(Burma) has only grown more dire, with reports indicating nearly 3,000 killed, nearly 17,000 detained, and more than 1.5 million displaced.",
                100,
                () => {
                  // setNextPage(true)
                },
              ]}
              speed={40}
            ></TypeAnimation>
          )}
        </div>
      </CenteredDiv>
    </CenteredDiv>
  )
}
