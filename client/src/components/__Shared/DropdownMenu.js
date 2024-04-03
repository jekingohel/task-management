import DropDownMenuCloser from "events/DropDownMenuCloser"
import { useEffect, useState } from "react"

const DropDownMenu = () => {
  const [menuState, setMenuState] = useState(false)

  useEffect(() => {
    const subs = DropDownMenuCloser.subscribe((value) => {
      setMenuState(false)
    })

    return () => {
      subs.unsubscribe()
    }
  }, [])

  const classNameDropdownState = menuState
    ? "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    : "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"

  const onClickHandlerToggleDropdownState = function (ev) {
    ev.stopPropagation()
    DropDownMenuCloser.next(null)
    setMenuState(!menuState)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex border-0 w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={onClickHandlerToggleDropdownState}
        >
          Options
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={classNameDropdownState}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
          >
            Account settings
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-1"
          >
            Support
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
            id="menu-item-2"
          >
            License
          </a>
        </div>
      </div>
    </div>
  )
}

export default DropDownMenu
