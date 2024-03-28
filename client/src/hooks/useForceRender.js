//
// This is an experimental hook with the idea to be used where re-renders are not welcome.
// Re-renders will be triggered manually when it is needed using this custom hook.
//
import { useState } from "react"

const useForceRender = function () {
  const [, setValue] = useState(0)
  return () => setValue((value) => value + 1)
}

export default useForceRender
