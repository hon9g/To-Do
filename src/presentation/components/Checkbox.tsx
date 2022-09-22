import React from "react"

interface Props {
    label: string
    isChecked: boolean
    value: any
    onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ label, isChecked, value, onChange }: Props) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }
    return (
        <label><input type="checkbox" name={label} value={value} checked={isChecked} onChange={handleOnChange}/>{label}</label>
    )
}

export default Checkbox
