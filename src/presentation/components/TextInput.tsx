import React from "react"

enum DEFAULT {
    LABEL = '제출',
}

interface Props {
    value: string
    onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: (event?: React.FormEvent<HTMLFormElement>) => void
    label?: string
}
const TextInput = ({ value, onChange, onSubmit, label }: Props) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }
    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        onSubmit(event)
        event.preventDefault()
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <label>
            <input type="text" value={value} onChange={handleOnChange} />
            </label>
            <input type="submit" value={label ?? DEFAULT.LABEL} />
        </form>
    )
}

export default TextInput
