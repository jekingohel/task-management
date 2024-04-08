import Comm from "services/Comm"
import Uri from "services/Uri"

let Resources = (function () {
  const ret = {}

  let dataContainer = {
    messages: {
      auth: {
        "invalid-credentials":
          "The request authentication token (in the Authorization header) is missing or invalid.",
        "reset-password": {
          "no-match": "Both passwords do not match."
        },
        "unauthorized-action": "You are not authorized to perform this action.",
        "sign-out": "You have successfully signed out",
        failed: "Invalid email or password.",
        "email-verify": "Your email is not verified."
      },
      session: {
        "not-started":
          "The user session is not started yet. You should start a user session by pinging /session first.",
        "invalid-credentials": "Incorrect email or password.",
        "identity-providers": {
          "invalid-token":
            "The identity provider token is invalid, missing, or has expired.",
          "user-not-found":
            "There was no user found with the token in the session."
        }
      },
      users: {
        "not-current": "You cannot access other users.",
        "identity-providers": {
          "unknown-provider":
            "Unknown identity provider. We currently support Google, Facebook and Apple.",
          google: {
            "id-conflict": "",
            "email-conflict":
              "Could not sign-up with Google as a user with your Google email has already been signed up. If that's you, you should sign in to your account using email and password, and then link Google as your additional identity provider.",
            "already-linked": "Google has already been linked to this account.",
            "linked-to-another-account":
              "Could not link Google to your account as it has already been linked to a different account."
          },
          facebook: {
            "missing-email":
              "We failed to obtain your email from Facebook. It could be because you explicitly decided not to share it with us. You'll have to create an account using an email and password, and then link Facebook in your settings.",
            "email-conflict":
              "Could not sign-up with Facebook as a user with the email associated to your Facebook account has already been signed up. If that's you, you should sign in to your account using email and password, and then link Facebook as your additional identity provider.",
            "already-linked":
              "Facebook has already been linked to this account.",
            "linked-to-another-account":
              "Could not link Facebook to your account as it has already been linked to a different account."
          },
          apple: []
        }
      },
      "password-resets": {
        success: "We've sent :email an email with a password reset link.",
        "invalid-token": "Invalid password reset token provided."
      },
      "email-verification": {
        "invalid-email":
          "The provided email is either invalid or does not belong to the currently authenticated user.",
        "invalid-signature": "The signature is invalid.",
        "already-verified": "The email has already been verified.",
        expired: "The link has expired. Please request a new link."
      },
      "identity-providers": {
        unknown:
          "The provider returned an unknown error. There's a possible misconfiguration. The error has been reported.",
        "invalid-oauth-code":
          "The provided oauth code is either invalid or has already been used."
      },
      workspaces: {
        "workspace-name-already-exist":
          "A workspace with this name already exists",
        "logo-file-not-found": "No file with the provided filename.",
        folders: {
          "max-limit-reached":
            "You've reached the maximum folder limit of 1000 folders."
        },
        users: {
          "cannot-remove-owner":
            "The owner of the workspace cannot be removed.",
          "cannot-downgrade-role": "You cannot downgrade your own role.",
          "already-added":
            "The user with the provided email has already been added."
        }
      },
      blob: {
        videos: {
          "invalid-index":
            "The X-Index header could be missing, or its value is not numeric.",
          "max-limit": "The maximum segment limit has been reached.",
          "segment-exists":
            "The segment with the provided index already exists."
        }
      },
      exceptions: {
        general: "Something went wrong on our side. We've been notified."
      },
      subscription: {
        "invalid-payment-method":
          "Please select a valid payment method and try again.",
        exists: "You already have a subscription active."
      }
    },
    rules: {
      user: {
        email: {
          min: 3,
          max: 255
        },
        first_name: {
          min: 2,
          max: 24
        },
        last_name: {
          min: 2,
          max: 24
        },
        password: {
          min: 8,
          max: 32
        }
      },
      workspace: {
        invite_token: {
          size: 48
        },
        name: {
          min: 3,
          max: 30
        },
        website: {
          max: 255
        },
        employees: {
          in: "1,2-5,6-10,11-20,20+"
        }
      }
    }
  }

  ret.setResources = (data) => {
    dataContainer = data
  }

  // How it works:
  // the "path" parameter is expected to be a string
  // the value of the parameter is split by '.'
  // every element after this split must be a key or sub-key of the object "dataContainer" defined here in this function
  // for example: dataContainer = {'a': { 'b': 'value', 'c': 'other value'} }; getValue('a.c') will return "other value"
  // in case a key or sub-key is not found within "dataContainer" then this function will return the value of the "path" itself
  ret.getValue = (path) => {
    let chunks = path.split(".")
    let collection = dataContainer
    for (const item of chunks) {
      if (item in collection) {
        collection = collection[item]
      } else {
        return path
      }
    }
    return collection
  }

  ret.getTrans = (path) => {
    return ret.getValue(`messages.${path}`)
  }

  ret.getValidationRule = (path) => {
    return ret.getValue(`rules.${path}`)
  }

  // this will re-fetch the value of "resourcesData" from the server
  ret.fetch = () => {
    // api request
    Comm.request({
      url: Uri.info(),
      method: "get"
    })
      .then((res) => {
        // console.log(res)
        ret.setResources(res.data)
      })
      .catch((err) => {
        // console.dir(err)
      })
  }

  return ret
})()

export default Resources
