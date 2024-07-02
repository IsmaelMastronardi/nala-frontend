import { NotificationManager } from "react-notifications";
import { baseUrl } from "../apiUrl";

const token = sessionStorage.getItem('auth_token');

export const addEmployee = async (name, email) => {
  const url = baseUrl + '/employees';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({name, email})
  });
  if(response.ok){
    NotificationManager.success('Employee added successfully');
    return response.json();
  }
  if (!response.ok) {
    const error = await response.json();
    NotificationManager.error(`Email ${error.email[0]}`);
    throw new Error('Network response was not ok');
  }

};