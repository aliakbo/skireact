var C = require('./constants');
var { combineReducers } = require('redux');

const goal = (state=10, action) => 
	(action.type === C.SET_GOAL) ? 
		 parseInt(action.payload) :
		 state

const skiDay = (state=null, action) => 
  (action.type === C.ADD_DAY) ?
  	action.payload :
  	state

const errors = (state=[], action) => {
  switch(action.type) {
    case C.ADD_ERROR :
    	return [
        action.payload,
         ...state
    	]
    case C.CLEAR_ERROR : 
      return state.filter((message, i) => i !== action.payload)
  	default: 
  		return state
  }
}

const allSkiDays = (state=[], action) => {

  switch(action.type) {

    case C.ADD_DAY : 

      const hasDay = state.some(skiDay => skiDay.date === action.payload.date)

      return (hasDay) ?
         state :
         [
          skiDay(null, action),
           ...state  
         ].sort((a, b) => new Date(b.date) - new Date(a.date))

    case C.REMOVE_DAY :

      return state.filter(skiDay => skiDay.date !== action.payload)     

    default:
      return state
  }

}

const fetching = (state=[], action) => {
  switch (action.type) {
    case C.FETCH_RESORT_NAMES :
      return true;
    case C.CANCEL_FETCHING :
      return false;
    case C.CHANGE_SUGGESTIONS :
      return false;
    default:
      return state 
  }
}

const suggestions = (state=[], action) => {
  switch (action.type) {
    case C.CLEAR_SUGGESTIONS :
      return [];
    case C.CHANGE_SUGGESTIONS :
      return action.payload;
    default:
      return state 
  }
}

const singleReducer = combineReducers({
  allSkiDays,
  goal,
  errors,
  resortNames : combineReducers({
    fetching,
    suggestions
  })
})

module.exports = {
  goal,
  skiDay,
  errors,
  allSkiDays,
  fetching,
  suggestions,
  singleReducer
}