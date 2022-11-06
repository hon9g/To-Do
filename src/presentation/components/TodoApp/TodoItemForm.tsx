import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "./TodoItemForm.css"
interface Props {
  description: string
  deadline: Date
  onDescriptionChange: (newValue: string) => void
  onDeadlineChange: (newDate: Date) => void
  onSubmit: (event?: React.FormEvent<HTMLFormElement>) => void
  addItemLabel?: string
  cancleLabel?: string
  
}

enum DEFAULT {
  addItemLabel = "할 일 추가",
  cancleLabel = "취소",
  deadlineFormLabel = "데드라인: "
}

const TodoItemForm = ({ description, deadline, onDescriptionChange, onDeadlineChange, onSubmit, addItemLabel }: Props) => {
  const [isActive, setIsActive] = useState(false)
  
  const handleOnSubmit = (e: React.MouseEvent) => {
    onSubmit()
    onDescriptionChange('')
    e.preventDefault()
  }
  const handleDescriptionOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onDescriptionChange(e.target.value)
  }
  const handleDateChange = (newDate: Date) => {
    onDeadlineChange(newDate)
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
      <textarea className="textarea" onChange={handleDescriptionOnChange} value={description} />
    </div>
    <div className="btnContainer">
      <div className="datepickerContainer">
        <span>{DEFAULT.deadlineFormLabel}</span>
        <DatePicker
          selected={deadline}
          onChange={handleDateChange}
          dateFormat={'yyyy/MM/dd aa h:mm'}
          showTimeSelect
        />
      </div>
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
