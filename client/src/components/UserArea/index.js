import InitLoading from "components/__Shared/InitLoading"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Uri from "services/Uri"
import Req from "requests"

const UserArea = () => {
  const RequestFunc = useSelector((state) => state.Requests.func)
  const RequestParams = useSelector((state) => state.Requests.params)
  // this will show a loading page if the initial requests to the api are not completed yet; see /requests
  if (RequestFunc !== null) {
    Req[RequestFunc](RequestParams)
    return <InitLoading />
  }
  return (
    <div>
      <span>Hello World!</span>
      <Link to={Uri.signOut()} className="btn btn-md btn-cancel ms-4">
        Sign Out
      </Link>
    </div>
  )
}

export default UserArea
