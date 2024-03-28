const Time2TimeAgo = function (ts) {
  let locales = {
    prefix: "",
    suffix: "ago",
    seconds: "a few seconds",
    minute: "about a minute",
    minutes: "%d minutes",
    hour: "about an hour",
    hours: "about %d hours",
    day: "a day",
    days: "%d days",
    month: "about a month",
    months: "%d months",
    year: "about a year",
    years: "%d years"
  }

  let seconds = Math.floor((new Date() - parseInt(ts)) / 1000),
    separator = locales.separator || " ",
    words = locales.prefix + separator,
    interval = 0,
    intervals = {
      year: seconds / 31536000,
      month: seconds / 2592000,
      day: seconds / 86400,
      hour: seconds / 3600,
      minute: seconds / 60
    }

  let distance = locales.seconds

  for (let key in intervals) {
    interval = Math.floor(intervals[key])
    if (interval > 1) {
      distance = locales[key + "s"]
      break
    } else if (interval === 1) {
      distance = locales[key]
      break
    }
  }

  distance = distance.replace(/%d/i, interval)
  words += distance + separator + locales.suffix
  return words.trim()
}

export default Time2TimeAgo
