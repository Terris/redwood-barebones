import { useAuth } from `@redwoodjs/auth`

const LogoutBtn = () => {
  const { logOut } = useAuth()
  onClick = () => {
    logOut()
  }
  return <button onClick={() => onClick()}>Log Out</button>
}

export default LogoutBtn
