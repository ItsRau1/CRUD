import React from "react"
import { AppRoutes } from "./AppRoutes"
import { GlobalStyle } from "./styles/GlobalStyle"

export default function App() {
  return (
    <div id="myRoot">
      <GlobalStyle />
      <AppRoutes />
    </div>
  )
}