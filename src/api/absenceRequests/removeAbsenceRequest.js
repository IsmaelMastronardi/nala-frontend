import { NotificationManager } from "react-notifications";
import { baseUrl } from "../apiUrl";

const token = sessionStorage.getItem('auth_token');

export const removeAbsenceRequest = async (id) => {
  const url = baseUrl + `absence_requests/${id}`;

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