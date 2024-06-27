const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiZGVlYzNhYi1mZmM3LTRlMTgtODFlZS02YWM0MWQzMTAzNWYiLCJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzE5NDYwNTQyLCJleHAiOjE3MTk0NjIzNDJ9.HvBquhuLb5Ra8ohbcRBE2o7vgm5ZHM7gbVTj1Wf8uDY';

export const fetchEmployees = async (page, nameFilter) => {
  const url = new URL("http://localhost:3001/employees");
  if (nameFilter) {
    url.searchParams.append("name", nameFilter);
  }

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}