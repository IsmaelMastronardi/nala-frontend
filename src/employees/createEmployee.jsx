import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addEmployee } from "../api/employees/addEmployee";
import { Button, TextField } from "@mui/material";
import { FilterDiv } from "../styled_components/divs";

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
    <div className="full-w flex center gap margin-bottom">
    <Button
        variant="contained"
        color={menuOpen ? "error" : "primary"}
        onClick={() => {setMenuOpen(!menuOpen)}}>{menuOpen ? "Cancel" : "Create Employee"}
      </Button>
      {menuOpen && (
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}>CREATE
      </Button>
      )}
    </div>
      {menuOpen && (
        <FilterDiv>
          <TextField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </FilterDiv>
      )}
    </>
  )
};
