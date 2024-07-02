import { baseUrl } from "../apiUrl";

export const fetchAbsenceRequsts = async (page, id, status, start_date, end_date, request_type) => {
  const token = sessionStorage.getItem('auth_token');
  let employee = ''
  if(id){
    employee = `employees/${id}/`
  }
  const url = baseUrl + `${employee}absence_requests?page=${page}&status=${status}&start_date=${start_date}&end_date=${end_date}&request_type=${request_type}`

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
