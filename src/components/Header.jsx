import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="relative">
      <h1 variant="h1" className="header">
        <Link className='header-link' to="/">Winnie's Web App!</Link>
      </h1>
    </AppBar>
  );
};

export default Header;
