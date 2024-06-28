import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <NotificationContainer />
    </>
  );
}

export default App;
