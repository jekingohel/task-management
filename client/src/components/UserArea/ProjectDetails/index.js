import React, { useCallback, useEffect } from "react"
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
  let { id } = useParams()
  // console.log(id)

  //   const GetData = useCallback(() => {
  //     Requests.CreateProject({ title: titleValue })
  //       .then((res) => {
  //         console.log(res)
  //       })
  //       .catch((err) => {
  //         console.dir(err)
  //       })
  //   }, [])

  //   useEffect(() => {
  //     GetData()
  //   }, [GetData])

  return (
    <div className="">
      <div className="flex flex-row item-center justify-between">
        <h3 className="my-2 text-2xl font-semibold tracking-tight">
          #alltrue-bug
        </h3>
        <span></span>
      </div>
    </div>
  )
}

export default ProjectDetails
