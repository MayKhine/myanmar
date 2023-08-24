import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { ParallaxProvider } from "react-scroll-parallax"

// import { RefsPage } from "./RefsPage.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
      {/* <RefsPage /> */}
    </ParallaxProvider>
  </React.StrictMode>
)
