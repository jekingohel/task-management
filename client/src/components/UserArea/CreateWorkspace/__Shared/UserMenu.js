import DropDownMenu from "components/__Shared/DropdownMenu"
import SiteLogo from "components/__Shared/SiteLogo"

const UserMenu = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-lg items-center">
        <div className="mr-4 hidden md:flex">
          <SiteLogo />
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <DropDownMenu />
        </div>
      </div>
    </header>
  )
}

export default UserMenu
