class SessionsController < ApplicationController
  before_action :require_user, only: [:logout]

  def create
    @user = User.from_omniauth(request.env['omniauth.auth'])
    session[:user_id] = @user.id
    redirect_to root_path, only_path: true
  end

  def current_user
    json_response(User.find_by(id: session[:user_id]))
  end

  def logout
    session.delete(:user_id)
  end

  private

  def require_user
    unless User.find_by(id: session[:user_id])
      render json: {error: "Unauthorized, you need to sign in", status: 401}, status: 401
    end
  end
end