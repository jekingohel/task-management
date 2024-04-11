const DateGetDayPadded = function (day) {
  if (day < 10) {
    return `0${day}`
  }

  return day
}

export default DateGetDayPadded
