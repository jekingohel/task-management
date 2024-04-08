import { Children, cloneElement, useEffect, useState } from "react"

const DropDownMenu = ({ children }) => {
  const [menuState, setMenuState] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuState(false)
    document.addEventListener("click", closeMenu)

    return () => {
      document.removeEventListener("click", closeMenu)
    }
  }, [])

  const toggleMenuState = (event) => {
    event.stopPropagation()
    setMenuState(!menuState)
  }

  const handleContentClick = (event) => {
    event.stopPropagation()
  }

  const trigger = Children.toArray(children).find(
    (child) => child.type.name === "DropdownMenuTrigger"
  )

  const content = Children.toArray(children).find(
    (child) => child.type.name === "DropdownMenuContent"
  )

  return (
    <div className="relative inline-block text-left">
      {trigger && cloneElement(trigger, { onClick: toggleMenuState })}
      {menuState && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          onClick={handleContentClick}
        >
          {content}
        </div>
      )}
    </div>
  )
}

const DropdownMenuTrigger = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className="cursor-pointer items-center inline-flex border-0 w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 hover:bg-gray-50"
    >
      {children}
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
    </div>
  )
}

const DropdownMenuContent = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

export { DropDownMenu, DropdownMenuTrigger, DropdownMenuContent }
