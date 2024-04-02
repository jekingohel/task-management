const RawUriCollection = {
  // [START] USER
  u: "/u",
  uID: "/u/:id",

  uDefault: "/u/:id/personal",
  default: "/personal",

  // [START] PUBLIC
  home: "/",
  dashboard: "/u/dashboard",
  project: "/u/project",
  projectId: "/u/project/:id",

  resetPassword: "/reset-password",
  resetPasswordSuccess: "/reset-password/success",

  signOut: "/sign-out",
  signUp: "/sign-up",
  signIn: "/sign-in",

  offline: "/offline",

  // [START] API

  session: "/session",
  login: "/auth/login", // Login
  register: "/auth/register", // Register
  verify: "/auth/verify", // Verify
  reset: "/auth/reset", // Reset password
  tokens: "/auth/tokens", // Get new refresh token
  users: "/users",
  usersID: "/users/:id",
  me: "/auth/me",
  passwordResets: "/auth/password-resets", // Forgot password
  passwordResetsToken: "/auth/password-resets/:token",

  // Project API
  getProjects: "/project",
  getProject: "/project/:id",
  createProject: "/project",
  updateProject: "/project/:id",
  deleteProject: "/project/:id",

  // Task API
  getTasks: "/tasks",
  getTask: "/tasks/:id",
  createTask: "/tasks",
  updateTask: "/tasks/:id",
  deleteTask: "/tasks/:id"
}

export default RawUriCollection
