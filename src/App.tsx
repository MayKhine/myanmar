import { IntroPage } from "./pages/IntroPage"
import { DeceasedPage } from "./pages/DeceasedPage"
import { Parallax } from "react-scroll-parallax"
import { NextFooter } from "./styleComponents/NextFooter"
import { useState } from "react"

import { Page1 } from "./pages/Page1"
function App() {
  const [nextPage, setNextPage] = useState<boolean>(false)
  return (
    <>
      <Parallax style={{ height: "100vh" }}>
        <IntroPage setNextPage={setNextPage}></IntroPage>
      </Parallax>
      {nextPage && (
        <>
          <Parallax style={{ height: "100vh" }}>
            <Page1></Page1>
          </Parallax>
          <Parallax style={{ height: "100vh" }}>
            <div style={{ backgroundColor: "red" }}>whow</div>
          </Parallax>
        </>
      )}
    </>
  )
}

export default App
