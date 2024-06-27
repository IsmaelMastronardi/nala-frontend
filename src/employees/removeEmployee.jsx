import { useMutation, useQueryClient } from "react-query";
import { removeEmployee } from "../api/employees/removeEmployee";

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
      <button onClick={() => {onClick()}}>Remove Employee</button>
    </>
  )
};
