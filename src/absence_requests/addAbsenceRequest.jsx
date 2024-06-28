import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addAbsenceRequest } from "../api/absenceRequests/addAbsenceRequest";

export const AddAbsenceRequest = ({id}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [requestType, setRequestType] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("");

  const queryClient = useQueryClient();

  const {mutate} = useMutation(() => addAbsenceRequest(
    id,
    startDate,
    endDate,
    requestType,
    reason,
    status
  ), {
    onSuccess: () => {
      queryClient.invalidateQueries("fetchAbsenceRequests");
    }
  });

  const onClick = () => {
    if(id && startDate && endDate && requestType && status){
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
    <button onClick={() => {setMenuOpen(!menuOpen)}}>Create Absence Request</button>
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
          <option value="sickness">Inability</option>
        </select>
        <select
          value={status}
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