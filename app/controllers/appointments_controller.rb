class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('appt_time ASC')
    @appointment = Appointment.new
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @appointment = Appointment.find_by_id(params[:id])
    @copy = @appointment
    @appointment.destroy
    render json: @copy
  end


  private
  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end