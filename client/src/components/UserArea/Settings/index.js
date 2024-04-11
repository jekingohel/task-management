import {
  Link,
  Navigate,
  Route,
  Routes,
  useMatch,
  useLocation
} from "react-router-dom"
import Uri from "services/Uri"
import Profile from "./Profile"
import ChangePassword from "./ChangePassword"

const Settings = () => {
  const location = useLocation()
  const isEmpty = !!useMatch(Uri.uSettings())
  // just /u/settings ? redirect to the profile page
  if (isEmpty) {
    return <Navigate to={`${Uri.uSettingProfile()}`} replace={true} />
  }
  return (
    <div className="py-6 w-full">
      <div className="mb-5">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and update profile details.
        </p>
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full my-6"
      ></div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/4">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            <Link
              to={`${Uri.uSettingProfile()}`}
              className={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-muted justify-start ${location.pathname === Uri.uSettingProfile() ? "bg-muted" : ""}`}
            >
              Profile
            </Link>
            <Link
              to={`${Uri.uSettingChangePassword()}`}
              className={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-muted justify-start ${location.pathname === Uri.uSettingChangePassword() ? "bg-muted" : ""}`}
            >
              Change Password
            </Link>
          </nav>
        </aside>
        <div className="flex-1 lg:max-w-2xl">
          <Routes>
            {/* these have to be in a separate Route because of the structure of the page itself. It is outside the actual workspace container but still requires user credentials. */}
            <Route path={`${Uri.settingsProfile()}`} element={<Profile />} />
            <Route
              path={`${Uri.settingsChangePassword()}`}
              element={<ChangePassword />}
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}
export default Settings
