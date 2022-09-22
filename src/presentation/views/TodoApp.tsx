import React, { useState } from "react"

import Todo, { TodoItem } from "../../domain/TodoList"
import Button from "../components/Button"
import Checkbox from "../components/Checkbox"
import List from "../components/List"

interface Props {
    model: Todo
}

const App = ({ model }: Props) => {
    const [todoList, setTodoList] = useState(model.readAll())
    const addTodoItem = () => {
        model.create({ description: "새 할일" })
        setTodoList(model.readAll())
    }
    return (
        <>
        <h1>To ~ do ~ !</h1>
        <List>
            {todoList.map(todoItem => <Checkbox label={todoItem.description} value={todoItem.id} isChecked={todoItem.isDone} />)}
        </List>
        <Button onClick={addTodoItem} label="할 일 추가" />
        </>
    )
}

export default App
