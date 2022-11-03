import React from "react"

export interface Props {
    label: string
    isChecked: boolean
    value: any
    onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void
    isDisabled?: boolean
}

const Checkbox = ({ label, isChecked, value, onChange, isDisabled }: Props) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
    }
    return (
        <label>
            <input
                type="checkbox"
                name={label}
                value={value}
                checked={isChecked}
                onChange={handleOnChange}
                disabled={isDisabled ?? false}
            />
            {label}
        </label>
    )
}

export default Checkbox
