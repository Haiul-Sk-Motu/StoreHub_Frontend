import api from "./api"

const login = async (userRequest) => {
  const response = await api.post(
    "/api/login",
    userRequest
  )

  console.log("Response :",response)

  return response.data
}

const authService = {
  login,
}

export default authService