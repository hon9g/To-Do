import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Todo, { TodoItemProps } from "../../domain/TodoList"
import Checkbox from "../components/Checkbox"
import List from "../components/List"
import TextInput from "../components/TextInput"

interface Props {
    model: Todo
}

const Main = ({ model }: Props) => {
    const [todoList, setTodoList] = useState(model.readAll())
    const [newTodoDescription, setNewTodoDescription] = useState('')
    const addTodoItem = () => {
        if (!newTodoDescription.length) {
            alert('무슨 할 일을 해야하나요? 할 일에 대해 1 글자 이상 입력해주세요.')
            return
        }
        model.create({ description: newTodoDescription })
        setTodoList(model.readAll())
        setNewTodoDescription('')
    }
    const onChangeNewTodoDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoDescription(event.target.value)
    }
    return (
    <>
    <List>
        {todoList.map(todoItem => <Checkbox
            label={todoItem.description}
            value={todoItem.id}
            isChecked={todoItem.isDone}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                model.update({
                    [TodoItemProps.ID]: todoItem.id,
                    property: TodoItemProps.IS_DONE,
                    newValue: event.target.checked,
                })
                setTodoList(model.readAll())
            }}
            key={todoItem.id.toString()}
            />)}
    </List>
    <TextInput
        value={newTodoDescription}
        onChange={onChangeNewTodoDescription}
        onSubmit={addTodoItem}
    />
    </>
    )
}

const Edit = ({ model }: Props) => {
    return <h3>on Edit Mode</h3>
}

const App = ({ model }: Props) => {
    return (
        <>
        <h1>To ~ do ~ !</h1>
        <Routes>
            <Route path="/" element={<Main model={model} />} />
            <Route path="/edit" element={<Edit model={model} />} />
        </Routes>
        </>
    )
}

export default App
