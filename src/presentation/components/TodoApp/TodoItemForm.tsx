import React, { useState } from "react"
import "./TodoItemForm.css"

interface Props {
  value: string
  onChange: (newValue: string) => void
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
  const handleOnSubmit = (e: React.MouseEvent) => {
    onSubmit()
    onChange('')
    e.preventDefault()
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }
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
      <textarea className="textarea" onChange={handleOnChange} value={value} />
    </div>
    <div className="btnContainer">
      <button
        className="formBtn"
        onClick={() => { setIsActive(false) }}
      >
        {DEFAULT.cancleLabel}
      </button>
      <button
        className="formBtn"
        onClick={handleOnSubmit}
      >
        {addItemLabel ?? DEFAULT.addItemLabel}
      </button>
    </div>      
    </>
    )}
    </>
  )
}

export default TodoItemForm
