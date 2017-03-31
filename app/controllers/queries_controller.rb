class QueriesController < ApplicationController
  before_action :set_query, only: [:show, :update, :destroy]

  # GET /queries
  def index
    @queries = Query.all
    json_response(@queries)
  end

  # GET /queries/:id
  def show
    json_response(@query)
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
    params.permit(:name, :value, keys: [])
  end

  def set_query
    @query = Query.find(params[:id])
  end
end
