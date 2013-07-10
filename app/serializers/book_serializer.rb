class BookSerializer < ActiveModel::Serializer
  attributes :id, :name, :cover_image_url

  has_many :issues, embed: :ids, include: true
end
