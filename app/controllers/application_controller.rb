class ApplicationController < ActionController::Base
  include Response
  include ExceptionHandler

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
end
