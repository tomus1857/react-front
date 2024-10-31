import { useState } from "react"
import { createEmployee } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setemail] = useState('')
    

    function handlerFirstName(e){
        setFirstName(e.target.value)
    }

    function handlerLastName(e) {
        setLastName(e.target.value)
    }

    function handlerEmail(e) {
        setemail(e.target.value)
    }
    const navigator = useNavigate();
    function saveEmployee(e) {
        e.preventDefault();
        const employee ={firstName, lastName, email}
        console.log(employee)

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        })
    }
    return(
        <div className="container">
            <br />
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">Add employee</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name: </label>
                                <input
                                    type="text"
                                    placeholder="Enter employee first name"
                                    name="firstName"
                                    value={firstName}
                                    className="form-control"
                                    onChange={handlerFirstName}
                                >
                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Last Name: </label>
                                <input
                                    type="text"
                                    placeholder="Enter employee last name"
                                    name="lastName"
                                    value={lastName}
                                    className="form-control"
                                    onChange={handlerLastName}
                                >
                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email </label>
                                <input
                                    type="text"
                                    placeholder="Enter employee email"
                                    name="email"
                                    value={email}
                                    className="form-control"
                                    onChange={handlerEmail}
                                >
                                </input>
                            </div>
                            <button className="btn btn-success" onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmployeeComponent