var React = require('react');
var PropTypes = React.PropTypes;

var Terrain = require('react-icons/lib/md/terrain');
var SnowFlake = require('react-icons/lib/ti/weather-snow');
var Calendar =  require('react-icons/lib/fa/calendar');

class SkiDayRow extends React.Component{
    render() {
		return (
            <tr>
            <td>
                {this.props.date}
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

SkiDayRow.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool,
	backcountry: PropTypes.bool
}


module.exports = SkiDayRow;