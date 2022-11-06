import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import TodoApp from "./views/TodoApp"

export default ({ model }) => {
  const rootElement = document.getElementById("root")
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <BrowserRouter basename="/To-Do/">
        <TodoApp model={model} />
      </BrowserRouter>
    </StrictMode>
  )
}
