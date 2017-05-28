class QueriesController < ApplicationController
  before_action :set_query, only: [:update, :destroy]
  before_action :require_admin, only: [:update, :create, :destroy]
  before_action :require_user, only: [:index]

  # GET /queries
  def index
    @queries = Query.all
    json_response(@queries)
  end

  # POST /queries
  def create
    @query = Query.create!(query_params)
    json_response(@query, :created)
  end

  # PUT /queries/:id
  def update
    @query.update(query_params)
    head :no_content
  end

  # DELETE /queries/:id
  def destroy
    @query.destroy
    head :no_content
  end

  private

  def query_params
    params.permit(:name, :value, items: [])
  end

  def set_query
    @query = Query.find(params[:id])
  end

  def require_admin
    unless User.find_by(id: session[:user_id]).is_admin
      render json: {error: "Unauthorized, you need to be administrator", status: 401}, status: 401
    end
  end

  def require_user
    unless User.find_by(id: session[:user_id])
      render json: {error: "Unauthorized, you need to sign in", status: 401}, status: 401
    end
  end
end
