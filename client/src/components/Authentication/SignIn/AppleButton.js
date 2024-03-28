import { useState } from "react"

import { ReactComponent as Apple } from "images/icon-apple.svg"
import { DefaultBaseURL } from "services/Comm"
import Uri from "services/Uri"

const AppleButton = function () {
  const [disabled, setDisabled] = useState(false)

  const onClickHandler = () => {
    // console.log("Continue via Apple")

    setDisabled(true)

    // redirect
    // console.log("Redirecting to: " + DefaultBaseURL + Uri.identityProvidersAppleConsent())
    document.location.href =
      DefaultBaseURL + Uri.identityProvidersAppleConsent()
  }

  return (
    <button
      className="btn btn-outline-gray"
      type="button"
      title="Continue via Apple"
      onClick={onClickHandler}
      disabled={disabled}
    >
      <Apple alt="Apple icon" />
    </button>
  )
}

export default AppleButton
