const IsPast = function (date) {
  // Get the current date and time
  var currentDate = new Date()

  // Convert both dates to milliseconds
  var dateInMilliseconds = date.getTime()
  var currentDateInMilliseconds = currentDate.getTime()

  // Compare the dates
  return dateInMilliseconds < currentDateInMilliseconds
}

export default IsPast
