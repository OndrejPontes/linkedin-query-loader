class SessionsController < ApplicationController
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
    # redirect_to root_path
  end
end