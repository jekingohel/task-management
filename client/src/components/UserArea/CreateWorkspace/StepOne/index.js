import Employees from "components/UserArea/__Shared/Workspace/Employees"
import LogoFile from "components/UserArea/__Shared/Workspace/LogoFile"
import WebsiteURL from "components/UserArea/__Shared/Workspace/WebsiteURL"
import WorkspaceName from "components/UserArea/__Shared/Workspace/WorkspaceName"
import Error from "components/__Shared/Error"
import Label from "components/__Shared/Label"
import { ReactComponent as Avatar } from "images/avatar-upload.svg"

const StepOne = function ({ ngn }) {
  return (
    <section className="mx-auto flex max-w-[500px] flex-col gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="flex flex-col items-center space-y-3">
        <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
          Step 1 of 4
        </div>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Create your workspace
        </h1>
        <p className="text-center text-md text-muted-foreground">
          Create your new workspace in Listify for yourself and for people you
          invite to collaborate and share your content
        </p>
      </div>
      <div className="mt-5">
        <Label className="flex gap-4 mb-4 items-center">
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
        <div className="row mb-3">
          <div className="col col-12">
            <Label
              title="Workspace name"
              htmlFor="workspaceName"
              className="form-label"
            />
            <WorkspaceName ngn={ngn.stepOne.workspace} />
            <Error ngn={ngn.stepOne.workspace} />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col col-12 col-sm-6 mb-3 mb-sm-0">
            <Label
              title="Company website (optional)"
              htmlFor="website"
              className="form-label"
            />
            <WebsiteURL ngn={ngn.stepOne.website} />
            <Error ngn={ngn.stepOne.website} />
          </div>

          <div className="col col-12 col-sm-6">
            <Label
              title="Employees (optional)"
              htmlFor="employees"
              className="form-label"
            />
            <Employees ngn={ngn.stepOne.employees} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default StepOne
