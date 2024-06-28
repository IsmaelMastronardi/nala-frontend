import { NotificationManager } from "react-notifications";

const token = sessionStorage.getItem('auth_token');

export const addAbsenceRequest = async (id, startDate, endDate, requestType, reason, status) => {
  const url = new URL(`http://localhost:3001/employees/${id}/absence_requests`);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({
      start_date: startDate,
      end_date: endDate,
      request_type: requestType,
      reason: reason,
      status: status
    })
  });

  if(response.ok){
    NotificationManager.success('Absence request added successfully');
    return response.json();
  }

  if (!response.ok) {
    NotificationManager.error('Network response was not ok');
    throw new Error('Network response was not ok');
  }
};