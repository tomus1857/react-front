import axios from "axios";
import { useEffect, useState } from "react"

const ListEmployeeComponent1 = () => {

const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/student/lista')
        .then((response) => setEmployees(response.data))
        .catch(error=>console.error(error))
    }, [])



    // const dummyEmployee = [
    //     {
    //         id : '1',
    //         firstName: 'Tomassz',
    //         lastName: 'Antosik',
    //         email: 'dsad@o2.pl'
    //     },
    //     {
    //         id: '2',
    //         firstName: 'Tomassz',
    //         lastName: 'Antosik',
    //         email: 'dsad@o2.pl'
    //     }
    // ]




    return(
        <div className='container'>
            <h1 className="text-center">List of employees</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent1