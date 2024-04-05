import { useRef } from "react"

const WorkspaceName = function ({ ngn }) {
  const ref = useRef("")

  ngn.getValue = () => {
    return ref.current.value
  }
  ngn.setValue = (value) => {
    ref.current.value = value
  }

  return (
    <>
      <input
        type="text"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"
        id="workspaceName"
        ref={ref}
      />
    </>
  )
}

export default WorkspaceName
