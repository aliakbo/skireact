var React = require('react');
var ReactDOM = require('react-dom');
var { Switch, HashRouter, Route } = require('react-router-dom');

var App = require('./components/App');
var Whoops404 = require('./components/Whoops404');
var History = require('history');

window.React = React;


ReactDOM.render(
	//<SkiDayCount />,
	<HashRouter>
		<Switch>
			<Route path="/" component={App}/>
			<Route path="list-days/" component={App}>
				<Route path=":filter" component={App}/>
			</Route>
			<Route path="add-day" component={App}/>
			<Route path="*" component={Whoops404}/>
		</Switch>
	</HashRouter>,
	document.getElementById('react-container')
)