import { useState } from "react";
import { AbsenceRequestList } from "../absence_requests/absenceRequestsList";
import { CreateAbsenceRequest } from "../absence_requests/createAbsenceRequest";
import { RemoveEmployee } from "./removeEmployee";

export const EmployeeItem = ({name, email, id}) => {
  const [displayOpen, setDisplayOpen] = useState(false);
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{id}</p>
      <button onClick={() => {setDisplayOpen(!displayOpen)}}>{displayOpen ? "Hide Requests" : "Show Requests"}</button>
      <CreateAbsenceRequest id={id} />
      <RemoveEmployee id={id} />
      {displayOpen && <AbsenceRequestList id={id} />}
    </div>
  )
};