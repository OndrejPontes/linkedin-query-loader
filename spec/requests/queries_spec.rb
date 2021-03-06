require 'rails_helper'

RSpec.describe 'Query API', type: :request do
  # initialize test data
  let!(:query) { create(:query) }
  let(:query_id) { query.id }
  let!(:queries) { create_list(:query, 10) }

  # Test suite for GET /queries
  describe 'GET /queries' do
    # make HTTP get request before each example
    before { get '/queries' }

    it 'returns queries' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(11)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /queries/:id
  describe 'GET /queries/:id' do
    before { get "/queries/#{query_id}" }

    context 'when the record exists' do
      it 'returns the query' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(query_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:query_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Query/)
      end
    end
  end

  # Test suite for POST /queries
  describe 'POST /queries' do
    # valid payload
    let(:valid_attributes) { { name: '.NET', value: '.NET' } }

    context 'when the request is valid' do
      before { post '/queries', params: valid_attributes }

      it 'creates a query' do
        expect(json['name']).to eq('.NET')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/queries', params: { name: '.NET' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
            .to match(/Validation failed: Value can't be blank/)
      end
    end
  end

  # Test suite for PUT /queries/:id
  describe 'PUT /queries/:id' do
    let(:valid_attributes) { { name: 'Changed' } }

    context 'when the record exists' do
      before { put "/queries/#{query_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Test suite for DELETE /queries/:id
  describe 'DELETE /queries/:id' do
    before { delete "/queries/#{query_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end