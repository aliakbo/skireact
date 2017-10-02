var React = require('react');
var ReactDOM = require('react-dom');
var { Switch, HashRouter, Route } = require('react-router-dom');

var App = require('./components/App');
var Whoops404 = require('./components/Whoops404');
var History = require('history');

window.React = React;

var C = require('./data/constants');
var { singleReducer } = require('./data/reducers');
var initialState = require('../../data/initialState.json');

var state = initialState;

console.log(`

	Initial state
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`)

state = singleReducer(state, {
	type: C.SET_GOAL,
	payload:2
})

state = singleReducer(state, {
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})

state = singleReducer(state, {
	type: C.CHANGE_SUGGESTIONS,
	payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
})


console.log(`

	Next state
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`)


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