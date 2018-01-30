class Appointment extends React.Component {
	handleClick(e) {
		var id = e.target.getAttribute('value');
		this.props.handleClickFire(id);
	}

	render() {
		return (
			<div className='appointment'>
				<h3 className='appointment-title'>{this.props.appointment.title}</h3>
				<p className='appointment-time'>{formatDate(this.props.appointment.appt_time)}</p>
				<button className="button" onClick={(e)=>this.handleClick(e)}>
					<span>Delete</span>
					<div className="icon" value={this.props.appointment.id}>
						<i className="fa fa-remove"></i>
					</div>
				</button>
			</div>
		)
	}
}