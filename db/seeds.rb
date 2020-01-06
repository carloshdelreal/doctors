# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.create!( email: 'carlos@email.com',
              password: 'foobar',
              password_confirmation: 'foobar')

User.create!( email: 'antonio@email.com',
              password: 'foobar',
              password_confirmation: 'foobar')

User.create!( email: 'angie@email.com',
              password: 'foobar',
              password_confirmation: 'foobar')

20.times do   
  User.create!( email: Faker::Internet.email,
                password: 'foobar',
                password_confirmation: 'foobar')
end

specializations = [ "general", "pediatrics", "dermatology",
                    "oncology", 'internal medicine', 'neurology',
                    'obstetrics', 'cardiology']

specializations.each do |specialty|
  Specialization.create!(area: specialty)
end

cities = ['bogota', 'medellin', 'cali', 'los angeles', 'san francisco', 'miami', 'newyork', 'dallas', 'houston', 'knoxville', 'albuquerque']
s =Specialization.all

50.times do
  name = Faker::Name.unique.first_name
  lastname = Faker::Name.last_name
  Doctor.create!( docname: name+lastname,
                  location: cities.sample,
                  fullname: name + " " +lastname,
                  specialization_id: s.sample.id
                )
end