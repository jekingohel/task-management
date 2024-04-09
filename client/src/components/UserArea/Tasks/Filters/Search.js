import { ReactComponent as SearchIcon } from "images/icon-search.svg"
import { useFilterTasks } from "../TaskFilterContext"
import useDebounce from "hooks/useDebounce"
import { useEffect, useState } from "react"

const Search = () => {
  const { search, setSearch } = useFilterTasks()
  const [inputValue, setInputValue] = useState(search)
  const debouncedValue = useDebounce(inputValue)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    setSearch(debouncedValue ? debouncedValue : null)
  }, [debouncedValue])

  return (
    <div className="my-3 w-full flex items-center rounded-md border border-input bg-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
      <SearchIcon className="ml-3" />
      <input
        type="text"
        className="flex h-10 w-full px-3 py-2 rounded-md text-sm ring-offset-background focus-within:outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Search task"
        id="search-task"
        onChange={handleChange}
        defaultValue={inputValue}
      />
    </div>
  )
}

export default Search
