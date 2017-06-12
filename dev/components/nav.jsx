import React from 'react';
import NavLink from 'react-router-dom';


class Nav extends React.Component {
    render() {
        return (
            <div>
                <NavLink activeClassName='avtive' to='/'>Home</NavLink>
                <NavLink activeClassName='avtive' to='/solarSystem'>Solar System</NavLink>
            </div>
        )
    }
}

export default Nav;