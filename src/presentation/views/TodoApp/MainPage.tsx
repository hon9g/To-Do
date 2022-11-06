import React, { useState } from "react"
import { Link } from "react-router-dom"

import TodoList, { TodoItemProps } from "../../../domain/TodoList"
import List from "../../components/List"
import TodoItem from "../../components/TodoApp/TodoItem"
import TodoItemForm from "../../components/TodoApp/TodoItemForm"

import { PATH } from "./index"

enum PAGE_CONTENTS {
    TITLE = '할 일을 하자 !',
    TITLE_EDIT = '수정',
    BTN_ADD_TODO_ITEM = '추가',
    NOTICE_BACK_TO_HOME = '돌아가기',
    NOTICE_CREATE_TODO_ITEM = '무슨 할 일을 해야하나요? 할 일에 대해 1 글자 이상 입력해주세요.'
}

interface Props {
    model: TodoList
}

const Main = ({ model }: Props) => {
  const [todoList, setTodoList] = useState(model.readAll())
  const [newTodoDescription, setNewTodoDescription] = useState('')
  const [deadline, setDeadline] = useState(model.getDefaultDeadline())

  const addTodoItem = () => {
    if (!newTodoDescription.length) {
        alert(PAGE_CONTENTS.NOTICE_CREATE_TODO_ITEM)
        return
    }
    model.create({
      description: newTodoDescription,
      deadline: deadline,
    })
    setTodoList(model.readAll())
    setNewTodoDescription('')
  }

  const onChangeNewTodoDescription = (newValue: string) => {
      setNewTodoDescription(newValue)
  }
  
  const toggleItemIsDone = ({ id, isDone }) => {
    model.update({
      [TodoItemProps.ID]: id,
      property: TodoItemProps.IS_DONE,
      newValue: isDone,
    })
    setTodoList(model.readAll())
  }

  const onItemDelete = ({ id }) => {
    model.delete({ id })
    setTodoList(model.readAll())
  }

  return (
    <>
    <h1 className="title">{PAGE_CONTENTS.TITLE}</h1>
    <List>
        {todoList.map((todoItem, idx) => <TodoItem
          data={todoItem}
          toggleIsDone={toggleItemIsDone}
          onDelete={onItemDelete}
          key={idx}
        />)}
    </List>
    <TodoItemForm
      description={newTodoDescription}
      deadline={deadline}
      onDescriptionChange={onChangeNewTodoDescription}
      onDeadlineChange={(newDate: Date) => { setDeadline(newDate) }}
      onSubmit={addTodoItem}
    />
    <Link to={PATH.TODAY}> 오늘 할 일 보러가기 </Link>
    </>
  )
}

export default Main
