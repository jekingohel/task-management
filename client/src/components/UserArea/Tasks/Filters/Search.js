import { ReactComponent as SearchIcon } from "images/icon-search.svg"
const Search = () => {
  return (
    <div className="my-3 w-full flex items-center rounded-md border border-input bg-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
      <SearchIcon className="ml-3" />
      <input
        type="text"
        className="flex h-10 w-full px-3 py-2 rounded-md text-sm ring-offset-background focus-within:outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Search task"
        id="search-task"
      />
    </div>
  )
}
export default Search
