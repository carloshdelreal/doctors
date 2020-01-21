# frozen_string_literal: true

class OmniAuthController < Devise::OmniauthCallbacksController
  def github
    @user = User.from_omniauth(request.env['omniauth.auth'])
    sign_in_and_redirect @user
  end

  def facebook
    # You need to implement the method below in your model
    # (e.g. app/models/user.rb)
    @user = User.from_omniauth(request.env['omniauth.auth'])

    if @user.persisted?
      # this will throw if @user is not activated
      sign_in_and_redirect @user, event: :authentication
      if is_navigational_format?
        set_flash_message(:notice, :success, kind: 'Facebook')
      end
    else
      session['devise.facebook_data'] = request.env['omniauth.auth']
      redirect_to new_user_registration_url
    end
  end

  def failure
    redirect_to root_path
  end
end
