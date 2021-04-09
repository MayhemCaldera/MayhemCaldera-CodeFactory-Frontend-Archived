employees = JSON.parse(employees);
console.log(employees);

for (let i = 0; i < employees.length; i++) {
    document.getElementById("tID").innerHTML += `<td>${employees[i].userId}</td>`;
    document.getElementById("tJobTitle").innerHTML += `<td>${employees[i].jobTitleName}</td>`;
    document.getElementById("tFN").innerHTML += `<td>${employees[i].firstName}</td>`;
    document.getElementById("tLN").innerHTML += `<td>${employees[i].lastName}</td>`;
    document.getElementById("tEMail").innerHTML += `<td>${employees[i].emailAddress}</td>`;
    document.getElementById("tSalary").innerHTML += `<td>${employees[i].salary}</td>`;

}