# module ApplicationCable
#   class Connection < ActionCable::Connection::Base
#     identify_by :current_user
#
#     def connect
#       self.current_user = find_verified_user
#     end
#
#     private
#   end
# end
