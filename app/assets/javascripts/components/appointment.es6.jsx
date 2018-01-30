class Appointment extends React.Component {
	handleClick(e) {
		var id = e.target.value;
		this.props.handleClickFire(id);
	}

	render() {
		return (
			<div className='appointment'>
				<h3>{this.props.appointment.title}</h3>
				<p>{formatDate(this.props.appointment.appt_time)}</p>
				<button value={this.props.appointment.id} onClick={(e)=>this.handleClick(e)}>Delete</button>
			</div>
		)
	}
}