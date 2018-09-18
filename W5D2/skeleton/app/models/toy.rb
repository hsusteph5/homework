class Toy < ApplicationRecord
  validates :name, uniqueness: { scope: [:toyable] }
  belongs_to :toyable, polymorphic: true
    foreign_key: :toyable_id,
    class_name: :Toy
end
