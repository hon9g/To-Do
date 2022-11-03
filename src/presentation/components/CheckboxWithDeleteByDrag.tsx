import React from "react"

import Checkbox, { Props as CheckboxProps } from "./Checkbox"
import WithDeleteByDrag from "./WithDeleteByDrag"

const CheckboxWithDeleteByDrag = ({ label, isChecked, value, onChange, isDisabled}: CheckboxProps) => {
  return <WithDeleteByDrag
    wrappedComponent={<Checkbox
      label={label}
      isChecked={isChecked}
      value={value}
      onChange={onChange}
      isDisabled={isDisabled}
    />}
  />
}

export default CheckboxWithDeleteByDrag
