# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Event.create(name:"Home Game 1", location:"Boston, MA", description:"Shojo", event_date: "01/01/2018" , event_time: "7pm" , url: "https://www.shojoboston.com/")
Event.create(name:"Home Game 2", location:"Chinatown, MA", description:"Arcade", event_date: "01/02/2018" , event_time: "8pm" , url: "http://areafour.com/")
Event.create(name:"Home Game 3", location:"Watertown, MA", description:"Rockbottom", event_date: "01/03/2018" , event_time: "9pm", url: "https://rockbottom.com/locations/stuart-street/")
