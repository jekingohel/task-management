import { useSelector } from "react-redux"

const Hello = function () {
  const FirstName = useSelector((state) => state.User.name)

  return <span>Hello, {FirstName}!</span>
}

export default Hello
