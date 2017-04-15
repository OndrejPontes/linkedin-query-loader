class SessionsController < ApplicationController
  def create
    @user = User.from_omniauth(request.env['omniauth.auth'])
    session[:user_id] = @user.id
    puts "Welcome, #{@user.name}!"
    redirect_to root_path
  end
end