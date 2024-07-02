import { useQuery } from "react-query";
import { AbsenceRequest } from "./absenceRequest";
import { useState } from "react";
import { fetchAbsenceRequsts } from "../api/absenceRequests/fetchAbsenceRequests";
import { Pagination } from "../pagination";
import { CircularProgress } from "@mui/material";
import { RequestList } from "../styled_components/lists";

export const AbsenceRequestList = ({id}) => {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const {status, error, data} = useQuery(
    ["absence_requests",id, page],
    () => fetchAbsenceRequsts( page, id, statusFilter, startDateFilter, endDateFilter, typeFilter),
    {retry: false}
  );

  if (status === "loading") {
    return <CircularProgress />;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  if(data.absence_requests.length === 0){
    return <p>No absence requests found</p>
  }

  return (
    <div>
      <h4>Absence Requests</h4>
      {status === "success" &&(    
        <>
          <RequestList>
            {data.absence_requests.map((request) => (
              <AbsenceRequest key={request.id} {...request} />
            ))}
          </RequestList>
          <Pagination
          currentPage={data.pagy.current_page}
          totalPages={data.pagy.pages}
          handlePageChange={handlePageChange}
          />
        </>
      )}
    </div>
  )
};