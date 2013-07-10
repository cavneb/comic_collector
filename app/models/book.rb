class Book < ActiveRecord::Base
  attr_accessible :cover_image_url, :name
  has_many :issues
end
