import { useState } from "react"
import ReactSelect, { components } from "react-select"
import EmployeesOptions from "configs/EmployeesOptions"
import clsx from "clsx"

const Employees = function ({ ngn }) {
  const [employeesSelectedOption, setEmployeesSelectedOption] = useState(null)

  const onChangeHandlerEmployees = (selectedOption) => {
    setEmployeesSelectedOption(selectedOption)
  }

  ngn.getValidValues = () => {
    return EmployeesOptions
  }
  ngn.getValue = () => {
    return employeesSelectedOption
  }

  return (
    <ReactSelect
      value={employeesSelectedOption}
      onChange={onChangeHandlerEmployees}
      options={EmployeesOptions}
      //className="cf-react-select rounded-md border border-input"

      //classNamePrefix="cf-select"
    />
  )
}

export default Employees
