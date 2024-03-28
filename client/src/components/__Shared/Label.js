const Label = function ({ title, htmlFor, className, children }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {title}
      {children}
    </label>
  )
}

Label.defaultProps = {
  title: null,
  htmlFor: null,
  className: null,
  children: null
}

export default Label
