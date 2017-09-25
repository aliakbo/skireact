var React = require('react');

var Terrain = require('react-icons/lib/md/terrain');
var SnowFlake = require('react-icons/lib/ti/weather-snow');
var Calendar =  require('react-icons/lib/fa/calendar');

var SkiDayRow = require('./SkiDayRow');

class SkiDayList extends React.Component{
    render() {
        return (
            <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Resort</th>
                    <th>Powder</th>
                    <th>Backcountry</th>
                </tr>
            </thead>
            <tbody>
                {this.props.days.map((day, i) =>
                    <SkiDayRow key={i}
                            {...day}/>	
                    )}
            </tbody>

            </table>		
        )
    }
}

module.exports = SkiDayList;