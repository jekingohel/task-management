import Form from "./Form"

const Profile = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Please ensure all fields are filled accurately and double-check your
          information before submitting
        </p>
      </div>
      <Form />
    </div>
  )
}
export default Profile
