import RawUriCollection from "configs/RawUriCollection"
import Interpolate from "utils/Interpolate"

const Uri = (() => {
  const ret = {}

  for (let key in RawUriCollection) {
    if (typeof RawUriCollection[key] === "string") {
      ret[key] = (data) => {
        if (data) {
          return Interpolate(RawUriCollection[key], data)
        }
        return RawUriCollection[key]
      }
    }
  }

  return ret
})()

export default Uri
