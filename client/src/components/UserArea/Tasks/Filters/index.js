const { default: Search } = require("./Search")
const { default: Status } = require("./Status")

const Filters = () => {
  return (
    <div className="flex items-center gap-2">
      <Search />
      <div className="shrink-0">
        <Status />
      </div>
    </div>
  )
}

export default Filters
