import React from "react"

import Checkbox, { Props as CheckboxProps } from "./Checkbox"
import WithDeleteByDrag, {Props as WithDeleteByDragProps } from "./WithDeleteByDrag"

const CheckboxWithDeleteByDrag = (
    { label, isChecked, value, onChange, isDisabled, onDelete}
    : CheckboxProps & Omit<WithDeleteByDragProps, 'wrappedComponent'>
  ) => {
  return <WithDeleteByDrag
    wrappedComponent={<Checkbox
      label={label}
      isChecked={isChecked}
      value={value}
      onChange={onChange}
      isDisabled={isDisabled}
    />}
    onDelete={onDelete}
  />
}

export default CheckboxWithDeleteByDrag
