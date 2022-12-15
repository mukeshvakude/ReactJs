
import React from "react";
import useState ,{useEffect} from 'react';
function Employee(){

    const [employee, setEmployee] = useState([]);
    let  [tempData ,setTempdata] = useState( [
        { empid: 1, empname: 'Rajat Singh', salary: 150000,dept:'Web development', depiId :1 ,gender : 'male' },
        { empid: 2, empname: 'Pragati Chauhan', salary: 950000, dept:'Software development' ,gender : 'female' },
        { empid: 3, empname: 'Aditya Singh', salary: 750000 , dept:'Mobile app development' ,gender : 'male'},
        { empid: 4, empname: 'Manoj Singh', salary: 650000 , dept:'Admin' ,gender : 'male'},
        { empid: 5, empname: 'Azad Rawat', salary: 750000, dept:'Web development' ,gender : 'male'},
        { empid: 6, empname: 'Amit Rawat', salary: 750000, dept:'Web development',gender : 'male'},
        { empid: 7, empname: 'Azad Rawat', salary: 750000, dept:'Web development',gender : 'male'},
        { empid: 8, empname: 'Ajay Rawat', salary: 750000, dept:'Web development',gender : 'male'},
        { empid: 9, empname: 'Azad Rawat', salary: 750000, dept:'HR',gender : 'male'},
        { empid: 10, empname: 'Azad Rawat', salary: 750000, dept:'HR',gender : 'male'}]);
    useEffect(() => {
       
        
       
              
        setEmployee(tempData);
        
        console.log(tempData);
    });

        return(
            <>
            
            <table className='table table-striped'>
            <tbody>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Gender</th>
                    <th>Employee Salary</th>
                    <th>Department</th>
                </tr>
                {tempData.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{item.empid}</td>
                            <td>{item.empname}</td>
                            <td>{item.gender}</td>
                            <td>{item.salary}</td>
                            <td>{item.dept}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
        )

}

export default Employee;