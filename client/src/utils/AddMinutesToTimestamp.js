const AddMinutesToTimestamp = function (minutes) {
  // Get the current date and time
  const currentDate = new Date()

  // Add minutes to the current date
  currentDate.setMinutes(currentDate.getMinutes() + minutes)

  // Convert the date to timestamp in seconds
  const timestampInSeconds = Math.floor(currentDate.getTime() / 1000)

  // Return the timestamp
  return timestampInSeconds
}
export default AddMinutesToTimestamp
