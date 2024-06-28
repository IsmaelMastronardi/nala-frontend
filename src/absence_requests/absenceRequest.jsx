import { RemoveAbsenceRequest } from "./removeAbsenceRequest";

export const AbsenceRequest = ({id, start_date, end_date, request_type, reason, status}) => {
  return (
    <div>
      <p>id: {id}</p>
      <p>start date: {start_date}</p>
      <p>end date: {end_date}</p>
      <p>status: {status}</p>
      <p>request type: {request_type}</p>
      <p>reason: {reason}</p>
      <RemoveAbsenceRequest id={id} />
    </div>
  )
};