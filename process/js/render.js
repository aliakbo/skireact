var React = require('react');
var ReactDOM = require('react-dom');
var SkiDayCount = require('./components/SkiDayCount');

window.React = React

ReactDOM.render(
	<SkiDayCount total={50}
				 powder={20}
				 backcountry={10}
				 goal={100}/>,
	document.getElementById('react-container')
)