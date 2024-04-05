import DropDownMenuCloser from "events/DropDownMenuCloser"
import UserMenu from "./__Shared/UserMenu"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import Uri from "services/Uri"
import { useRef } from "react"
import {
  CreateWorkspaceSetNotRequired,
  CreateWorkspaceSetStep,
  RequestsSetAction
} from "store/actions"
import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import Store from "store"

const CreateWorkspace = function ({ logo }) {
  const navigate = useNavigate()
  const step = useSelector((state) => state.CreateWorkspace.step)

  const onClickHandler = function () {
    // this will close all drop-down menus subscribed to this event emitter
    DropDownMenuCloser.next(null)
  }

  // ngn container
  const ngn = useRef({
    stepOne: {
      response: {},
      logo: {},
      workspace: {},
      website: {},
      employees: {},
      nextStep: function () {
        Store.dispatch(CreateWorkspaceSetStep(2))
      }
    },
    stepTwo: {
      role: {
        getValue: function () {},
        closeSelect: function () {}
      },
      emails: {},
      submit: {},
      nextStep: function () {
        Store.dispatch(CreateWorkspaceSetNotRequired())
        Store.dispatch(CreateWorkspaceSetStep(1))
        // for not reset current ws id pass defaultWorkspace to false as params
        Store.dispatch(RequestsSetAction("Init", { defaultWorkspace: false }))
        navigate(Uri.u())
      }
    }
  })

  let containerClasses = "flex-1 workspace-page"
  let content
  switch (step) {
    case 1:
      content = <StepOne ngn={ngn.current} />
      containerClasses += " step-one"
      break
    case 2:
      content = <StepTwo ngn={ngn.current} />
      containerClasses += " step-two"
      break
    default:
      content = <Navigate to={Uri.u()} replace={true} />
  }

  return (
    <div
      className="relative flex min-h-screen flex-col bg-background"
      onClick={onClickHandler}
    >
      <UserMenu />
      <main className={containerClasses}>
        <div className="container relative flex max-w-screen-lg items-center">
          {content}
        </div>
      </main>
    </div>
  )
}
export default CreateWorkspace
