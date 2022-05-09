const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h3>Dashboard</h3>
      <h5>Welcome {user?.name}</h5>
    </section>
  )
}

export default Dashboard
