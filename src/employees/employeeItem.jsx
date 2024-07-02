import { useState } from "react";
import { AbsenceRequestList } from "../absence_requests/absenceRequestsList";
import { CreateAbsenceRequest } from "../absence_requests/createAbsenceRequest";
import { RemoveEmployee } from "./removeEmployee";
import { Button } from "@mui/material";
import { CardItem } from "../styled_components/lists";

export const EmployeeItem = ({name, email, id}) => {
  const [displayOpen, setDisplayOpen] = useState(false);
  return (
    <CardItem>
      <h2>{name}</h2>
      <p>{email}</p>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {setDisplayOpen(!displayOpen)}}>
          {displayOpen ? "Hide Requests" : "Show Requests"}
        </Button>
      </div>
      <div className="">
        <RemoveEmployee id={id} />
        <CreateAbsenceRequest id={id} />
      </div>
      {displayOpen && <AbsenceRequestList id={id} />}
    </CardItem>
  )
};