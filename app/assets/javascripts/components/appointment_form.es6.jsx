class AppointmentForm extends React.Component {
	handleChange(e) {
		const name = e.target.name;
		obj = {};
		obj[name] = e.target.value;
		this.props.onUserInput(obj);
	}

	setApptTime(e) {
		const name = 'appt_time';
		const obj = {};
		if (obj[name] = e.toDate()) {
			this.props.onUserInput(obj);
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onFormSubmit();
	}

	render() {
		const inputProps = {
			name: 'appt_time'
		};

		return (
		  		<div>
		    	<h2>Make a new appointment</h2>
		    	<Label label='Enter a new title, date, and time.'/>
		    	<form onSubmit={this.handleSubmit.bind(this)}>
		      		<input name='title' placeholder='Appointment Title'
		        		value={this.props.title}
		        		onChange={this.handleChange.bind(this)} 
		        		required={true}/>
		      		<Datetime input={false} open={true} inputProps={inputProps}
		      			value={this.props.appt_time} 
		      			onChange={this.setApptTime.bind(this)} />
		      		<input type='submit' value='Make Appointment' className='action-button shadow animate blue'/>
		    	</form>        
	  		</div>
		)
	}
}