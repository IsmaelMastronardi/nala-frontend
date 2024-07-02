import { useMutation, useQueryClient } from "react-query";
import { removeEmployee } from "../api/employees/removeEmployee";
import { Button } from "@mui/material";

export const RemoveEmployee = ({id}) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => removeEmployee(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("employees");
    }
  });

  const onClick = () => {
    mutate();
  };

  return(
    <>
      <Button
        variant="outlined"
        color="error"
        onClick={() => {onClick()}}>
          Remove Employee
      </Button>
    </>
  )
};
