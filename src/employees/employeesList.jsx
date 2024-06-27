import { useQuery } from "react-query";
import { Employee } from "./employee";
import { useState } from "react";
import { fetchEmployees } from "../api";

export const EmployeesList = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [page, setPage] = useState(1);
  const {status, error, data} = useQuery(
    ["employees", nameFilter],
    () => fetchEmployees(page, nameFilter),
  );
  if(status === 'success'){console.log(data)};
  return(
    <div>
      <h1>Employees</h1>
      <input
        type="text"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        placeholder="Filter by name"
      />
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error: {error.message}</div>}
      {status === 'success' && (
        <ul>
          {data.employees.map((employee) => (
            <li key={employee.id}>{employee.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
};