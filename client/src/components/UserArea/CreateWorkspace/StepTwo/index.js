import Label from "components/__Shared/Label"
import Emails from "components/UserArea/__Shared/Select/Emails"

import Error from "components/__Shared/Error"
import ValObject from "utils/form/validations/ValObject"
import ValString from "utils/form/validations/ValString"
import SubmitButton from "components/UserArea/CreateWorkspace/StepTwo/SubmitButton"
import Interpolate from "utils/Interpolate"
import Catch401 from "middlewares/Catch401"
import Comm from "services/Comm"
import Uri from "services/Uri"
import Roles from "./Roles"
import { Button } from "components/__Shared/Button"

const StepTwo = ({ ngn }) => {
  const onClickHandlerSendInvites = () => {
    const emails = ngn.stepTwo.emails.getValue()
    if (!ValObject(emails) || emails.length === 0) {
      ngn.stepTwo.showError("At least one email address is required.")
      return
    }

    const role = ngn.stepTwo.role.getValue()
    if (!ValString(role)) {
      ngn.stepTwo.showError("Selecting a role is required.")
      return
    }

    ngn.stepTwo.hideError()
    ngn.stepTwo.submit.setDisabled()
  }
  const onClickHandlerNotNow = () => {
    ngn.stepTwo.nextStep()
  }
  return (
    <section className="mx-auto flex max-w-[500px] flex-col gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="flex flex-col items-center space-y-3 w-full">
        <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
          Step 2 of 2
        </div>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
          Add your team members
        </h1>
        <p className="text-center text-md text-muted-foreground">
          Members of the team, can edit and access tasks easily.
        </p>
      </div>
      <div className="mt-5 space-y-5 min-w-[500px]">
        <div className="space-y-2">
          <Label
            title="Email addresses"
            htmlFor="emails"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          />
          <div className="focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 w-full rounded-md border border-input bg-background px-2 py-2 ring-offset-background members-select-outline">
            <div className="flex justify-between items-center">
              <Emails ngn={ngn.stepTwo} />
              <Roles ngn={ngn.stepTwo.role} />
            </div>
          </div>
          <Error ngn={ngn.stepTwo} />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-full max-w-[200px]">
          <SubmitButton
            ngn={ngn.stepTwo.submit}
            onClickHandlerSendInvites={onClickHandlerSendInvites}
          />
        </div>
        <div className="w-full">
          <Button type="button" variant="ghost" onClick={onClickHandlerNotNow}>
            Not Now
          </Button>
        </div>
      </div>
    </section>
  )
}
export default StepTwo
