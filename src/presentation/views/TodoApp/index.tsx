import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./index.css"

import TodoList, { TodoItemProps } from "../../../domain/TodoList"
import MainPage from "./MainPage"
import TodayPage from "./TodayPage"

export enum PATH {
  HOME = "/",
  TODAY = "/today",
}

enum APP_CONTENTS {
  NOTICE_CREATE_TODO_ITEM = "무슨 할 일을 해야하나요? 할 일에 대해 1 글자 이상 입력해주세요.",
}

interface Props {
  model: TodoList
}

const App = ({ model }: Props) => {
  const [todoList, setTodoList] = useState(model.readAll())
  const [newItemDescription, setNewItemDescription] = useState("")
  const [newItemDeadline, setNewItemDeadline] = useState(
    model.getDefaultDeadline()
  )

  const addTodoItem = () => {
    if (!newItemDescription.length) {
      alert(APP_CONTENTS.NOTICE_CREATE_TODO_ITEM)
      return
    }
    model.create({
      description: newItemDescription,
      deadline: newItemDeadline,
    })
    setTodoList(model.readAll())
    setNewItemDescription("")
  }

  const onChangeNewTodoDescription = (newValue: string) => {
    setNewItemDescription(newValue)
  }

  const toggleItemIsDone = ({ id, isDone }) => {
    model.update({
      [TodoItemProps.ID]: id,
      property: TodoItemProps.IS_DONE,
      newValue: isDone,
    })
    setTodoList(model.readAll())
  }

  const onItemDelete = (id) => {
    model.delete({ id })
    setTodoList(model.readAll())
  }
  return (
    <>
      <Routes>
        <Route
          path={PATH.HOME}
          element={
            <MainPage
              todoList={todoList}
              newItemDescription={newItemDescription}
              setNewItemDescription={onChangeNewTodoDescription}
              newItemDeadline={newItemDeadline}
              setNewItemDeadline={setNewItemDeadline}
              addNewItem={addTodoItem}
              toggleItemIsDone={toggleItemIsDone}
              onItemDelete={onItemDelete}
            />
          }
        />
        <Route path={PATH.TODAY} element={<TodayPage />} />
      </Routes>
    </>
  )
}

export default App
