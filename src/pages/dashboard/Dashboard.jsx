import { useSelector } from "react-redux"

function Dashboard() {

  const user = useSelector(
    (state) => state.auth.user
  )

  console.log("Dashboard User:", user)

  return (
    <div>
      <h1>StoreHub Dashboard</h1>

      <h2>Login Successful 🎉</h2>

      {user ? (
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>User ID:</strong> {user.userId}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Role:</strong> {user.role}
          </p>

          <p>
            <strong>Message:</strong> {user.message}
          </p>

          <p>
            <strong>Created At:</strong> {user.createdAt}
          </p>

          <p>
            <strong>Updated At:</strong> {user.updatedAt}
          </p>
        </div>
      ) : (
        <h2>No user data found</h2>
      )}
    </div>
  )
}

export default Dashboard