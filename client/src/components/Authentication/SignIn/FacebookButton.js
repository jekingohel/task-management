import { useState } from "react"

import { ReactComponent as Facebook } from "images/icon-facebook.svg"
import { DefaultBaseURL } from "services/Comm"
import Uri from "services/Uri"

const FacebookButton = function () {
  const [disabled, setDisabled] = useState(false)

  const onClickHandler = () => {
    // console.log("Continue via Facebook")

    setDisabled(true)

    // redirect
    document.location.href =
      DefaultBaseURL + Uri.identityProvidersFacebookConsent()
  }

  return (
    <button
      className="btn btn-outline-gray"
      type="button"
      title="Continue via Facebook"
      onClick={onClickHandler}
      disabled={disabled}
    >
      <Facebook alt="Facebook icon" />
    </button>
  )
}

export default FacebookButton
