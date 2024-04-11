import Uri from "services/Uri"
import Comm from "services/Comm"
import ValEmail from "utils/form/validations/Email"
import ValString from "utils/form/validations/ValString"
import ValStringMin from "utils/form/validations/ValStringMin"
import { useRef } from "react"
import Label from "components/__Shared/Label"
import InputText from "components/__Shared/Input/InputText"
import Error from "components/__Shared/Error"
import InputTextArea from "components/__Shared/Input/InputTextArea"
import StatusRadio from "./StatusRadio"
import Submit from "components/__Shared/Input/Submit"
import AddTask from "requests/AddTask"
import Store from "store"
import { TasksAddTask } from "store/actions"

const Form = function ({ state, hideModal }) {
  const form = useRef({
    title: {
      error: {}
    },
    description: {
      error: {}
    },
    status: {
      error: {}
    },
    submit: {}
  })

  const onFormSubmitHandler = (ev) => {
    ev.preventDefault()

    const title = form.current.title.getValue()
    const description = form.current.description.getValue()
    const status = form.current.status.getValue()

    // validation
    if (ValidateForm(form, title, description, status)) {
      return
    }

    form.current.submit.setDisabled()
    const task = {
      title,
      description,
      status
    }
    // api request
    AddTask(task).then((response) => {
      Store.dispatch(TasksAddTask(response))
      form.current.submit.setEnabled()
      hideModal()
    })
  }

  return (
    <form
      id={state.form.id}
      className="space-y-4"
      onSubmit={onFormSubmitHandler}
    >
      <div>
        <Label
          title="Title"
          htmlFor="title"
          className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-1 space-y-1">
          <InputText
            form={form.current.title}
            id="title"
            name="title"
            title="Title"
            focus={true}
          />
          <Error
            ngn={form.current.title.error}
            showClasses="text-sm font-medium text-red-500"
            hideClasses="text-sm font-medium text-red-500 hidden"
          />
        </div>
      </div>

      <div>
        <Label
          title="Description"
          htmlFor="description"
          className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-1 space-y-1">
          <InputTextArea
            form={form.current.description}
            id="description"
            name="description"
            title="Description"
          />
          <Error
            ngn={form.current.description.error}
            showClasses="text-sm font-medium text-red-500"
            hideClasses="text-sm font-medium text-red-500 hidden"
          />
        </div>
      </div>
      <div className="space-y-1">
        <Label
          title="Status"
          htmlFor="status"
          className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <StatusRadio form={form.current.status} id="status" name="status" />
        <Error
          ngn={form.current.status.error}
          showClasses="text-sm font-medium text-red-500"
          hideClasses="text-sm font-medium text-red-500 hidden"
        />
      </div>
      <div className="h-2"></div>
      <div className="max-w-[200px]">
        <Submit form={form.current.submit} value="Submit" />
      </div>
    </form>
  )
}

const ValidateForm = (form, title, description, status) => {
  let error_found = false

  if (!ValString(title) || !ValStringMin(title, 1)) {
    form.current.title.showErrorMessage()
    form.current.title.error.showError("The title field is required.")
    error_found = true
  } else {
    form.current.title.hideErrorMessage()
    form.current.title.error.hideError()
  }
  if (!ValString(description) || !ValStringMin(description, 1)) {
    form.current.description.showErrorMessage()
    form.current.description.error.showError(
      "The description field is required."
    )
    error_found = true
  } else {
    form.current.description.hideErrorMessage()
    form.current.description.error.hideError()
  }
  if (!ValString(status) || !ValStringMin(status, 1)) {
    form.current.status.showErrorMessage()
    form.current.status.error.showError("The status field is required.")
    error_found = true
  } else {
    form.current.status.hideErrorMessage()
    form.current.status.error.hideError()
  }

  return error_found
}

export default Form
