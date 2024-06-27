import { RouterProvider } from 'react-router-dom';
import './App.css';
import { EmployeesList } from './employees/employeesList';
import { router } from './Router';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
