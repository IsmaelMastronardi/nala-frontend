export const login = async (email, password) => {
  const url = new URL("http://localhost:3001/login");

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
    console.log('TOKEN', token);
    console.log('SESSION', sessionStorage.getItem('auth_token'));
  }

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }

  return response.json();
}
