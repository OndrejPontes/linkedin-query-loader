require 'rails_helper'

RSpec.describe Query, type: :model do
  it { should have_many(:keys) }
  it { should belong_to(:main_query) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:value) }
  it { should validate_presence_of(:disabled) }
end
