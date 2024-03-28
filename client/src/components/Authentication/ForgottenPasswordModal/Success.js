import { ReactComponent as IconTick } from "images/icon-tick.svg"

const Success = function () {
  return (
    <div className="modal-success-text">
      <IconTick />
      <h4>We've sent you an email with a link to reset your password.</h4>
    </div>
  )
}

export default Success
