class UsersController < ApplicationController
  before_action :set_user, only: [:update]
  before_action :require_admin

  # GET /users
  def index
    @users = User.all
    json_response(@users)
  end

  # PUT /users/:id
  def update
    @user.update(user_params)
    head :no_content
  end

  private

  def user_params
    params.permit(:is_admin)
  end

  def set_user
    @user = User.find(params[:id])
  end

  def require_admin
    unless User.find_by(id: session[:user_id]) && User.find_by(id: session[:user_id]).is_admin
      render json: {error: "Unauthorized, you need to be administrator", status: 401}, status: 401
    end
  end
end
