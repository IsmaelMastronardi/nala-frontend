import { RemoveEmployee } from "./removeEmployee";

export const EmployeeItem = ({name, email, id}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{id}</p>
      <RemoveEmployee id={id} />
    </div>
  )
};