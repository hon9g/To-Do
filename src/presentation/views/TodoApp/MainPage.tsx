import React, { useState } from "react"
import { Link } from "react-router-dom"

import TodoList, { TodoItemProps } from "../../../domain/TodoList"
import List from "../../components/List"
import TextInput from "../../components/TextInput"
import TodoItem from "../../components/TodoApp/TodoItem"

import { PATH } from "./index"

enum PAGE_CONTENTS {
    TITLE = 'To ~ Do ~! ~!',
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
    <TextInput
        value={newTodoDescription}
        onChange={onChangeNewTodoDescription}
        onSubmit={addTodoItem}
        label={PAGE_CONTENTS.BTN_ADD_TODO_ITEM}
    />
    <Link to={PATH.TODAY}> 오늘 할 일 보러가기 </Link>
    </>
  )
}

export default Main
