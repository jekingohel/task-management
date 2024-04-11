import Form from "./Form"

const ChangePassword = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Change Password</h3>
        <p className="text-sm text-muted-foreground">
          Please ensure all fields are filled accurately and double-check your
          information before submitting
        </p>
      </div>
      <Form />
    </div>
  )
}
export default ChangePassword
