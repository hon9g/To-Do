import React, { useState } from "react";

const BTN_DELETE = '삭제'

const DeleteButton = () => {
  return <div className="">{BTN_DELETE}</div>
}

interface Props {
  wrappedComponent: React.ReactNode
}

const WithDeleteByDrag = ({ wrappedComponent }: Props) => {
  const [onDeleteMode, setDeleteMode] = useState(false)
  const [xStart, setXStart] = useState(0)

  const handleDragEnter = (e: React.MouseEvent | React.TouchEvent) => {
    console.log(e)
    if ('clientX' in e) {
      setXStart(e.clientX)
    }
    else if ('changedTouches' in e) {
      setXStart(e.changedTouches[0].clientX)
    }
  }

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    console.log(e)
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

  return (
    <div
      onMouseDown={handleDragEnter}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragEnter}
      onTouchEnd={handleDragEnd}
    >
      {wrappedComponent}
      {onDeleteMode && <DeleteButton />}
    </div>
  )
}

export default WithDeleteByDrag
