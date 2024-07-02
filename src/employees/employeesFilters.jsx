import { TextField } from "@mui/material";
import { FilterDiv } from "../styled_components/divs";

export const EmployeesFilters = ({ nameFilter, emailFilter, setNameFilter, setEmailFilter }) => {
  return (
    <FilterDiv className="filters">
      <TextField
        type="text"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        placeholder="Filter by name"
      />
      <TextField
        type="text"
        value={emailFilter}
        onChange={(e) => setEmailFilter(e.target.value)}
        placeholder="Filter by email"
      />
    </FilterDiv>
  );
};