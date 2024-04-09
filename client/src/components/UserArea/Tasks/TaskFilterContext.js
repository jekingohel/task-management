import { createContext, useContext, useState } from "react"

const FilterTaskContext = createContext(undefined)

export const useFilterTasks = () => {
  const context = useContext(FilterTaskContext)
  if (!context) {
    throw new Error("useFilterTasks must be used within a TaskFilterProvider")
  }
  return context
}

export const TaskFilterProvider = ({ children }) => {
  const [status, setStatus] = useState(null)
  const [search, setSearch] = useState(null)
  return (
    <FilterTaskContext.Provider
      value={{ status, setStatus, search, setSearch }}
    >
      {children}
    </FilterTaskContext.Provider>
  )
}
