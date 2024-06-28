const token = sessionStorage.getItem('auth_token');

export const fetchAbsenceRequsts = async (page, id, status, start_date, end_date, request_type) => {
  let employee = ''
  if(id){
    employee = `employees/${id}/`
  }
  const url = new URL(
    `http://localhost:3001/${employee}absence_requests?page=${page}&status=${status}&start_date=${start_date}&end_date=${end_date}&request_type=${request_type}`
  );

  const response = await fetch(url, {
    headers: {
      'Authorization': token
    }
  });

  console.log('fetching')

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
