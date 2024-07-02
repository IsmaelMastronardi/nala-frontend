import { useState } from "react";
import { useQuery } from "react-query";
import { fetchAbsenceRequsts } from "../api/absenceRequests/fetchAbsenceRequests";
import { AbsenceRequest } from "./absenceRequest";
import { Pagination } from "../pagination";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { ButtonPair } from "../styled_components/buttons";

export const AbsenceRequests = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const {status, error, data} = useQuery(
    ["absence_requests",page, statusFilter, startDateFilter, endDateFilter, typeFilter],
    () => fetchAbsenceRequsts(page, null , statusFilter, startDateFilter, endDateFilter, typeFilter),
    {retry: false}
  );

  return(
    <div>
      <h1>Absence Requests</h1>
      <h2>Filters</h2>
      <div>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="status-filter-label">Select Request Status</InputLabel>
          <Select
            variant="standard"
            labelId="status-filter-label"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            >
            <MenuItem value="" disabled>Select Request Status</MenuItem>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="accepted">Accepted</MenuItem>
            <MenuItem value="denied">Denied</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="type-filter-label">Select Type Status</InputLabel>
          <Select
            variant="standard"
            labelId="type-filter-label"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <MenuItem value="" disabled>Select Absence Type</MenuItem>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="vacation">Vacation</MenuItem>
            <MenuItem value="incapability">incapability</MenuItem>
          </Select>
        </FormControl>
        <ButtonPair>
        <DatePicker
            label="Start Date"
            onChange={(e) => setStartDateFilter(dayjs(e).format('YYYY/MM/DD'))}
            renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
          />
          <DatePicker
            label="End Date"
            onChange={(e) => setEndDateFilter(dayjs(e).format('YYYY/MM/DD'))}
            renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
          />
        </ButtonPair>
      </div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error: {error.message}</div>}
      {status === 'success' && (
        <>
          <ul>
            {data.absence_requests.map((request) => (
              <AbsenceRequest key={request.id} {...request} />
            ))}
          </ul>
          <Pagination 
          currentPage={data.pagy.current_page}
          totalPages={data.pagy.pages}
          handlePageChange={handlePageChange} />
        </>
      )}
    </div>
  )
};