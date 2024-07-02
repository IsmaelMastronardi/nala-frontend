import { useMutation, useQueryClient } from "react-query";
import { removeAbsenceRequest } from "../api/absenceRequests/removeAbsenceRequest";
import { Button } from "@mui/material";

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
      <Button
        variant="contained"
        color="error"
        onClick={() => {onClick()}}>
        Remove
      </Button>
    </>
  )
};