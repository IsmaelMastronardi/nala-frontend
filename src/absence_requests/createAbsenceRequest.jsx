import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addAbsenceRequest } from "../api/absenceRequests/addAbsenceRequest";
import { EmployeesFilters } from "../employees/employeesFilters";
import { fetchEmployees } from "../api/employees/fetchEmployees";

export const CreateAbsenceRequest = ({id}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [requestType, setRequestType] = useState("");
  const [reason, setReason] = useState("");
  const [requestStatus, setStatus] = useState("");

  const queryClient = useQueryClient();

  const {mutate} = useMutation(() => addAbsenceRequest(
    id,
    startDate,
    endDate,
    requestType,
    reason,
    requestStatus
  ), {
    onSuccess: () => {
      queryClient.invalidateQueries("fetchAbsenceRequests");
    }
  });

  const onClick = () => {
    if(id && startDate && endDate && requestType && requestStatus){
      mutate();
      setMenuOpen(false);
      setStartDate("");
      setEndDate("");
      setRequestType("");
      setReason("");
      setStatus("");
    }
  }

  return(
    <>
    <button onClick={() => {setMenuOpen(!menuOpen)}}>{menuOpen ? "Cancel" : "Create Request"}</button>
    {menuOpen && (
        <div>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Start Date"
          />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="End Date"
        />
        <select
          value={requestType}
          onChange={(e) => setRequestType(e.target.value)}
          placeholder="Absence Type"
        >
          <option value="" disabled>Select Absence Type</option>
          <option value="vacation">Vacation</option>
          <option value="incapability">incapabilityf</option>
        </select>
        <select
          value={requestStatus}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Request Status"
        >
          <option value="" disabled>Select Request Status</option>
          <option value="accepted">Accepted</option>
          <option value="denied">Denied</option>
        </select>
        <input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason"
        />
          <button onClick={() => {onClick()}}>Create</button>
        </div>
      )}
    </>
  )
};