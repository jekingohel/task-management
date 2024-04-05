import {
  DropDownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "components/__Shared/DropdownMenu"
import SiteLogo from "components/__Shared/SiteLogo"
import Avatar from "./Avatar"
import Hello from "./Hello"
import UserMenuAdditionalItems from "components/UserArea/CreateWorkspace/__Shared/UserMenuAdditionalItems"
import Store from "store"
import { useEffect, useState } from "react"
import DropDownMenuCloser from "events/DropDownMenuCloser"
import { Link } from "react-router-dom"
import Uri from "services/Uri"

const UserMenu = () => {
  const [menuState, setMenuState] = useState(false)

  useEffect(() => {
    const subs = DropDownMenuCloser.subscribe((value) => {
      setMenuState(false)
    })

    return () => {
      subs.unsubscribe()
    }
  }, [])
  return (
    <header className="z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-lg items-center">
        <div className="mr-4 hidden md:flex">
          <SiteLogo />
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <DropDownMenu>
            <DropdownMenuTrigger>
              <Avatar />
              <Hello />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1">
              {!Store.getState().CreateWorkspace.required && (
                <UserMenuAdditionalItems
                  menuState={menuState}
                  setMenuState={setMenuState}
                />
              )}
              <Link
                to={Uri.signOut()}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-accent rounded-sm focus:bg-accent focus:text-accent-foreground"
              >
                Sign Out
              </Link>
            </DropdownMenuContent>
          </DropDownMenu>
        </div>
      </div>
    </header>
  )
}

export default UserMenu
