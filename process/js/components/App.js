var React = require('react');

var SkiDayList = require('./SkiDayList');
var SkiDayCount = require('./SkiDayCount');
var AddDayForm = require('./AddDayForm');
var Menu = require('./Menu');

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            allSkiDays : 
            [
                {
                    resort: "Squaw Valley",
                    date: "2016-01-02",
                    powder: true,
                    backcountry: false
                }
            ]
        }
        this.addDay = this.addDay.bind(this);
    }

    addDay(newDay) {
        this.setState({
            allSkiDays: [
                newDay,
                ...this.state.allSkiDays
            ]
        })
    }

    countDays(filter) {
        return this.state.allSkiDays.filter(function(day) {
            if(filter){
                return day[filter];
            }
            else {
                return day;
            }
        }).length;
    }

    render() {
        return(
            <div className="app">
                <Menu />
                {(this.props.location.pathname === "/") ?
                    <SkiDayCount total={this.countDays()}
                                powder={this.countDays("powder")}
                                backcountry={this.countDays("backcountry")}/>:
                    ((this.props.location.pathname === "/add-day") ? 
                        <AddDayForm onNewDay={this.addDay}/> :
                        <SkiDayList days={this.state.allSkiDays}
                                    filter={this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1)}/>) 
                }
                
            </div>
        ) 
    }

}

module.exports = App;