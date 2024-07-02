import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addAbsenceRequest } from "../api/absenceRequests/addAbsenceRequest";
import { NotificationManager } from "react-notifications";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export const CreateAbsenceRequest = ({id}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [requestType, setRequestType] = useState("");
  const [reason, setReason] = useState("");
  const [requestStatus, setStatus] = useState("");

  const queryClient = useQueryClient();

  const {mutate} = useMutation(() => addAbsenceRequest(
    id,
    startDate,
    endDate,
    requestType,
    reason,
    requestStatus
  ), {
    onSuccess: () => {
      queryClient.invalidateQueries("absence_requests");
    }
  });

  const onClick = () => {    
    if (new Date(startDate) >= new Date(endDate)) {
      NotificationManager.error('End date must be after start date');
      return;
    }

    else if(id && startDate && endDate && requestType && requestStatus){
      mutate();
      setMenuOpen(false);
      setStartDate("");
      setEndDate("");
      setRequestType("");
      setReason("");
      setStatus("");
    }
  }

  return(
    <>
    <Button
      variant="outlined"
      color="primary"
      onClick={() => {setMenuOpen(!menuOpen)}}>
      {menuOpen ? "Cancel" : "Create Request"}
    </Button>
    {menuOpen && (
        <div>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="status-filter-label">Select Request Status</InputLabel>
            <Select
              variant="standard"
              labelId="status-filter-label"
              value={requestStatus}
              onChange={(e) => setStatus(e.target.value)}
              >
              <MenuItem value="" disabled>Select Request Status</MenuItem>
              <MenuItem value="accepted">Accepted</MenuItem>
              <MenuItem value="denied">Denied</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="type-filter-label">Select Type Status</InputLabel>
            <Select
              variant="standard"
              labelId="type-filter-label"
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
            >
              <MenuItem value="" disabled>Select Absence Type</MenuItem>
              <MenuItem value="vacation">Vacation</MenuItem>
              <MenuItem value="incapability">incapability</MenuItem>
            </Select>
          </FormControl>
          <div className="full-w flex">
            <DatePicker
                label="Start Date"
                onChange={(e) => setStartDate(dayjs(e).format('YYYY/MM/DD'))}
                renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
            <DatePicker
              label="End Date"
              onChange={(e) => setEndDate(dayjs(e).format('YYYY/MM/DD'))}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
          </div>
          <TextField
            fullWidth
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Reason"
          />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {onClick()}}
            >Create
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {setMenuOpen(false)}}
            >
              Cancel
            </Button>
        </div>
      )}
    </>
  )
};