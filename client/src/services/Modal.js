const Modal = (function () {
  const ret = {}

  ret.hideConfig = [
    "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full hidden", // className
    { display: "none" } // style
  ]

  ret.showConfig = [
    "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex", // className
    { display: "block" } // style
  ]

  const bodyStyles = {
    overflow: "hidden",
    "padding-right": "17px" // this is related to "data-bs-padding-right" attribute
  }

  const bodyClasses = ["modal-open"]

  const bodyAttributes = {
    //"data-bs-padding-right": "" // this is related to "padding-right" styles
  }

  const getScrollBarWidth = () => {
    return window.innerWidth - document.body.offsetWidth
  }

  const addBodyStyles = () => {
    let body = document.getElementsByTagName("body")
    bodyStyles["padding-right"] = `${getScrollBarWidth()}px`
    for (const key in bodyStyles) {
      body[0].style[key] = bodyStyles[key]
    }
  }

  const removeBodyStyles = () => {
    let body = document.getElementsByTagName("body")
    for (const key in bodyStyles) {
      body[0].style[key] = ""
    }
  }

  const addBodyClasses = () => {
    let body = document.getElementsByTagName("body")
    body[0].classList.add(...bodyClasses)
  }

  const removeBodyClasses = () => {
    let body = document.getElementsByTagName("body")
    body[0].classList.remove(...bodyClasses)
  }

  const addBodyAttributes = () => {
    let body = document.getElementsByTagName("body")
    for (const key in bodyAttributes) {
      body[0].setAttribute(key, bodyAttributes[key])
    }
  }

  const removeBodyAttributes = () => {
    let body = document.getElementsByTagName("body")
    for (const key in bodyAttributes) {
      body[0].removeAttribute(key)
    }
  }

  ret.show = () => {
    addBodyAttributes()
    addBodyClasses()
    addBodyStyles()
  }

  ret.hide = () => {
    removeBodyAttributes()
    removeBodyClasses()
    removeBodyStyles()
  }

  return ret
})()

export default Modal
