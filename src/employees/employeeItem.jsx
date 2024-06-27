import { AbsenceRequestList } from "../absence_requests/absenceRequestsList";
import { RemoveEmployee } from "./removeEmployee";

export const EmployeeItem = ({name, email, id}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{id}</p>
      <AbsenceRequestList id={id} />
      <RemoveEmployee id={id} />
    </div>
  )
};