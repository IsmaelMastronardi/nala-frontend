import { NotificationManager } from "react-notifications";

const token = sessionStorage.getItem('auth_token');

export const removeEmployee = async (id) => {
  const url = new URL(`http://localhost:3001/employees/${id}`);

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