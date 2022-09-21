import React from "react"
import ReactDOM from "react-dom"

import TodoApp from "./views/TodoApp"

export default data => ReactDOM.render(<TodoApp data={data} />, document.getElementById("root"))
