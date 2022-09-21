import React from "react"

import { TodoItem } from "../../domain/TodoList"
import List from "../components/List"
import Checkbox from "../components/Checkbox"

interface Props {
    data: Array<TodoItem>
}

const App = ({ data }: Props) => {
    return (
        <>
        <h1>To ~ do ~ !</h1>
        <List>
            {data.map(todoItem => <Checkbox label={todoItem.description} value={todoItem.id} isChecked={todoItem.isDone} />)}
        </List>
        </>
    )
}

export default App
