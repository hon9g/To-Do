import React, { ReactNode } from "react"
import "./List.css"

interface Props {
    children: Array<ReactNode>
}

const List = ({ children }: Props) => {
    return (
        <div className="List">{children}</div>
    )
}

export default List
