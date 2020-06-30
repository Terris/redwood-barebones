import { Form, TextField, PasswordField, Submit } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const SignupPage = () => {
  const { client } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    client
      .signup(data.email, data.password)
      .then(() => signIn(data.email, data.password))
      .catch((error) => setError(error))
  }

  const signIn = (email, password) => {
    logIn(email, password)
    then((res) => navigate(routes.home())).catch((error) =>
      setError(error.message)
    )
  }

  return (
    <Form onSubmit={onSubmit}>
      {error && <p>{error}</p>}
      <TextField name="email" placeholder="email" />
      <PasswordField name="password" placeholder="password" />
      <Submit>Sign Up</Submit>
    </Form>
  )
}

export default SignupPage
