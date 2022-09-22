import React from "react"

type Url = string

interface Props {
    onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void
    label?: string
    icon?: Url
}

const Button = ({ onClick, label, icon }: Props) => {
    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick(event)
        console.log("click")
    }
    return (
        <button onClick={handleOnClick} >
            { label ?? 'X' }
        </button>
    )
}

export default Button
