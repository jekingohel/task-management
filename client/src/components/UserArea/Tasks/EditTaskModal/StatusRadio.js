import { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import {
  RadioGroup,
  RadioGroupItem
} from "components/UserArea/__Shared/RadioGroup"
import Label from "components/__Shared/Label"

const StatusRadio = function ({ form, id, name, focus = false }) {
  const ref = useRef()
  const [value, setValue] = useState("")
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  useEffect(() => {
    if (focus) {
      ref.current.focus()
    }
  })

  const onChangeHandler = function (value) {
    setValue(value)
  }

  form.getValue = () => {
    return value
  }
  form.setValue = (value) => {
    setValue(value)
  }
  form.showErrorMessage = () => {
    setShowErrorMessage(true)
  }
  form.hideErrorMessage = () => {
    setShowErrorMessage(false)
  }
  form.focus = () => {
    ref.current.focus()
  }
  form.reset = () => {
    setValue("")
    setShowErrorMessage(false)
  }

  return (
    <RadioGroup
      ref={ref}
      className="grid-flow-col"
      defaultValue={value}
      id={id}
      name={name}
      onValueChange={onChangeHandler}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem checked={value === "todo"} value="todo" id="todo" />
        <Label className="text-sm font-normal" htmlFor="todo">
          Todo
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          checked={value === "in-progress"}
          value="in-progress"
          id="in-progress"
        />
        <Label className="text-sm font-normal" htmlFor="in-progress">
          In Progress
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem checked={value === "done"} value="done" id="done" />
        <Label className="text-sm font-normal" htmlFor="done">
          Done
        </Label>
      </div>
    </RadioGroup>
  )
}

StatusRadio.propTypes = {
  form: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  focus: PropTypes.bool
}

export default StatusRadio
