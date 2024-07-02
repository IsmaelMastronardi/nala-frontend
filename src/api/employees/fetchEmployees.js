import { baseUrl } from "../apiUrl";

export const fetchEmployees = async (page, nameFilter, emailFilter) => {
  const token = sessionStorage.getItem('auth_token');
  const url = baseUrl + `/employees?page=${page}&name=${nameFilter}&email=${emailFilter}`;

  const response = await fetch(url, {
    headers: {
      'Authorization': token
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
