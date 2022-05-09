import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Login = ({ setUser }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email) return
    setUser({ name, email })
    navigate("/dashboard")
  }
  return (
    <section className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </section>
  )
}

export default Login
