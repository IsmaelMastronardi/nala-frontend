import { useQuery } from "react-query";
import { useState } from "react";
import { fetchEmployees } from "../api/employees/fetchEmployees";
import { EmployeeItem } from "./employeeItem";
import { CreateEmployee } from "./createEmployee";
import { RemoveEmployee } from "./removeEmployee";

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
      <div>
      <input
        type="text"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        placeholder="Filter by name"
      />
      <input
        type="text"
        value={emailFilter}
        onChange={(e) => setEmailFilter(e.target.value)}
        placeholder="Filter by email"
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