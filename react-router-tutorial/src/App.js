// import "./App.css"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import ProtectedRoute from "./pages/ProtectedRoute"
import Erro from "./pages/Error"
import SharedLayoutProduct from "./pages/SharedLayoutProduct"

const App = () => {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<SharedLayoutProduct />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
