import React from "react"

type Url = string

interface Props {
    onClick: Function
    label?: string
    icon?: Url
}

const Button = ({ onClick, label, icon }: Props) => {
    return (
        <div>
            { label ?? 'X' }
        </div>
    )
}

export default Button
