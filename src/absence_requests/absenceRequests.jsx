import { useState } from "react";
import { useQuery } from "react-query";
import { fetchAbsenceRequsts } from "../api/absenceRequests/fetchAbsenceRequests";
import { AbsenceRequest } from "./absenceRequest";

export const AbsenceRequests = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [page, setPage] = useState(1);

  const {status, error, data} = useQuery(
    ["fetchAbsenceRequests",page, statusFilter, startDateFilter, endDateFilter, typeFilter],
    () => fetchAbsenceRequsts(page, null , statusFilter, startDateFilter, endDateFilter, typeFilter),
    {retry: false}
  );

  if(status === 'loading'){
    console.log('Loading...')
  }
  if(status === 'error'){
    console.log('Error: ', error.message)
  }
  if(status === 'success'){
    console.log('Data: ', data)
  }

  return(
    <div>
      <h1>Absence Requests</h1>
      <h2>Filters</h2>
      <div>
        <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            placeholder="Status"
          >
            <option value="" disabled>Select Request Status</option>
            <option value="">All</option>
            <option value="accepted">Accepted</option>
            <option value="denied">Denied</option>
          </select>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            placeholder="Type"
          >
            <option value="" disabled>Select Absence Type</option>
            <option value="">All</option>
            <option value="vacation">Vacation</option>
            <option value="incapability">incapability</option>
          </select>
          <input
            type="date"
            value={startDateFilter}
            onChange={(e) => setStartDateFilter(e.target.value)}
            placeholder="Start Date"
          />
          <input
            type="date"
            value={endDateFilter}
            onChange={(e) => setEndDateFilter(e.target.value)}
            placeholder="End Date"
          />
      </div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error: {error.message}</div>}
      {status === 'success' && (
        <ul>
          {data.absence_requests.map((request) => (
            <AbsenceRequest key={request.id} {...request} />
          ))}
        </ul>
      )}
    </div>
  )
};