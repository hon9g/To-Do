import React, { useState } from "react";

import './WithDeleteByDrag.css'


const BTN_DELETE = '삭제'
export interface Props {
  wrappedComponent: React.ReactNode
  onDelete: (e?: React.MouseEvent) => void
}

const WithDeleteByDrag = ({ wrappedComponent, onDelete }: Props) => {
  const [onDeleteMode, setDeleteMode] = useState(false)
  const [xStart, setXStart] = useState(0)

  const handleDragEnter = (e: React.MouseEvent | React.TouchEvent) => {
    if ('clientX' in e) {
      setXStart(e.clientX)
    }
    else if ('changedTouches' in e) {
      setXStart(e.changedTouches[0].clientX)
    }
  }

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    let xEnd = xStart
    if ('clientX' in e) {
      xEnd = e.clientX
    }
    else if ('changedTouches' in e) {
      xEnd = e.changedTouches[0].clientX
    }
    setDeleteMode(xStart > xEnd)
    setXStart(0)
  }

  const handleOnDelete = (e: React.MouseEvent) => {
    onDelete(e)
  }

  return (
    <div
      className="container"
      onMouseDown={handleDragEnter}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragEnter}
      onTouchEnd={handleDragEnd}
    >
      {wrappedComponent}
      <div
        className={`deleteBtn ${onDeleteMode ? 'deleteBtn--active' : ''}`}
        onClick={handleOnDelete}
      >
        {BTN_DELETE}
      </div>
    </div>
  )
}

export default WithDeleteByDrag
