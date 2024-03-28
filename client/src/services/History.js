//
// Custom History
//
// This will replace the default react one
// The idea here is to have access to the "history" functionality outside component
// Just import this in your JS file and you have access to all the methods provided by "history" module
//
// source: https://brandoncantello.medium.com/using-history-to-navigate-your-react-app-from-outside-a-component-40ea74ba4402
//
import { createBrowserHistory } from "history"

export default createBrowserHistory()
