import Employees from "components/UserArea/__Shared/Workspace/Employees"
import LogoFile from "components/UserArea/__Shared/Workspace/LogoFile"
import WebsiteURL from "components/UserArea/__Shared/Workspace/WebsiteURL"
import WorkspaceName from "components/UserArea/__Shared/Workspace/WorkspaceName"
import Error from "components/__Shared/Error"
import Label from "components/__Shared/Label"
import { ReactComponent as Avatar } from "images/avatar-upload.svg"
import Continue from "./Continue"
import { useRef } from "react"

import ValString from "utils/form/validations/ValString"
import ValStringMin from "utils/form/validations/ValStringMin"
import ValStringMax from "utils/form/validations/ValStringMax"
import Interpolate from "utils/Interpolate"
import ValObject from "utils/form/validations/ValObject"
import ValNull from "utils/form/validations/ValNull"
import ValUrl from "utils/form/validations/ValUrl"
import Res from "services/Resources"

const StepOne = function ({ ngn }) {
  const logoUploadFilename = useRef(false)
  const onClickHandler = (ev) => {
    let errorFound = false

    let logo = false
    let logoFile = ngn.stepOne.logo.getValue()

    if (logoFile.length > 0) {
      console.log(logoFile[0])
      logo = new FormData()
      logo.append("file", logoFile[0])
    }

    let workspace_name = ngn.stepOne.workspace.getValue()
    if (!ValString(workspace_name) || !ValStringMin(workspace_name, 1)) {
      ngn.stepOne.workspace.showError("The workspace name field is required.")
      errorFound = true
    }
    if (
      !ValStringMin(workspace_name, Res.getValidationRule("workspace.name.min"))
    ) {
      ngn.stepOne.workspace.showError(
        Interpolate("The workspace name must be at least :min characters.", {
          min: Res.getValidationRule("workspace.name.min")
        })
      )
      errorFound = true
    }
    if (
      !ValStringMax(workspace_name, Res.getValidationRule("workspace.name.max"))
    ) {
      ngn.stepOne.workspace.showError(
        Interpolate(
          "The workspace name must not be greater than :max characters.",
          { max: Res.getValidationRule("workspace.name.max") }
        )
      )
      errorFound = true
    }

    let website = ngn.stepOne.website.getValue()
    if (ValString(website) && ValStringMin(website, 1)) {
      if (!ValStringMax(website, 255)) {
        ngn.stepOne.website.showError(
          Interpolate("The website must not be greater than :max characters.", {
            max: 255
          })
        )
        errorFound = true
      }
      if (!ValUrl(website)) {
        website = "https://" + website
      }
    } else {
      website = ""
    }
    let employees = ngn.stepOne.employees.getValue()
    if (!ValNull(employees) && ValObject(employees) && employees.value) {
      const validValues = ngn.stepOne.employees.getValidValues()
      let valid = false
      for (let validValue of validValues) {
        if (validValue.value === employees.value) {
          valid = true
          break
        }
      }
      employees = valid ? employees.value : ""
    } else {
      employees = ""
    }

    if (errorFound) {
      return
    }

    ngn.stepOne.workspace.hideError()
    ngn.stepOne.website.hideError()
    ngn.stepOne.disableSubmit()
    // api request
  }
  return (
    <section className="mx-auto flex max-w-[500px] flex-col gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="flex flex-col items-center space-y-3">
        <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
          Step 1 of 2
        </div>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Create your workspace
        </h1>
        <p className="text-center text-md text-muted-foreground">
          Create your new workspace in Listify for yourself and for people you
          invite to collaborate and share your content
        </p>
      </div>
      <div className="mt-5 space-y-5">
        <Label className="flex gap-4 items-center">
          <div className="col col-3 col-sm-2">
            <Avatar className="workspace-avatar" />
          </div>
          <div className="col col-9 col-md-6">
            <div className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Upload a workspace logo (optional)
              <span className="block font-normal text-muted-foreground mt-2 max-w-[200px] text-xs">
                Upload PNG or JPEG file. File size limit is up to 4MB
              </span>
            </div>
            <LogoFile ngn={ngn.stepOne.logo} />
            <Error ngn={ngn.stepOne.logo} />
          </div>
        </Label>
        <div className="">
          <div className="space-y-2">
            <Label
              title="Workspace name"
              htmlFor="workspaceName"
              className="form-label"
            />
            <WorkspaceName ngn={ngn.stepOne.workspace} />
            <Error ngn={ngn.stepOne.workspace} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label
              title="Company website (optional)"
              htmlFor="website"
              className="form-label"
            />
            <WebsiteURL ngn={ngn.stepOne.website} />
            <Error ngn={ngn.stepOne.website} />
          </div>

          <div className="space-y-2">
            <Label
              title="Employees (optional)"
              htmlFor="employees"
              className="form-label"
            />
            <Employees ngn={ngn.stepOne.employees} />
          </div>
        </div>
        <div className="max-w-[200px]">
          <Continue ngn={ngn.stepOne} onClickHandler={onClickHandler} />
        </div>
      </div>
    </section>
  )
}
export default StepOne
