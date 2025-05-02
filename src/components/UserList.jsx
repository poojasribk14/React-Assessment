import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [userData, setUserData] = useState([]);

  const deleteUser=async($event, u)=>{

    $event.preventDefault();

    let userId=u.id;

   try {

    await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);

    let tempArray=[...userData];

    tempArray = tempArray.filter(u=>u.id!==userId)
    setUserData(tempArray);
    alert('Deleted Suucessfully!' + u.name)
    
   } catch (error) {
    console.log("Error in deleting "+ error);
   }
  }
  useEffect(() => {
    const getUserList = async () => {
      await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          console.log(response.data);
          setUserData(response.data);
        });
    };
    getUserList();
  }, []);

  return (
    <div className="container-fluid mt-5">
      <div className="card">
        <div className="card-header">
          <nav className="navbar fixed-top" style={{ backgroundColor: "#e3f2fd", borderBottom: "1px solid #ccc" }}>
            <div className="container d-flex justify-content-start gap-5 py-2">
              <span className="navbar-text fw-semibold">User Management</span>
              <Link to="/user" className="nav-link"><button className="btn btn-primary">Users</button></Link>
              <Link to="/add-user" className="nav-link"><button className="btn btn-primary">Add User</button></Link>
            </div>
          </nav>
        </div>

        <div className="card-body mt-5">
          <div className="table-responsive">
            <h4>User List</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company Name</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((u, index) => (
                  <tr key={index}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>{u.company.name}</td>
                    <td><button className="btn btn-danger btn-sm" onClick={($event)=>deleteUser($event, u)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
