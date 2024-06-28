import { NotificationManager } from "react-notifications";

const token = sessionStorage.getItem('auth_token');

export const removeAbsenceRequest = async (id) => {
  const url = new URL(`http://localhost:3001/absence_requests/${id}`);

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });

  if(response.ok){
    NotificationManager.success('Absence request removed successfully');
    return response.json();
  }

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
};