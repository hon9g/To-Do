import React from "react"

interface Props {
    label: string
    isChecked: boolean
    value: any
}

const Checkbox = ({ label, isChecked, value }: Props) => {
    return (
        <label><input type="checkbox" name={label} value={value} checked={isChecked}/>{label}</label>
    )
}

export default Checkbox
