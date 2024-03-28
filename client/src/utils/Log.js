const Log = (function () {
  const ret = {}

  ret.req = (message) => {
    console.log(`%c[req] ${message}`, "color:green")
  }

  return ret
})()

export default Log
