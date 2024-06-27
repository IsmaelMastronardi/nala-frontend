const token = sessionStorage.getItem('auth_token');

export const fetchEmployees = async (page, nameFilter, emailFilter) => {
  const url = new URL(`http://localhost:3001/employees?page=${page}&name=${nameFilter}&email=${emailFilter}`);

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
