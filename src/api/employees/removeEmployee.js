import { NotificationManager } from "react-notifications";
import { baseUrl } from "../apiUrl";

const token = sessionStorage.getItem('auth_token');

export const removeEmployee = async (id) => {
  const url = baseUrl + `employees/${id}`;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });

  if(response.ok){
    NotificationManager.success('Employee removed successfully');
    return response.json();
  }

  if (!response.ok) {
    NotificationManager.error('Failed to remove employee');
    throw new Error('Network response was not ok');
  }
};