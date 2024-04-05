import { useRef } from "react"
import Store from "store"
//import { SetWorkspaceWorkspaceCurrentPhotoFile } from "store/actions"

const LogoFile = ({ ngn }) => {
  const ref = useRef()

  const handleChange = (e) => {
    if (e.target.files.length !== 0) {
      const [file] = e.target.files
      if (file) {
        // Store.dispatch(
        //   SetWorkspaceWorkspaceCurrentPhotoFile(URL.createObjectURL(file))
        // )
      }
    }
  }

  ngn.getValue = () => {
    return ref.current.files
  }

  ngn.resetValue = () => {
    return (ref.current.value = null)
  }

  return (
    <input
      type="file"
      className="w-0 h-0 hidden"
      ref={ref}
      onChange={handleChange}
    />
  )
}

export default LogoFile
