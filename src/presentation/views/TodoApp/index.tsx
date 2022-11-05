import React from "react"
import { Routes, Route } from "react-router-dom"
import './index.css'

import TodoList from "../../../domain/TodoList"
import MainPage from "./MainPage"
import TodayPage from "./TodayPage"

export enum PATH {
    HOME = '/',
    TODAY = '/today',
}

interface Props {
    model: TodoList
}

const App = ({ model }: Props) => {
    return (
        <>
        <Routes>
            <Route path={PATH.HOME} element={<MainPage model={model} />} />
            <Route path={PATH.TODAY} element={<TodayPage />} />
        </Routes>
        </>
    )
}

export default App
