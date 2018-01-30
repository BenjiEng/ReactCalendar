class Appointments extends React.Component{

  constructor(props) {
    super(props) //calls the constructor of the parent class
    this.state = {
      appointments: this.props.appointments,
      title: '',
      appt_time: ''
    }
  }

  handleUserInput(obj) {
    this.setState(obj);
  }

  handleFormSubmit() {
    const appointment = {title: this.state.title, appt_time: this.state.appt_time};
    $.post('/appointments',
            {appointment: appointment})
          .done((data)=> {
            this.addNewAppointment(data);
          });
  }

  addNewAppointment(appointment) {
    const appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  }

  handleDeleteAppt(id) {
    $.ajax({
      method: 'DELETE',
      url: '/appointments/' + parseInt(id),
      success: (data) => this.removeDeletedAppointment(data)
    });
  }

  removeDeletedAppointment(appointment) {
    var array = this.state.appointments;
    var index = array.indexOf(appointment);
    array.splice(index, 1);
    this.setState({appointments: array.sort(function(a,b){
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  }

  render() {
    return (
      <div>
        <AppointmentForm input_title={this.state.title}
          input_appt_time={this.state.appt_time}
          onUserInput={(obj) => this.handleUserInput(obj)}
          onFormSubmit={() => this.handleFormSubmit()} />
        <h2 className='appointments-header'>Your Appointments</h2>
        <AppointmentsList appointments={this.state.appointments} 
                          onApptDelete={(id) => this.handleDeleteAppt(id)} />
      </div>
    )
  }
}