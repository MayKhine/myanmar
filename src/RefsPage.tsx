import { FC, useRef, useState } from "react"

export const RefsPage: FC = () => {
  const [count, setCount] = useState(0)
  const myDivRef = useRef<HTMLDivElement>(null)

  console.log("1) in render, what is myDivref", myDivRef)

  const handleClikcWierdFunkycountExample = () => {
    const divEl = myDivRef.current
    if (!divEl) return
    divEl.innerHTML = "What is going on"
  }

  return (
    <>
      <>
        <button onClick={() => setCount(count + 1)}>
          normal count + 1 example
        </button>
        <div>{count}</div>
      </>

      <>
        <button onClick={handleClikcWierdFunkycountExample}>
          weird funky count + 1 example
        </button>
        <div ref={myDivRef}>...</div>
      </>
    </>
  )
}
