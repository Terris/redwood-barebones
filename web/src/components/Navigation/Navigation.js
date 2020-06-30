import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import LogoutBtn from 'src/components/LogoutBtn/LogoutBtn'

const Navigation = () => {
  const { isAuthenticated } = useAuth()
  return (
    <nav>
      {isAuthenticated ? (
        <LogoutBtn />
      ) : (
        <>
          <Link to={routes.signup()}>Sign Up</Link>
          <Link to={routes.signin()}>Sign In</Link>
        </>
      )}
    </nav>
  )
}

export default Navigation
