import React, { useCallback, useEffect, useState } from "react"

import SearchBar from "./SearchBar"
import { TasksSetCollection } from "store/actions"
import Requests from "requests"
import Store from "store"
import TaskContent from "./TaskContent"

const Content = ({ projectId }) => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(false)

  const GetTasks = useCallback(
    ({ filter = "" }) => {
      if (projectId) {
        setLoading(true)

        const payload = {
          project: projectId,
          filter: filter,
          fields: "title,description,status",
          page: page,
          limit: 10,
          sort: "createdAt"
        }

        Requests.GetTasks(payload)
          .then((res) => {
            const data = res?.data
            setPage(data.page)
            setHasNextPage(data.hasNextPage)
            setLoading(false)
            // console.log(data)
            Store.dispatch(TasksSetCollection(data?.docs))
          })
          .catch((err) => {
            setLoading(false)
            console.dir(err)
          })
      }
    },
    [page, projectId]
  )

  // console.log(hasNextPage)

  useEffect(() => {
    GetTasks({ filter: "" })
  }, [GetTasks])

  const onSearch = (value) => {
    GetTasks({ filter: value })
  }

  const onChangeFilter = (value) => {
    GetTasks({ filter: value })
  }

  return (
    <div className="px-5 py-3">
      <SearchBar onChange={onSearch} />
      <TaskContent onChange={onChangeFilter} loading={loading} />
    </div>
  )
}

export default Content
