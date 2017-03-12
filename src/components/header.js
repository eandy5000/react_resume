import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            Header <br/>
            <Link to="/one">one </Link>
        </div>
    );
};

export default Header;
