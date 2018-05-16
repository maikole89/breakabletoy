require 'httparty'
require 'pry'

class OverwatchleagueParser
  attr_reader :data

  def initialize
    @data = []
  end

  # def search(topic=nil)
  def search(query)
    # response = HTTParty.get("https://api.meetup.com/2/groups?key=#{ENV["MEETUP_KEY"]}&topic=#{query}")
    # response = HTTParty.get("https://api.meetup.com/2/groups?key=#{ENV["MEETUP_KEY"]}&topic=dogs")
    response = HTTParty.get("https://api.overwatchleague.com/teams")
    binding.pry
    # response["results"].each do |meetup|
    #   Meetup.create(
    #   name: meetup["name"],
    #   link: meetup["link"],
    #   city: meetup["city"],
    #   state: meetup["state"],
    #   description: meetup["description"],
    #   lon: meetup["lon"],
    #   lat: meetup["lat"]
    #   )
    # end

    # or

  #   owl_data = response["id"][0]
  #   new_hash = {
  #     name: owl_data["name"],
  #     link: owl_data["link"],
  #     city: owl_data["city"],
  #     state: owl_data["state"],
  #     description: owl_data["description"],
  #     lon: owl_data["lon"],
  #     lat: owl_data["lat"]
  #   }
  #   @data << new_hash
  # end

  # What happens when no topics are found?

    # def search_events(query)
    #   # ...
    # end


end
