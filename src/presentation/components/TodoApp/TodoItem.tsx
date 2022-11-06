import React from "react"
import "./TodoItem.css"

import CheckboxWithDeleteByDrag from "../CheckboxWithDeleteByDrag"
import TodoListModel, { TodoItem as TodoItemType , TodoItemProps } from "../../../domain/TodoList"

interface Props {
  data: TodoItemType
  toggleIsDone: ({ id, isDone }: Pick<TodoItemType, TodoItemProps.ID | TodoItemProps.IS_DONE>) => void
  onDelete: ({ id }: Pick<TodoItemType, TodoItemProps.ID>) => void
}

const TodoItem = ({ data, toggleIsDone, onDelete }: Props) => {
  const handleToggleIsDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    toggleIsDone({
      id: data.id,
      isDone: e.target.checked,
    })
  }
  const handleOnDelete = () => {
    onDelete({ id: data.id })
  }

  return (
    <>
    <div className="item">
    <CheckboxWithDeleteByDrag
      label={data.description}
      value={data.id}
      isChecked={data.isDone}
      onChange={handleToggleIsDone}
      onDelete={handleOnDelete}
      />
    </div>
      <div className={`dock--bottom ${TodoListModel.isOutdated(data.deadline) ? 'deadline--outdated' : ''}`}>
        {`${data.deadline.toLocaleString()} 까지`}
      </div>
    </>
  )
}

export default TodoItem
