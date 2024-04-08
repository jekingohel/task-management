import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import DropDownMenuCloser from "events/DropDownMenuCloser"
import {
  DropDownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "components/__Shared/DropdownMenu"

const roles = [
  { value: "viewer", name: "Viewer", info: "View-only access. Cannot record." },
  {
    value: "editor",
    name: "Editor",
    info: "Manages workspace. Can view and record videos."
  }
]

const Roles = function ({ ngn }) {
  const [value, setValue] = useState(roles[0].name)
  const [visible, setVisible] = useState(false)

  const className = visible ? "bg-white" : "bg-white"

  const openerOnClickHandler = (ev) => {
    ev.stopPropagation()
    setVisible(!visible)
  }

  const selectOnClickHandler = (ev, value) => {
    ev.stopPropagation()
    setValue(value)
    setVisible(false)
  }

  ngn.getValue = () => {
    return value
  }

  ngn.resetValue = () => {
    setValue(roles[0].name)
  }

  ngn.closeSelect = () => {
    setVisible(false)
  }

  const containerOnClick = (ev) => {
    ev.stopPropagation()
  }

  useEffect(() => {
    const subs = DropDownMenuCloser.subscribe((value) => {
      setVisible(false)
    })

    return () => {
      subs.unsubscribe()
    }
  }, [])

  return (
    <DropDownMenu>
      <DropdownMenuTrigger onClick={openerOnClickHandler}>
        <span className="capitalize">{value}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <ul
          className={className}
          aria-labelledby="viewer"
          onClick={containerOnClick}
        >
          {roles.map((item, index) => {
            return (
              <li
                className="hover:bg-accent rounded-sm focus:bg-accent focus:text-accent-foreground px-2 py-1"
                key={index}
              >
                <button
                  className="flex flex-col text-left"
                  type="button"
                  onClick={(ev) => selectOnClickHandler(ev, item.value)}
                >
                  <span className="font-medium">{item.name}</span>
                  <small className="text-xs text-muted-foreground">
                    {item.info}
                  </small>
                </button>
              </li>
            )
          })}
        </ul>
      </DropdownMenuContent>
    </DropDownMenu>
  )
}

Roles.propTypes = {
  ngn: PropTypes.object
}

export default Roles
