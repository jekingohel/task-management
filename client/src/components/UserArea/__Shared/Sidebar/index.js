import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Uri from "services/Uri"
import CreateProjectModal from "./CreateProjectModal"

const ListItem = ({ title, data = [] }) => {
  const handelProject = (data) => {
    Uri.project(data._id)
  }
  return (
    <div className="mb-5">
      <h4 className="my-2 text-lg font-semibold">{title}</h4>
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {data?.map((i, index) => {
          const selected = i._id === "660ba9f3f671134124b1983b"
          return (
            <Link
              key={index}
              to={Uri.projectId({id: i._id})}
              className={`inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${selected && "bg-primary"} text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white justify-start`}
            >
              {/* <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => handelProject(i)}
              > */}
                <span className="mx-2 text-sm font-semibold text-gray-600">
                  #
                </span>
                <span className="text-sm font-semibold text-gray-600">
                  {i?.title}
                </span>
              {/* </button> */}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

const Sidebar = () => {
  const ngn = {
    modal: {}
  }

  const onClickHandler = (ev) => {
    ev.preventDefault()
    ngn.modal.show()
  }

  const { collection, favorites } = useSelector((state) => state.Projects)

  return (
    <div className="w-80 pr-5 group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <CreateProjectModal ngn={ngn} />
      <h3 className="my-2 text-2xl font-semibold tracking-tight">Listfy</h3>
      <div>
        {favorites && favorites.length !== 0 && (
          <ListItem title="Favorites" data={favorites} />
        )}
        <ListItem title="Projects" data={collection} />
        <button
          type="button"
          className="flex flex-row bg-gray-100 items-center py-1 px-5 hover:opacity-85 rounded-full"
          onClick={onClickHandler}
        >
          <span className="mr-2 text-2xl">+</span>
          <span className="text-base">Create Projects</span>
        </button>
      </div>
      <Link
        to={Uri.signOut()}
        // className="btn btn-md btn-cancel ms-4"
        className="btn btn-md btn-cancel w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mt-4"
      >
        Sign Out
      </Link>
    </div>
  )
}

export default Sidebar
