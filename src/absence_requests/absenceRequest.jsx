import { Button, Typography } from "@mui/material";
import { RequestItem } from "../styled_components/lists";
import { EditAbsenceRequest } from "./editAbsenceRequest";
import { RemoveAbsenceRequest } from "./removeAbsenceRequest";
import { useState } from "react";
import { ButtonPair } from "../styled_components/buttons";

export const AbsenceRequest = ({id, start_date, end_date, request_type, reason, status}) => {
  const [editMenuOpen, setEditMenuOpen] = useState(false);
  const toggleEditMenu = () => {
    setEditMenuOpen(!editMenuOpen);
  }
  return (
    <RequestItem>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
      >Start date: {start_date} - End date: {end_date}</Typography>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
      >Status: {status} - Request type: {request_type}</Typography>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
      >Reason:</Typography>
      <p> {reason || 'No reason given'}</p>
      <ButtonPair>
        <RemoveAbsenceRequest id={id} />
        <Button
          variant="contained"
          color="primary"
          onClick={toggleEditMenu}
        >
        {editMenuOpen ? "Cancel" : "Edit"}
        </Button>
      </ButtonPair>
      {editMenuOpen && (
        <>
        <EditAbsenceRequest toggleEditMenu={toggleEditMenu} id={id} start_date={start_date} end_date={end_date} request_type={request_type} reason={reason} status={status} />
        </>
      )}
    </RequestItem>
  )
};