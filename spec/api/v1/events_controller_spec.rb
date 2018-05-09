# require 'rails_helper'
# RSpec.describe Api::V1::EventsController, type: :controller do
#   before(:each) do
#     ica = create(:event, name: "ICA", location: "Boston")
#     create_list(:event, 2)
#     create(:event, name: "Boston Children's Museum", location: "Boston")
#   end
#   describe "GET#index" do
#     it "should return a list of all the events" do
#       get :index
#       returned_json = JSON.parse(response.body)
#       expect(response.status).to eq 200
#       expect(response.content_type).to eq "application/json"
#       expect(returned_json.length).to eq 1
#       expect(returned_json["events"].length).to eq 4
#       expect(returned_json["events"][0]["name"]).to eq "ICA"
#       expect(returned_json["events"][1]["name"]).to eq "Museum 1"
#     end
#   end
# end
