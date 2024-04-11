import { Button } from "components/__Shared/Button"

const CloseButton = function ({ hideModal }) {
  return (
    <Button type="button" variant="ghost" onClick={hideModal}>
      Close
    </Button>
  )
}

export default CloseButton
