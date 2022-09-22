import React from "react"

import Todo, { TodoItem } from "../../domain/TodoList"
import Button from "../components/Button"
import Checkbox from "../components/Checkbox"
import List from "../components/List"

interface Props {
    model: Todo
}

const App = ({ model }: Props) => {
    return (
        <>
        <h1>To ~ do ~ !</h1>
        <List>
            {model.readAll()?.map(todoItem => <Checkbox label={todoItem.description} value={todoItem.id} isChecked={todoItem.isDone} />)}
        </List>
        <Button onClick={() => {console.log('click')}} label="할 일 추가" />
        </>
    )
}

export default App
