var React = require('react');
var { Link } = require('react-router-dom');
var HomeIcon = require('react-icons/lib/fa/home');
var AddDayIcon = require('react-icons/lib/fa/calendar-plus-o');
var ListDaysIcon = require('react-icons/lib/fa/table');

class Menu extends React.Component{
    render() {
        return (
            <nav className="menu">
            <Link to="/">
                <HomeIcon />
            </Link>
            <Link to="/add-day">
                <AddDayIcon />
            </Link>
            <Link to="/list-days">
                <ListDaysIcon />
            </Link>
        </nav>
        )
    }
}

module.exports = Menu;