import React from "react"
import ReactDOM from "react-dom"

import TodoApp from "./views/TodoApp"

export default ({ model }) => ReactDOM.render(<TodoApp model={model} />, document.getElementById("root"))
