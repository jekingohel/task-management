const GetCookie = function (cookieName) {
  let result = ""

  const cookies = document.cookie.split("; ")
  if (cookies.length > 0) {
    let itemFound = cookies.find((row) => row.startsWith(`${cookieName}=`))
    if (itemFound) {
      result = itemFound.split("=")[1]
    }
  }

  return result
}

export default GetCookie
