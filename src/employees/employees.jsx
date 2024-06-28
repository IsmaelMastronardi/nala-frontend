import { useQuery } from "react-query";
import { useState } from "react";
import { fetchEmployees } from "../api/employees/fetchEmployees";
import { EmployeeItem } from "./employeeItem";
import { CreateEmployee } from "./createEmployee";
import { RemoveEmployee } from "./removeEmployee";
import { EmployeesFilters } from "./employeesFilters";

export const Employees = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [page, setPage] = useState(1);

  const {status, error, data} = useQuery(
    ["employees",page, nameFilter, emailFilter],
    () => fetchEmployees(page, nameFilter, emailFilter),
    {retry: false}
  );

  return(
    <div>
      <h1>Employees</h1>
      <CreateEmployee />
      <h2>Filters</h2>
      <div>
      <EmployeesFilters
        nameFilter={nameFilter}
        emailFilter={emailFilter}
        setNameFilter={setNameFilter}
        setEmailFilter={setEmailFilter} 
      />
      </div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error: {error.message}</div>}
      {status === 'success' && (
        <ul>
          {data.employees.map((employee) => (
            <EmployeeItem key={employee.id} {...employee} />
          ))}
        </ul>
      )}
    </div>
  )
};