import { useQuery } from "react-query";
import { useState } from "react";
import { fetchEmployees } from "../api/employees/fetchEmployees";
import { EmployeeItem } from "./employeeItem";
import { CreateEmployee } from "./createEmployee";
import { EmployeesFilters } from "./employeesFilters";
import { Pagination } from "../pagination";
import { CardList } from "../styled_components/lists";
import { ContentDiv, PaginationDiv } from "../styled_components/divs";

export const Employees = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [page, setPage] = useState(1);

  const {status, error, data} = useQuery(
    ["employees",page, nameFilter, emailFilter],
    () => fetchEmployees(page, nameFilter, emailFilter),
    {retry: false}
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return(
    <ContentDiv>
      <h1>Employees</h1>
      <div>
        <CreateEmployee />
      </div>
      <h2>Filters</h2>
      <EmployeesFilters
        nameFilter={nameFilter}
        emailFilter={emailFilter}
        setNameFilter={setNameFilter}
        setEmailFilter={setEmailFilter} 
      />
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error: {error.message}</div>}
      {status === 'success' && (
        <>
        <PaginationDiv>
          <Pagination 
            currentPage={data.pagy.current_page}
            totalPages={data.pagy.pages}
            handlePageChange={handlePageChange} />
        </PaginationDiv>
          <CardList>
            {data.employees.map((employee) => (
              <EmployeeItem key={employee.id} {...employee} />
            ))}
          </CardList>
        </>
      )}
    </ContentDiv>
  )
};