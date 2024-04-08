import {
  DropDownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "components/__Shared/DropdownMenu"
import { useSelector } from "react-redux"
import DropDownMenuCloser from "events/DropDownMenuCloser"
import { Link } from "react-router-dom"
import Uri from "services/Uri"
import { Checkbox } from "../__Shared/Checkbox"
import { Badge } from "components/__Shared/Badge"
import { Button } from "components/__Shared/Button"
import { ReactComponent as VerticalMenu } from "images/icon-ellipsis-vertical.svg"
import DemoPage from "./DataTable"

const Tasks = () => {
  const name = useSelector((state) => state.User.name)
  const onClickHandler = function () {
    // this will close all drop-down menus subscribed to this event emitter
    DropDownMenuCloser.next(null)
  }
  return (
    <div className="py-6 w-full">
      <div className="mb-5">
        <h1 className="scroll-m-20 text-3xl font-bold">Welcome, {name}!</h1>
        <p className="text-muted-foreground">
          It's Monday, 25 September 2024. Let's check how your day goes.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-stretch mb-5">
        <div className="rounded-lg bg-card text-card-foreground border px-3 py-2 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 p-0">
            <h3 className="tracking-tight text-sm font-semibold text-red-600">
              To Do Tasks
            </h3>
          </div>
          <div className="p-0">
            <div className="text-3xl font-semibold">15</div>
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground border px-3 py-2 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 p-0">
            <h3 className="tracking-tight text-sm font-semibold text-yellow-600">
              In Progress Tasks
            </h3>
          </div>
          <div className="p-0">
            <div className="text-3xl font-semibold">5</div>
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground border px-3 py-2 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 p-0">
            <h3 className="tracking-tight text-sm font-semibold text-green-600">
              Completed Tasks
            </h3>
          </div>
          <div className="p-0">
            <div className="text-3xl font-semibold">200</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <div className="space-y-0.5">
          <h2 className="scroll-m-20 text-xl font-bold mb-0">Tasks</h2>
          <p className="text-muted-foreground text-sm">
            You had 2 in-progress and 23 to-do tasks
          </p>
        </div>
        <div className="flex justify-start md:justify-end gap-2">
          <DropDownMenu>
            <DropdownMenuTrigger onClick={onClickHandler}>
              All
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1 rounded-sm bg-white">
              <button className="w-full text-left text-sm text-gray-700 block px-4 py-2 text-sm hover:bg-accent rounded-sm focus:bg-accent focus:text-accent-foreground">
                To Do
              </button>
              <button className="w-full text-left text-sm text-gray-700 block px-4 py-2 text-sm hover:bg-accent rounded-sm focus:bg-accent focus:text-accent-foreground">
                In Progress
              </button>
              <button className="w-full text-left text-sm text-gray-700 block px-4 py-2 text-sm hover:bg-accent rounded-sm focus:bg-accent focus:text-accent-foreground">
                Completed
              </button>
            </DropdownMenuContent>
          </DropDownMenu>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 h-8">
            <div className="gap-1 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span>Add</span>
            </div>
          </button>
        </div>
      </div>

      <div className="tasks space-y-1 mt-5">
        <h5 className="text-md font-semibold">
          Todo tasks{" "}
          <span className="text-sm text-muted-foreground font-normal">
            (20)
          </span>
        </h5>
        <div className="p-2 border rounded-md focus-within:outline-none focus-within:bg-muted hover:bg-muted flex justify-between items-center">
          <div className="flex items-start space-x-2">
            <Checkbox id="terms" />
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show Popular products on both B2C/B2B
              </label>
              <span className="text-muted-foreground text-xs">
                This products should be the most sold products, usually how we
                do me and Daniil before...{" "}
                <span className="underline">more</span>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Badge className="bg-red-100 text-red-600">Todo</Badge>
            <Button variant="ghost" className="py-0 px-1 h-4">
              <VerticalMenu className="w-5 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="tasks space-y-1 mt-5">
        <h5 className="text-md font-semibold">
          In Progress tasks{" "}
          <span className="text-sm text-muted-foreground font-normal">
            (20)
          </span>
        </h5>
        <div className="p-2 border rounded-md focus-within:outline-none focus-within:bg-muted hover:bg-muted flex justify-between items-center">
          <div className="flex items-start space-x-2">
            <Checkbox id="terms" />
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show Popular products on both B2C/B2B
              </label>
              <span className="text-muted-foreground text-xs">
                This products should be the most sold products, usually how we
                do before... <span className="underline">more</span>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Badge className="bg-yellow-100 text-yellow-600">In Progress</Badge>
            <Button variant="ghost" className="py-0 px-1 h-4">
              <VerticalMenu className="w-5 h-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="tasks space-y-1 mt-5">
        <h5 className="text-md font-semibold">
          Completed tasks{" "}
          <span className="text-sm text-muted-foreground font-normal">
            (20)
          </span>
        </h5>
        <div className="p-2 border rounded-md focus-within:outline-none focus-within:bg-muted hover:bg-muted flex justify-between items-center">
          <div className="flex items-start space-x-2">
            <Checkbox id="terms" />
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show Popular products on both B2C/B2B
              </label>
              <span className="text-muted-foreground text-xs">
                This products should be the most sold products, usually how we
                do me and before... <span className="underline">more</span>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Badge className="bg-green-100 text-green-600">Completed</Badge>
            <Button variant="ghost" className="py-0 px-1 h-4">
              <VerticalMenu className="w-5 h-4" />
            </Button>
          </div>
        </div>
      </div>
      {/* <DemoPage /> */}
    </div>
  )
}
export default Tasks
