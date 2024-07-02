import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RouterProvider router={router} />
        <NotificationContainer />
      </LocalizationProvider>
    </>
  );
}

export default App;
