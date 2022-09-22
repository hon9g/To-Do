import React from "react"
interface Props {
    value: string
    onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: (event?: React.FormEvent<HTMLFormElement>) => void
}
const TextInput = ({ value, onChange, onSubmit }: Props) => {
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
            <input type="submit" value="추가" />
        </form>
    )
}

export default TextInput
