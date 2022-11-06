import React, { useState } from "react"
import "./TodoItemForm.css"

interface Props {
  value: string
  onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event?: React.FormEvent<HTMLFormElement>) => void
  addItemLabel?: string
  cancleLabel?: string
  
}

enum DEFAULT {
  addItemLabel = "할 일 추가",
  cancleLabel = "취소",
}

const TodoItemForm = ({ value, onChange, onSubmit, addItemLabel }: Props) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
    {
    !isActive && (
      <label className="addBtnContainer" onClick={() => { setIsActive(true) }}>
        <input className="circleBtn" type={"button"} value="+" />
        {addItemLabel ?? DEFAULT.addItemLabel}
      </label>
    )}
    {
    isActive && (
    <>
    <div className="textareaContainer">
      <textarea className="textarea" />
    </div>
    <div className="btnContainer">
      <button
        className="formBtn"
        onClick={() => { setIsActive(false) }}
      >
        {DEFAULT.cancleLabel}
      </button>
      <button className="formBtn">{addItemLabel ?? DEFAULT.addItemLabel}</button>
    </div>      
    </>
    )}
    </>
  )
}

export default TodoItemForm
