import { useMutation, useQueryClient } from "react-query";
import { removeAbsenceRequest } from "../api/absenceRequests/removeAbsenceRequest";

export const RemoveAbsenceRequest = ({id}) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => removeAbsenceRequest(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("fetchAbsenceRequests");
    }
  });

  const onClick = () => {
    mutate();
  };

  return(
    <>
      <button onClick={() => {onClick()}}>Remove Absence Requests</button>
    </>
  )
};