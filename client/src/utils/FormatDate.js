import DateGetMonthName from "utils/DateGetMonthName"
import DateGetDayPadded from "utils/DateGetDayPadded"
import DateGetDayName from "utils/DateGetDayName"

const FormatDate = function (date) {
  const d = new Date(date)

  return `${DateGetDayName(d.getDay())}, ${DateGetDayPadded(d.getDate())} ${DateGetMonthName(d.getMonth() + 1)} ${d.getFullYear()}`
}

export default FormatDate
