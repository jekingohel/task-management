import { useState } from "react"

import EmployeesOptions from "configs/EmployeesOptions"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "components/__Shared/Select"

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
    <Select onValueChange={onChangeHandlerEmployees}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {EmployeesOptions.map((employee, index) => (
          <SelectItem key={index} value={employee.value}>
            {employee.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default Employees
