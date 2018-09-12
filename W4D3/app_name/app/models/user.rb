# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  before_validation :ensure_session_token
  validates :username, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil}
  validate password_digest_exist

  def password_digest_exist
    unless password_digest
      errors[:password_digest] << "Password can't be blank"
    end
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && BCrypt::Password.new(password_digest).is_password?(password)
      return user
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    User.save!
  end

  def ensure_session_token
    unless session_token
      self.session_token = User.generate_session_token
    end
  end

  def password=(pw)
    self.password_digest = BCrypt::Password.create(pw)
  end
end
