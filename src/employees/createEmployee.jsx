import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addEmployee } from "../api/employees/addEmployee";

export const CreateEmployee = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const queryClient = useQueryClient();

  const {mutate} = useMutation(() => addEmployee(name, email), {
    onSuccess: () => {
      queryClient.invalidateQueries("employees");
    }
  });

  const onClick = () => {
    if(name && email){
      mutate();
      setName("");
      setEmail("");
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
