var React = require('react');
var PropTypes = React.PropTypes;
var { Link } = require('react-router-dom');

var Terrain = require('react-icons/lib/md/terrain');
var SnowFlake = require('react-icons/lib/ti/weather-snow');
var Calendar =  require('react-icons/lib/fa/calendar');

var SkiDayRow = require('./SkiDayRow');


class SkiDayList extends React.Component{
    render() {
        var filteredDays = (!this.props.filter || 
            !this.props.filter.match(/powder|backcountry/))?
            this.props.days:
            this.props.days.filter(day => day[this.props.filter]);

        return (
            <div className="ski-day-list">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Resort</th>
                            <th>Powder</th>
                            <th>Backcountry</th>
                        </tr>
                        <tr>
                            <td colSpan={4}>
                                <Link to="/list-days">
                                    All Days
                                </Link>
                                <Link to="/list-days/powder">
                                    Powder Days
                                </Link>
                                <Link to="/list-days/backcountry">
                                    Backcountry Days
                                </Link>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDays.map((day, i) =>
                            <SkiDayRow key={i}
                                    {...day}/>	
                            )}
                    </tbody>

                </table>
            </div>
        )
    }
}

SkiDayList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"SkiDayList should be an array"	
				)
		} else if(!props.days.length) {
			return new Error(
				"SkiDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}



module.exports = SkiDayList;