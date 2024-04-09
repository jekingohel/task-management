import { useState, useEffect } from "react"

const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Timer variable to store the setTimeout ID
    let timer

    // Function to handle debouncing
    const debounce = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
    }

    // Call the debounce function after a value change
    debounce()

    // Cleanup function to clear the timer
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
