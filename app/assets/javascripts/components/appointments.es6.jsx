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
    debugger
    alert('delete fired');
  }

  render() {
    return (
      <div>
        <AppointmentForm input_title={this.state.title}
          input_appt_time={this.state.appt_time}
          onUserInput={(obj) => this.handleUserInput(obj)}
          onFormSubmit={() => this.handleFormSubmit()} />
        <h2>Your Appointments</h2>
        <AppointmentsList appointments={this.state.appointments} 
                          onApptDelete={this.handleDeleteAppt} />
      </div>
    )
  }
}