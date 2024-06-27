import { useState } from "react";
import { useQuery } from "react-query";
import { removeEmployee } from "../api/employees/removeEmployee";

export const RemoveEmployee = ({id}) => {
  const {error, status, data, refetch} = useQuery(
    ["removeEmployee", id],
    () => removeEmployee(id),
    {
      enabled: false,
      retry: false
    }
  );

  return(
    <>
      <button onClick={() => {refetch()}}>Remove Employee</button>
    </>
  )
};
