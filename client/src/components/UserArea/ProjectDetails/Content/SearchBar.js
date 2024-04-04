import React, { useState } from "react"
import AddTaskModal from "../AddTaskModal"
import useDebounce from "hooks/useDebounce"

const SearchBar = ({ onChange = () => {} }) => {
  const [value, setValue] = useState("")
  const ngn = {
    modal: {}
  }

  const debouncedInputValue = useDebounce(function (value) {
    onChange(value)
  }, 500)

  const onChangeValue = function (ev) {
    const newValue = ev.target.value
    debouncedInputValue(newValue)
    setValue(newValue)
  }

  return (
    <div className="relative flex flex-row items-center gap-4">
      <AddTaskModal ngn={ngn} />
      <div className="relative w-full rounded-md bg-background ring-offset-background disabled:opacity-50 bg-muted">
        <span className="absolute top-0 start-0 px-3 py-2 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d5d6d9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>
        <input
          type="text"
          className={`flex h-10 w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 pl-10 bg-muted ${value.length !== 0 && "pr-10"}`}
          placeholder="Search task"
          id="search-task"
          value={value}
          onChange={onChangeValue}
        />
        {value.length !== 0 && (
          <button
            className="absolute top-0 end-0 px-3 py-2 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={() => onChangeValue({ target: { value: "" } })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d5d6d9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        )}
      </div>
      <button
        type="submit"
        className="w-2/6 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-3 py-5"
        onClick={() => ngn.modal.show()}
      >
        Add Task
      </button>
    </div>
  )
}

export default SearchBar
