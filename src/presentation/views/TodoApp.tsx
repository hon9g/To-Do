import React, { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"

import TodoList, { TodoItemProps } from "../../domain/TodoList"
import CheckboxWithDeleteByDrag from "../components/CheckboxWithDeleteByDrag"
import List from "../components/List"
import TextInput from "../components/TextInput"

enum PAGE_CONTENTS {
    TITLE = 'To ~ Do ~! ~!',
    TITLE_EDIT = '수정',
    BTN_ADD_TODO_ITEM = '추가',
    NOTICE_BACK_TO_HOME = '돌아가기',
    NOTICE_CREATE_TODO_ITEM = '무슨 할 일을 해야하나요? 할 일에 대해 1 글자 이상 입력해주세요.'
}

enum PATH {
    HOME = '/',
    EDIT = '/edit',
}


interface Props {
    model: TodoList
}

const Main = ({ model }: Props) => {
    const [todoList, setTodoList] = useState(model.readAll())
    const [newTodoDescription, setNewTodoDescription] = useState('')
    const addTodoItem = () => {
        if (!newTodoDescription.length) {
            alert(PAGE_CONTENTS.NOTICE_CREATE_TODO_ITEM)
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
        {todoList.map(todoItem => <CheckboxWithDeleteByDrag
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
            onDelete={() => {
              model.delete({ id: todoItem.id })
              setTodoList(model.readAll())
            }}
            key={todoItem.id.toString()}
            />)}
    </List>
    <TextInput
        value={newTodoDescription}
        onChange={onChangeNewTodoDescription}
        onSubmit={addTodoItem}
        label={PAGE_CONTENTS.BTN_ADD_TODO_ITEM}
    />
    </>
    )
}

const App = ({ model }: Props) => {
    return (
        <>
        <h1>{PAGE_CONTENTS.TITLE}</h1>
        <Routes>
            <Route path={PATH.HOME} element={<Main model={model} />} />
        </Routes>
        </>
    )
}

export default App
