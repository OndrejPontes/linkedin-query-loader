class SessionsController < ApplicationController
  def create
    @user = User.from_omniauth(request.env['omniauth.auth'])
    session[:user_id] = @user.id
    puts "Welcome, #{@user.name}!"
    redirect_to root_path
  end

  def destroy
    if current_user
      session.delete(:user_id)
      puts 'See you!'
    end
    redirect_to root_path
  end
end