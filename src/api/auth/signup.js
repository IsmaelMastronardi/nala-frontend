import { NotificationManager } from "react-notifications";
import { baseUrl } from "../apiUrl";

export const signup = async (email, password) => {
  const url = baseUrl + '/signup';

  const response = await fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: { email, password }}),
  });
  if(response.ok){
    const token = response.headers.get('Authorization');
    sessionStorage.setItem('auth_token', token);
    NotificationManager.success('Logged in successfully');
    return response.json();
  }

  if (!response.ok) {
    const errorResponse = await response.json();
    NotificationManager.error(errorResponse.message);
    throw new Error(errorResponse.message);
  }
}
