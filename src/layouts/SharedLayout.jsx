import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default SharedLayout;