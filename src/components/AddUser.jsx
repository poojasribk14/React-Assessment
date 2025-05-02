import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddUser() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');

    const postUser = async ($event) => {
        $event.preventDefault();

        let body = {
            'name': name,
            'email': email,
            'phone': phone,
            'company': {
                'name':companyName
            }
        };
        
        await axios.post('https://jsonplaceholder.typicode.com/users', body);
        console.log("Post User Success!");
        alert('Post of User ' + name + ' is Success!');
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
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
                        </div>
                    </div>
                </div>

                <div className="card-body" style={{ marginTop: '60px' }}>
                    <h5>Add User Form</h5> <hr />
                    <form onSubmit={($event) => { postUser($event) }}>
                        <div className="mb-4">
                            <label>Enter Name</label>
                            <input
                                onChange={($event) => setName($event.target.value)}
                                value={name}
                                className="form-control"
                                type="text"
                            />
                        </div>
                        <div className="mb-4">
                            <label>Enter Email</label>
                            <input
                                onChange={($event) => setEmail($event.target.value)}
                                value={email}
                                className="form-control"
                                type="email"
                            />
                        </div>
                        <div className="mb-4">
                            <label>Enter Phone</label>
                            <input
                                onChange={($event) => setPhone($event.target.value)}
                                value={phone}
                                className="form-control"
                                type="tel"
                            />
                        </div>
                        <div className="mb-4">
                            <label>Enter Company Name</label>
                            <input
                                onChange={($event) => setCompanyName($event.target.value)}
                                value={companyName}
                                className="form-control"
                                type="text"
                            />
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="btn btn-success">
                                Post User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddUser;
