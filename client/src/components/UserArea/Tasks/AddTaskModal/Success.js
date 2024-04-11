import { ReactComponent as IconTick } from "images/icon-tick.svg"

const Success = function () {
  return (
    <div className="flex flex-col justify-center items-center">
      <IconTick />
      <h4 className="text-md text-muted-foreground text-center">
        Added Task Successfully!
      </h4>
    </div>
  )
}

export default Success
