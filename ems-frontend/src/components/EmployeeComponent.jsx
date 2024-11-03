import { useState } from "react"
import { createEmployee } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setemail] = useState('')
    
    const [errors, setErrors] = useState({
        firstName : '',
        lastName : '',
        email : ''
    })

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
        if(valisateForm()) {
            const employee ={firstName, lastName, email}
            console.log(employee)
    
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees')
            })
        }
    }

    function valisateForm() {
        let valid = true;
        const errosCopy = {... errors}

        if(firstName.trim()) {
            errosCopy.firstName = '';
        } else {
            errosCopy.firstName = 'First name is required';
            valid = false;
        }

        if(lastName.trim()) {
            errosCopy.lastName = '';
        } else {
            errosCopy.lastName = 'Last name is required';
            valid = false;
        }

        if(email.trim()) {
            errosCopy.email = '';
        } else {
            errosCopy.email = 'email is required';
            valid = false;
        }

        setErrors(errosCopy);
        return valid;
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
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={handlerFirstName}
                                >
                                </input>
                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Last Name: </label>
                                <input
                                    type="text"
                                    placeholder="Enter employee last name"
                                    name="lastName"
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={handlerLastName}
                                >
                                </input>
                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email </label>
                                <input
                                    type="text"
                                    placeholder="Enter employee email"
                                    name="email"
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={handlerEmail}
                                >
                                </input>
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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