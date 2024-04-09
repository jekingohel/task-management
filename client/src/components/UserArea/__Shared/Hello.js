import { useSelector } from "react-redux"

const Hello = function () {
  const { name, email } = useSelector((state) => state.User)

  return (
    <div className="flex flex-col">
      <span className="text-sm font-semibold">{name}</span>
      <span className="text-xs text-muted-foreground">{email}</span>
    </div>
  )
}

export default Hello
