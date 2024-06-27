import { useQuery } from "react-query";
import { AbsenceRequest } from "./absenceRequest";
import { useState } from "react";
import { fetchAbsenceRequsts } from "../api/absenceRequests/fetchAbsenceRequests";

export const AbsenceRequestList = ({id}) => {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  
  const {status, error, data} = useQuery(
    ["fetchAbsenceRequests",id, page],
    () => fetchAbsenceRequsts( page, id, statusFilter, startDateFilter, endDateFilter, typeFilter),
    {retry: false}
  );

  if(status === "success"){console.log('SUCCESS',data)}
  if(status === "error"){console.log('ERROR',error)}

  return (
    <div>
      <h4>Absence Requests</h4>
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>Error: {error.message}</p>}
      {status === "success" &&(
        <ul>
        {data.absence_requests.map((request) => (
          <AbsenceRequest key={request.id} {...request} />
        ))}
      </ul>
      )}
    </div>
  )
};