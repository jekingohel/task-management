import { useState } from "react"

import { ReactComponent as Google } from "images/icon-google.svg"
import { DefaultBaseURL } from "services/Comm"
import Uri from "services/Uri"

const GoogleButton = function () {
  const [disabled, setDisabled] = useState(false)

  const onClickHandler = () => {
    // console.log("Continue via Google")

    setDisabled(true)

    // redirect
    document.location.href =
      DefaultBaseURL + Uri.identityProvidersGoogleConsent()
  }

  return (
    <button
      className="btn btn-outline-gray d-long"
      type="button"
      title="Continue via Google"
      onClick={onClickHandler}
      disabled={disabled}
    >
      <Google alt="Google icon" /> Continue via Google
    </button>
  )
}

export default GoogleButton
