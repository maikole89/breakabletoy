class Team < ApplicationRecord
  validates :name, presence: :true
  validates :abbreviatedName, presence: :true
  validates :homeLocation, presence: :true

  belongs_to :event

  def full_name
    [abbreviatedName, name].join(' ')
  end
end
