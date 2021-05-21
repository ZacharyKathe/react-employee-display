import React from "react";


function EmployeeDetail(props) {
  return (
    
    <table >
  
       
        <tr >
           <img key={props.employee.cell} alt={props.employee.name.first} src={props.employee.picture.thumbnail}></img>
           <th  key={props.employee.cell}>{props.employee.name.first+" "+props.employee.name.last}</th>
           <th  key={props.employee.cell}>{props.employee.email}</th>
           <th  key={props.employee.cell}>{props.employee.cell}</th>
           <th  key={props.employee.cell}>{props.employee.location.state}</th>
           <hr/>
           <br/>
        </tr>
        
     
    </table>
    
  );
}

export default EmployeeDetail;
