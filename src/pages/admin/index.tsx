// src/pages/admin/index.tsx

// import { useAuth } from "../../hooks/useAuth";

function AdminDashboard() {
  // const { isAdminAuthenticated, adminUser, logoutAdmin } = useAuth();

  // if (!isAdminAuthenticated) {
  //   return <Navigate to="/admin/login" />;
  // }
  return (
    <div>
      <h2>Admin Dashboard</h2>
      {/* {adminUser && <p>Welcome, {adminUser.username}!</p>} */}

      <div>
        <h3>Admin Actions</h3>
        <ul>
          <li>
            <a href="/admin/workers">Manage Workers</a>
          </li>
          <li>
            <a href="/admin/addOffer">Add New Offer</a>
          </li>
        </ul>
      </div>

      {/* <button onClick={logoutAdmin}>Logout Admin</button> */}
    </div>
  );
}

export default AdminDashboard;
