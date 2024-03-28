const RawUriCollection = {
  // [START] USER
  u: "/u",
  uID: "/u/:id",

  uDefault: "/u/:id/personal",
  default: "/personal",

  // [START] PUBLIC
  home: "/",

  passwordResets: "/password-resets",
  passwordResetsToken: "/password-resets/:token",
  resetPassword: "/reset-password",
  resetPasswordSuccess: "/reset-password/success",

  signOut: "/sign-out",
  signUp: "/sign-up",
  signIn: "/sign-in",

  offline: "/offline",

  // [START] API

  session: "/session",
  sessionAuth: "/session/auth",
  tokens: "/tokens",
  tokensID: "/tokens/:id",
  users: "/users",
  usersID: "/users/:id"
}

export default RawUriCollection
