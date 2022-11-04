import React from "react"
import { Routes, Route } from "react-router-dom"

import TodoList from "../../../domain/TodoList"
import MainPage from "./MainPage"

enum PATH {
    HOME = '/',
}

interface Props {
    model: TodoList
}

const App = ({ model }: Props) => {
    return (
        <>
        <Routes>
            <Route path={PATH.HOME} element={<MainPage model={model} />} />
        </Routes>
        </>
    )
}

export default App
