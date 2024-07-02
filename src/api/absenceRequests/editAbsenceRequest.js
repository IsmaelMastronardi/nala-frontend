import { NotificationManager } from "react-notifications";

export const editAbsenceRequest = async (id, startDate, endDate, requestType, reason, status) => {
  const token = sessionStorage.getItem('auth_token');
  const url = new URL(`http://localhost:3001/absence_requests/${id}`);

  const response = await fetch(url, {
    method: 'PATCH',
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
    NotificationManager.success('Absence request edited successfully');
    return response.json();
  }

  if (!response.ok) {
    NotificationManager.error('Network response was not ok');
    throw new Error('Network response was not ok');
  }
};