const TimestampToDate = function (timestampInSeconds) {
  // Convert seconds to milliseconds
  var milliseconds = timestampInSeconds * 1000

  // Create a new Date object
  var date = new Date(milliseconds)

  return date
}

export default TimestampToDate
