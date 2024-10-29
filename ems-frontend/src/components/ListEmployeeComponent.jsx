const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id" : 1,
            "firstName": "Tomasz",
            "lastName": "Antosik",
            "email" : "adad@o2.pl"

        },
        {
            "id" : 2,
            "firstName": "Paweł",
            "lastName": "Kowalski",
            "email" : "asdasd@o2.pl"

        },
        {
            "id" : 3,
            "firstName": "Piotr",
            "lastName": "Łukasiński",
            "email" : "adasdadd@o2.pl"

        }
    ]

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
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
                    dummyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>

                        </tr>)
                }
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent