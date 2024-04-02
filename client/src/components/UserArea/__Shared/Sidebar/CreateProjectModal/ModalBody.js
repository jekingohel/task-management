import FormTitle from "./FormTitle"
import ValString from "utils/form/validations/ValString"
import ValStringMin from "utils/form/validations/ValStringMin"
import Requests from "requests"
import { ProjectsSetAddItem } from "store/actions"
import Store from "store"

const ModalBody = function ({ state, hideModal }) {
  const onFormSubmitHandler = (ev) => {
    ev.preventDefault()

    const titleValue = state.form.getTitleValue()

    // validation
    if (!ValString(titleValue) || !ValStringMin(titleValue, 1)) {
      state.form.showError("The title field is required.")
      return
    }

    state.form.hideError()
    state.form.submitDisabled()
    state.form.showSubmitLoading()

    // api request
    Requests.CreateProject({ title: titleValue })
      .then((res) => {
        Store.dispatch(ProjectsSetAddItem(res?.data))
        state.form.setTitleValue("")
        state.form.submitEnabled()
        state.form.hideSubmitLoading()
        hideModal()
      })
      .catch((err) => {
        //console.dir(err)
        state.form.showError(
          "Unknown project title address. Please check and try again."
        )
        state.form.submitEnabled()
        state.form.hideSubmitLoading()
      })
  }

  return (
    <form id={state.form.id} onSubmit={onFormSubmitHandler}>
      <FormTitle state={state} />
    </form>
  )
}

export default ModalBody
