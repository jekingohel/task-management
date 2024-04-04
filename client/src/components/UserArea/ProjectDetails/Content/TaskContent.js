import React, { useState } from "react"
import TaskActions from "./TaskActions"
import { useSelector } from "react-redux"

const statusColor = {
  all: "text-black-600",
  todo: "text-blue-600",
  inprogress: "text-red-600",
  done: "text-green-600"
}
const statusBgColor = {
  all: "bg-gray-100",
  todo: "bg-blue-100",
  inprogress: "bg-red-100",
  done: "bg-green-100"
}

const quickFilter = ["all", "todo", "inprogress", "done"]

const TaskItem = ({ data }) => {
  const ngn = {
    modal: {}
  }
  return (
    <div className="flex flex-row items-center justify-between gap-2 rounded-lg p-3 text-left text-sm transition-all hover:bg-accent bg-muted my-2 relative">
      <div className="flex flex-row items-center ">
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className="mr-2 h-5 w-5 text-gray-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <p className="text-base font-medium">
          {data.title}{" "}
          <span className={`text-sm ${statusColor[data.status]}`}>
            #{data.status}
          </span>
        </p>
      </div>
      <button
        className="inline-flex items-center justify-center  rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-white/60 p-1 relative"
        onClick={() => ngn.modal.show(data)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-ellipsis-vertical"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </button>
      <TaskActions ngn={ngn} />
    </div>
  )
}

const TaskContent = ({ onChange, loading = false }) => {
  const taskcollection = useSelector((state) => state.Tasks.collection)
  const [selectedFilter, setselectedFilter] = useState(["all"])

  const onChangeFilter = (item) => {
    let tempArray = selectedFilter
    if (selectedFilter?.includes(item)) {
      if (selectedFilter?.includes("all")) {
        setselectedFilter(tempArray)
      } else {
        tempArray = selectedFilter.filter((x) => x !== item)
        setselectedFilter(tempArray)
        if (tempArray.length === 0) {
          tempArray = ["all"]
          setselectedFilter(tempArray)
        }
      }
    } else {
      if (selectedFilter.length === 2) {
        tempArray = ["all"]
        setselectedFilter(tempArray)
      } else if (selectedFilter?.includes("all")) {
        tempArray = selectedFilter.filter((x) => x !== "all")
        tempArray = [item]
        setselectedFilter(tempArray)
      } else if (item === "Overall") {
        tempArray = [item]
        setselectedFilter(tempArray)
      } else {
        tempArray = [...selectedFilter, item]
        setselectedFilter(tempArray)
      }
    }

    if (!tempArray?.includes("all")) {
      onChange(tempArray?.join(","))
    } else {
      onChange("")
    }
  }

  return (
    <div className="py-5">
      <div className="flex flex-row items-center justify-start flex-wrap">
        {quickFilter.map((f, index) => (
          <button
            key={index}
            className={`mx-2 py-1 px-3 rounded ${statusBgColor[f]} ${selectedFilter.includes(f) && "border border-gray-500"}`}
            onClick={() => onChangeFilter(f)}
          >
            <h3 className={`text-sm ${statusColor[f]}`}>#{f}</h3>
          </button>
        ))}
      </div>
      {loading ? (
        <div
          role="status"
          className="flex justify-center items-center h-full px-5 py-5"
        >
          <svg
            aria-hidden="true"
            className="w-9 h-9 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#16a34a"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="py-3">
          {taskcollection.length === 0 ? (
            <div>No Task Found</div>
          ) : (
            taskcollection?.map((t, index) => <TaskItem data={t} key={index} />)
          )}
        </div>
      )}
    </div>
  )
}

export default TaskContent
