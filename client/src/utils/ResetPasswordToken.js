const ResetPasswordToken = (function () {
  const isValid = (token) => {
    //const result = /^[a-zA-Z0-9]{32}$/.exec(token)
    const result =
      /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/.exec(
        token
      )
    return result !== null
  }

  return {
    isValid
  }
})()

export default ResetPasswordToken
