import { AbsenceRequestList } from "../absence_requests/absenceRequestsList";
import { AddAbsenceRequest } from "../absence_requests/addAbsenceRequest";
import { RemoveEmployee } from "./removeEmployee";

export const EmployeeItem = ({name, email, id}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{id}</p>
      <AbsenceRequestList id={id} />
      <AddAbsenceRequest id={id} />
      <RemoveEmployee id={id} />
    </div>
  )
};