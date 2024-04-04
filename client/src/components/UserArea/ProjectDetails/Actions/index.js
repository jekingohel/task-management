import React from "react"
import Favorites from "./Favorites"
import Update from "./Update"
import Delete from "./Delete"

const Actions = (props) => {
  return (
    <div>
      <Favorites {...props} />
      <Update {...props} />
      <Delete {...props} />
    </div>
  )
}

export default Actions
