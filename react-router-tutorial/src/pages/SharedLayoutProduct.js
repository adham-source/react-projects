import { Outlet } from "react-router-dom"

const SharedLayoutProduct = () => {
  return (
    <>
      <section className="section">
        <h2>Products</h2>
        <Outlet />
      </section>
    </>
  )
}

export default SharedLayoutProduct
