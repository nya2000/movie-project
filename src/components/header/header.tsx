import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Authorization from 'src/components/authorization/authorization';
import { ROUTER_PATH } from 'src/shared/const';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='header_container'>
                    <Link to={ROUTER_PATH.HOME}>
                        <Button variant='outlined'>Home</Button>
                    </Link>
                    <Link to={ROUTER_PATH.SEARCH}>
                        <Button variant='outlined'>Search</Button>
                    </Link>
                    <Authorization />
                </div>
            </div>
        </header>
    );
};

export default Header;
