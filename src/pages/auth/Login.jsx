import { loginUser } from "@/store/slices/authSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Login() {

  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading, error } = useSelector(
    (state) => state.auth
  )

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await dispatch(
      loginUser({
        userId,
        password,
      })
    )

    console.log("Result :",result)

    if (loginUser.fulfilled.match(result)) {
      navigate("/dashboard")
    }
  }

  return (
    <div>
      <h1>StoreHub Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) =>
            setUserId(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p>{error}</p>
        )}

      </form>
    </div>
  )
}

export default Login