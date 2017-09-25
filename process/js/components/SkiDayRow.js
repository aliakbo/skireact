var React = require('react');

var Terrain = require('react-icons/lib/md/terrain');
var SnowFlake = require('react-icons/lib/ti/weather-snow');
var Calendar =  require('react-icons/lib/fa/calendar');

class SkiDayRow extends React.Component{
    render() {
		return (
            <tr>
            <td>
                {this.props.date.getMonth()+1}/{this.props.date.getDate()}/
                {this.props.date.getFullYear()}
            </td>
            <td>
                {this.props.resort}
            </td>
            <td>
                {(this.props.powder) ? <SnowFlake/> : null}
            </td>
            <td>
                {(this.props.backcountry) ? <Terrain /> : null}
            </td>
        </tr>		
        )
    }
}

module.exports = SkiDayRow;