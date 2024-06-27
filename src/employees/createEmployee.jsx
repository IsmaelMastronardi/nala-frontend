import { useState } from "react";
import { useQuery } from "react-query";
import { addEmployee } from "../api/employees/addEmployee";

export const CreateEmployee = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {error, status, data, refetch} = useQuery(
    ["addEmployee", name, email],
    () => addEmployee(name, email),
    {
      enabled: false,
      retry: false
    }
  );

  const onClick = () => {
    if(name && email){
      refetch();
    }
  }

  return(
    <>
      <button onClick={() => {setMenuOpen(!menuOpen)}}>Create Employee</button>
      {menuOpen && (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <button onClick={() => {onClick()}}>Create</button>
        </div>
      )}
    </>
  )
};
