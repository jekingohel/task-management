import React from "react"

const Favorites = ({ data }) => {
  const handelFavorites = () => {
    console.log("Favorites", data)
  }
  return (
    <button
      type="button"
      onClick={handelFavorites}
      className="p-1 mx-2 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        className="lucide lucide-heart"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    </button>
  )
}

export default Favorites
