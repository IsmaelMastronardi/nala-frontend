import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { editAbsenceRequest } from "../api/absenceRequests/editAbsenceRequest";
import { useMutation, useQueryClient } from "react-query";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { ButtonPair } from "../styled_components/buttons";

export const EditAbsenceRequest = ({toggleEditMenu, id, start_date, end_date, request_type, reason, status}) => {
  const queryClient = useQueryClient();
  const [startDate, setStartDate] = useState(start_date);
  const [endDate, setEndDate] = useState(end_date);
  const [requestType, setRequestType] = useState(request_type);
  const [absenceReason, setReason] = useState(reason);
  const [requestStatus, setStatus] = useState(status);

  const onClick = () => {
    mutate();
  }

  const {mutate} = useMutation(
    () => editAbsenceRequest(id, startDate, endDate, requestType, absenceReason, requestStatus),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("absence_requests");
      }
    }
  );
    

  return(
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
          <MenuItem value="rejected">Denied</MenuItem>
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
            value={dayjs(startDate, 'YYYY/MM/DD')}
            onChange={(e) => setStartDate(dayjs(e).format('YYYY/MM/DD'))}
            renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />
        <DatePicker
          label="End Date"
          value={dayjs(endDate, 'YYYY/MM/DD')}
          onChange={(e) => setEndDate(dayjs(e).format('YYYY/MM/DD'))}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />
      </div>
      <TextField
        fullWidth
        type="text"
        value={absenceReason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Reason"
      />
      <ButtonPair>
        <Button
            variant="outlined"
            color="primary"
            onClick={() => {onClick()}}
          >Update
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {toggleEditMenu(false)}}
          >
            Cancel
          </Button>
      </ButtonPair>
    </div>
  )
};