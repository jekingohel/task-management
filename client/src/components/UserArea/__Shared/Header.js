import UserNav from "./UserNav"

const { default: SiteLogo } = require("components/__Shared/SiteLogo")
const { Link } = require("react-router-dom")

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-md items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <SiteLogo className="logo mx-auto h-8 w-auto" />
              <span className="text-lg font-semibold">taskify</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <div className="w-full flex-1 justify-end">
            <div className="ml-auto flex items-center space-x-4 justify-end">
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
