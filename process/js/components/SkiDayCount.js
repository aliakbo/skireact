var React = require('react');
var PropTypes = React.PropTypes;

var Terrain = require('react-icons/lib/md/terrain');
var SnowFlake = require('react-icons/lib/ti/weather-snow');
var Calendar =  require('react-icons/lib/fa/calendar');

class SkiDayCount extends React.Component{
	percentToDecimal(decimal) {
		return ((decimal * 100) + '%')
	}
	calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	}
	render() {
		return (
			<div className="ski-day-count">
				<div className="total-days">
					<span>{this.props.total}</span>
						<Calendar />
					<span>days</span>
				</div>
				<div className="powder-days">
					<span>{this.props.powder}</span>
					 <SnowFlake />
					<span>days</span>
				</div>
				<div className="backcountry-days">
					<span>{this.props.backcountry}</span>
						<Terrain />
					<span>days</span>
				</div>
				<div>
					<span>
						{this.calcGoalProgress(
							this.props.total, 
							this.props.goal
						)}
					</span>
				</div>
			</div>
		)
	}
}

SkiDayCount.defaultProps = {
	total : 50, 
	powder: 10,
	backcountry: 15,
	goal: 75
}

SkiDayCount.propTypes = {
	total: PropTypes.number,
	powder: PropTypes.number,
	backcountry: PropTypes.number,
	goal: PropTypes.number
  }
  

module.exports = SkiDayCount;