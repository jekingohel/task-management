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
    <div className="flex justify-center flex-col items-center h-screen">
      <CloudOffline width={150} style={{ fill: "#2881E6" }} />
      <h1 className="text-2xl font-semibold tracking-tight">You"re Offline</h1>
      <p className="text-lg text-muted-foreground">
        Check your connection and try again!
      </p>
    </div>
  )
}

export default Offline
