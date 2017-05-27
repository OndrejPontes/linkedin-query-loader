class UsersController < ApplicationController
  before_action :set_user, only: [:update]

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
end
