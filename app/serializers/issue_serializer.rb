class IssueSerializer < ActiveModel::Serializer
  attributes :id, :number, :title, :cover_image_url, :price

  has_one :book, embed: :objects
end
