import api from "./api"

const createStore = async (storeData, logo, images) => {

  const formData = new FormData()

  // JSON → String
  formData.append(
    "store",
    JSON.stringify(storeData)
  )

  // Logo
  if (logo) {
    formData.append("logo", logo)
  }

  // Multiple images
  if (images && images.length > 0) {
    images.forEach((image) => {
      formData.append("images", image)
    })
  }

  const response = await api.post(
    "/api/super-admin/stores/create",
    formData
  )

  return response.data
}

const storeService = {
  createStore,
}

export default storeService