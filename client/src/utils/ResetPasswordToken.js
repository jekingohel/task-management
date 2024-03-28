const ResetPasswordToken = (function () {
  const isValid = (token) => {
    const result = /^[a-zA-Z0-9]{32}$/.exec(token)
    return result !== null
  }

  return {
    isValid
  }
})()

export default ResetPasswordToken
