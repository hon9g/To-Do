import React, { useState } from "react"
import { Link } from "react-router-dom"

import {
  TodoItemProps,
  TodoItem as TodoItemType,
} from "../../../domain/TodoList"
import List from "../../components/List"
import Title from "../../components/Title"
import TodoItem from "../../components/TodoApp/TodoItem"
import TodoItemForm from "../../components/TodoApp/TodoItemForm"

import { PATH } from "./index"

enum PAGE_CONTENTS {
  TITLE = "할 일을 하자 !",
  GOTO_TODAY = "오늘 할 일 보러가기",
}

interface Props {
  todoList: Array<TodoItemType>
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
  todoList,
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
      <Title>{PAGE_CONTENTS.TITLE}</Title>
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
