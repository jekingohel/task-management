import ValString from "utils/form/validations/ValString"
import ValStringMin from "utils/form/validations/ValStringMin"
import Requests from "requests"
import { TasksSetAddItem } from "store/actions"
import Store from "store"
import { FormDescription, FormStatus, FormTitle } from "./Fields"

const formvalidation = (state) => {
  const titleValue = state.form.getTitleValue()
  const descriptionValue = state.form.getDescriptionValue()
  const statusValue = state.form.getStatusValue()
  let hasError = false

  if (!ValString(titleValue) || !ValStringMin(titleValue, 1)) {
    state.form.showTitleError("The title field is required.")
    hasError = true
  }
  if (!ValString(descriptionValue) || !ValStringMin(descriptionValue, 1)) {
    state.form.showDescriptionError("The description field is required.")
    hasError = true
  }
  if (!ValString(statusValue) || !ValStringMin(statusValue, 1)) {
    state.form.showStatusError("The status field is required.")
    hasError = true
  }
  return hasError
}

const ModalBody = function ({ state, hideModal }) {
  const onFormSubmitHandler = (ev) => {
    ev.preventDefault()

    const payload = {
      title: state.form.getTitleValue(),
      description: state.form.getDescriptionValue(),
      status: state.form.getStatusValue()
    }

    // validation
    let hasError = formvalidation(state)
    if (hasError) {
      return
    }

    state.form.hideTitleError()
    state.form.hideDescriptionError()
    state.form.hideStatusError()

    state.form.submitDisabled()
    state.form.showSubmitLoading()

    // api request
    Requests.CreateTask(payload)
      .then((res) => {
        Store.dispatch(TasksSetAddItem(res?.data))
        state.form.setTitleValue("")
        state.form.setDescriptionValue("")
        state.form.setStatusValue("")
        state.form.submitEnabled()
        state.form.hideSubmitLoading()
        hideModal()
      })
      .catch((err) => {
        //console.dir(err)
        // state.form.showError(
        //   "Unknown task title address. Please check and try again."
        // )
        // state.form.showError(
        //   "Unknown task title address. Please check and try again."
        // )
        // state.form.showError(
        //   "Unknown task title address. Please check and try again."
        // )
        state.form.submitEnabled()
        state.form.hideSubmitLoading()
      })
  }

  return (
    <form id={state.form.id} onSubmit={onFormSubmitHandler}>
      <FormTitle state={state} />
      <FormDescription state={state} />
      <FormStatus state={state} />
    </form>
  )
}

export default ModalBody
