import React from "react"
import TodoListModel, {
  TodoItemProps,
  TodoItem as TodoItemType,
} from "../../../domain/TodoList"
import LinkButton from "../../components/LinkButton"
import List from "../../components/List"
import Title from "../../components/Title"
import TodoItem from "../../components/TodoApp/TodoItem"
import TodoItemForm from "../../components/TodoApp/TodoItemForm"

import { PATH } from "./index"

enum PAGE_CONTENTS {
  TITLE = "오늘 할 일",
  GOTO_HOME = "모든 할 일 보러가기",
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

const TodayPage = ({
  todoList,
  newItemDescription,
  setNewItemDescription,
  newItemDeadline,
  setNewItemDeadline,
  addNewItem,
  toggleItemIsDone,
  onItemDelete,
}: Props) => {
  const todayTodoList = todoList?.filter((todoItem) =>
    TodoListModel.isTodayTodoItem(todoItem)
  )
  return (
    <>
      <Title>{PAGE_CONTENTS.TITLE}</Title>
      <List>
        {todayTodoList.map((todoItem, idx) => (
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
      <LinkButton to={PATH.HOME} className="link">
        {PAGE_CONTENTS.GOTO_HOME}
      </LinkButton>
    </>
  )
}

export default TodayPage
