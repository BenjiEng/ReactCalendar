class AppointmentsList extends React.Component {
	handleClickEvent(id) {
		this.props.onApptDelete(id);
	}

	render() {
		return (
			<div className='appointments-list'>
				{this.props.appointments.map(function(appointment) {
	    			return (
	    				<Appointment appointment={appointment} 
	    				key={appointment.id} 
	    				handleClickFire={(id) => this.handleClickEvent(id)}/>
					)
	    		}, this)}
    		</div>

		)
	}
}