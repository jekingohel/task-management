import { useState } from "react"
import PropTypes from "prop-types"

import ValString from "utils/form/validations/ValString"
import ValEmail from "utils/form/validations/Email"
import { Badge } from "components/__Shared/Badge"
import { ReactComponent as X } from "images/icon-x.svg"

const createOption = (label) => ({
  label: label,
  value: label
})

const isAlreadyInTheList = (value, list) => {
  for (let item in list) {
    if (list[item].value === value) {
      return true
    }
  }
  return false
}

const Emails = function ({ ngn }) {
  const [inputValue, setInputValue] = useState("")
  const [value, setValue] = useState([])

  const addEmail = function () {
    if (inputValue === "") {
      return
    }

    if (!ValString(inputValue) || !ValEmail(inputValue)) {
      ngn.showError("The email must be a valid email address.")
      return
    }
    if (isAlreadyInTheList(inputValue, value)) {
      ngn.showError(`The email ${inputValue} is already in the list.`)
      return
    }
    ngn.hideError()
    setInputValue("")
    setValue([...value, createOption(inputValue)])
  }

  // const handleChange = (value, actionMeta) => {
  //   setValue(value)
  // }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleOnBlur = (ev) => {
    addEmail()
  }

  const handleKeyDown = (ev) => {
    if (!inputValue) {
      return
    }
    switch (ev.key) {
      case "Enter":
      case "Tab":
        ev.preventDefault()
        addEmail()
        break
      default:
        break
    }
  }

  ngn.emails.getValue = () => {
    return value
  }
  ngn.emails.resetValue = () => {
    setValue([])
  }

  const handleRemoveEmail = (index) => {
    const temp = [...value]
    temp.splice(index, 1)
    setValue(temp)
  }

  return (
    <div className="w-full flex flex-wrap">
      {value.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {value.map((email, index) => (
            <Badge key={index} variant="secondary" className="h-8 rounded">
              <span className="font-medium">{email.label}</span>{" "}
              <X
                onClick={() => handleRemoveEmail(index)}
                className="w-4 h-4 ml-2 cursor-pointer"
              />
            </Badge>
          ))}
        </div>
      )}
      <input
        type="text"
        placeholder="Separate emails with space, comma, tab or enter"
        className="px-2 flex w-full text-sm border-0 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
      />
    </div>
  )
}

Emails.propTypes = {
  ngn: PropTypes.object
}

export default Emails
