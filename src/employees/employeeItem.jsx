import { AbsenceRequestList } from "../absence_requests/absenceRequestsList";
import { CreateAbsenceRequest } from "../absence_requests/createAbsenceRequest";
import { RemoveEmployee } from "./removeEmployee";

export const EmployeeItem = ({name, email, id}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{id}</p>
      <AbsenceRequestList id={id} />
      <CreateAbsenceRequest id={id} />
      <RemoveEmployee id={id} />
    </div>
  )
};