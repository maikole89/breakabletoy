# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all


scream = User.create(username: "Scream", first_name:"Ernesto", last_name: "Camou", role: "admin", email: "ok999@hotmail.com", password: "123456")
lazycat05 = User.create(username: "LazyCat05", first_name:"Tim", last_name: "Hollis", role: "admin", email: "tim@tim.com", password: "123456")
natdouglas = User.create(username: "natdouglas", first_name:"Natalie", last_name: "Douglas", role: "admin", email: "natalie@gmail.com", password: "123456")
meghas = User.create(username: "meghas", first_name:"Megha", last_name: "Bellary", role: "admin", email: "megha4@hotmail.com", password: "123456")
themaikol = User.create(username: "themaikol", first_name:"Maikol", last_name: "Etcheverry", role: "admin", email: "maikol@hotmail.com", password: "123456")




event1 = Event.create(name:"Home Game 1", location:"Boston, MA", description:"Shojo", event_date: "01/01/2018" , event_time: "7pm" , url: "https://www.shojoboston.com/", user: scream)
event2 = Event.create(name:"Home Game 2", location:"Chinatown, MA", description:"Arcade", event_date: "01/02/2018" , event_time: "8pm" , url: "http://areafour.com/", user: lazycat05)
event3 = Event.create(name:"Home Game 3", location:"Watertown, MA", description:"Rockbottom", event_date: "01/03/2018" , event_time: "9pm", url: "https://rockbottom.com/locations/stuart-street/", user: meghas)
