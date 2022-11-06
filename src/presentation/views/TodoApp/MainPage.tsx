import React, { useState } from "react"
import { Link } from "react-router-dom"

import TodoList, {
  TodoItemProps,
  TodoItem as TodoItemType,
} from "../../../domain/TodoList"
import List from "../../components/List"
import TodoItem from "../../components/TodoApp/TodoItem"
import TodoItemForm from "../../components/TodoApp/TodoItemForm"

import { PATH } from "./index"

enum PAGE_CONTENTS {
  TITLE = "할 일을 하자 !",
  GOTO_TODAY = "오늘 할 일 보러가기",
}

interface Props {
  model: TodoList
  todoList: Array<TodoItemType>
  setTodoList: (todoList: Array<TodoItemType>) => void
  newItemDescription: string
  setNewItemDescription: (newDescription: string) => void
  newItemDeadline: Date
  setNewItemDeadline: (newDate: Date) => void
  addNewItem: () => void
  toggleItemIsDone: ({
    id,
    isDone,
  }: Pick<TodoItemType, TodoItemProps.ID | TodoItemProps.IS_DONE>) => void
  onItemDelete: (id: TodoItemType[TodoItemProps.ID]) => void
}

const Main = ({
  model,
  todoList,
  setTodoList,
  newItemDescription,
  setNewItemDescription,
  newItemDeadline,
  setNewItemDeadline,
  addNewItem,
  toggleItemIsDone,
  onItemDelete,
}: Props) => {
  return (
    <>
      <h1 className="title">{PAGE_CONTENTS.TITLE}</h1>
      <List>
        {todoList.map((todoItem, idx) => (
          <TodoItem
            data={todoItem}
            toggleIsDone={toggleItemIsDone}
            onDelete={onItemDelete}
            key={idx}
          />
        ))}
      </List>
      <TodoItemForm
        description={newItemDescription}
        deadline={newItemDeadline}
        onDescriptionChange={setNewItemDescription}
        onDeadlineChange={setNewItemDeadline}
        onSubmit={addNewItem}
      />
      <Link to={PATH.TODAY} className="link">
        {PAGE_CONTENTS.GOTO_TODAY}
      </Link>
    </>
  )
}

export default Main
