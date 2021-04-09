employees = JSON.parse(employees);
console.log(employees);


function generateTable(employees) {

    let tables = "";
    for (let i = 0; i < employees.length; i++) {
        tables += `
       
           
                <tr>
                    
                    <td>${employees[i].userId}</td>
                    <td>${employees[i].jobTitleName}</td>
                    <td>${employees[i].firstName}</td>
                    <td>${employees[i].lastName}</td>
                    <td>${employees[i].emailAddress}</td>
                    <td>${employees[i].salary}</td>
                </tr>
                
            
        `

    }
    return tables;
}

document.getElementById("entry").innerHTML += generateTable(employees);