var React  = require('react');
var PropTypes = React.PropTypes;


class Autocomplete extends React.Component {
	
	get value() {
        console.log("get " + this.refs.resort.value)
		return this.refs.resort.value
	}

	set value(inputValue) {
        console.log("set " + this.refs.resort.value)
		this.refs.resort.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="resort"
					   type="text" 
					   list="tahoe-resorts" />
				<datalist id="tahoe-resorts">
					{this.props.options.map(
						(opt, i) => 
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}

class AddDayForm extends React.Component{

    constructor(props) {
		super(props);
        this.submit = this.submit.bind(this);

        this.state = {
            tahoeResorts : [
                "Alpine Meadows",
                "Boreal",
                "Diamond Peak",
                "Donner Ski Ranch", 
                "Heavenly", 
                "Homewood",
                "Kirkwood",
                "Mt. Rose", 
                "Northstar",
                "Squaw Valley",
                "Sugar Bowl"
            ]
        }
    }
    
	submit(e) {
		e.preventDefault();

		this.props.onNewDay({
			resort: this.refs.resort.value,
			date: this.refs.date.value,
			powder: this.refs.powder.checked,
			backcountry: this.refs.backcountry.checked
        })
        /*
		this.props.resort.value = '' 
		this.props.date.value = ''
		this.props.powder.checked = false
        this.props.backcountry.checked = false
        */
    }
    
    render() {
        const { resort, date, powder, backcountry, onNewDay } = this.props ;
        
        return (
            <form onSubmit={this.submit} className="add-day-form">

                <label htmlFor="resort">Resort Name</label>
                <Autocomplete options={this.state.tahoeResorts}
                        ref="resort"/>

                <label htmlFor="date">Date</label>
                <input id="date" 
                        type="date" 
                        required 
                        defaultValue={date}
                        ref="date"/>

                <div>
                    <input id="powder" 
                            type="checkbox" 
                            defaultChecked={powder}	
                            ref="powder"/>
                    <label htmlFor="powder">Powder Day</label>
                </div>

                <div>	
                    <input id="backcountry" 
                            type="checkbox"
                            defaultChecked={backcountry} 
                            ref="backcountry"/>
                    <label htmlFor="backcountry">
                        Backcountry Day
                    </label>
                </div>
                <button>Add Day</button>
            </form>
        )
    }
}

AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-12",
	powder: true,
	backcountry: false
}


AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}

module.exports = AddDayForm;