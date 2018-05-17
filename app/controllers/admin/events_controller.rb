class Admin::EventsController < AdminController
  before_action :authenticate_user!
  before_action :require_admin
  before_action :set_event, only: [:edit, :update]

  def index
    @events = Event.all
    @event = Event.new
  end

  def new
    @event = Event.new
  end

  def edit
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      redirect_to admin_events_path, notice: "Your new event #{@event.name} was saved successfully."
    else
      @errors = @event.errors.full_messages
      render :index
    end
  end

  def update
    if @event.update(event_params)
      redirect_to admin_events_path, notice: "#{@event.name} was successfully updated."
    else
      @errors = @event.errors.full_messages
      render :edit
    end
  end

  protected
  # Use callbacks to share common setup or constraints between actions.
  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:name)
  end
end
