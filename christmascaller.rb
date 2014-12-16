require 'sinatra'
require 'twilio-ruby'

get "/" do
  erb :layout
end

post "/send" do
  # raise params[:message].inspect
  Twilio::TwiML::Response.new do |r|
    r.Say 'Hello Monkey'
  end.text
end