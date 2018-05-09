# require 'net/http'
# require 'pry'
# require 'json'
# require 'dotenv'
#
# uri = URI('<url here>')
#
# request = Net::HTTP::Get.new(uri.request_uri)
# # Request headers
# request['Ocp-Apim-Subscription-Key'] = ENV.fetch("FANTASY_DATA_API_TOKEN")
# request.body = "{body}"
#
# response = Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
#     http.request(request)
# end
