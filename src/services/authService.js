import api from "./api"

const login = async (userRequest) => {
  const response = await api.post(
    "/api/login",
    userRequest
  )

  return response.data
}

const authService = {
  login,
}

export default authService