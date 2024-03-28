import { ReactComponent as CloudOffline } from "images/cloud-offline.svg"
import { useEffect } from "react"
import History from "services/History"
import Uri from "services/Uri"

const Offline = function () {
  useEffect(() => {
    if (navigator.onLine) {
      History.replace(Uri.home())
    }
  }, [])

  return (
    <div className="d-flex justify-content-center flex-column align-items-center vh-100">
      <CloudOffline width={150} style={{ fill: "#2881E6" }} />
      <h1 className="mb-0">You"re Offline</h1>
      <p className="h5 text-muted">Check your connection and try again!</p>
    </div>
  )
}

export default Offline
