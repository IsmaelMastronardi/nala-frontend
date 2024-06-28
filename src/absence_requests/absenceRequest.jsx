import { RemoveAbsenceRequest } from "./removeAbsenceRequest";

export const AbsenceRequest = ({id, start_date, end_date, request_type, reason, status}) => {
  return (
    <div>
      <p>{id}</p>
      <p>{start_date}</p>
      <p>{end_date}</p>
      <p>{status}</p>
      <RemoveAbsenceRequest id={id} />
    </div>
  )
};