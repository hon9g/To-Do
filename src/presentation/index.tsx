import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TodoApp from "./views/TodoApp"

export default ({ model }) => {
    const rootElement = document.getElementById("root");
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <TodoApp model={model} />
      </StrictMode>
    );
}


