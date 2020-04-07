# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts "Creating Users"
User.create!( email: 'carlos@email.com',
              password: 'foobar',
              password_confirmation: 'foobar')

User.create!( email: 'antonio@email.com',
              password: 'foobar',
              password_confirmation: 'foobar')

User.create!( email: 'angie@email.com',
              password: 'foobar',
              password_confirmation: 'foobar')

specializations = [ "general", "pediatrics", "dermatology",
                    "oncology", 'internal medicine', 'neurology']

specializations.each do |specialty|
  Specialization.create!(area: specialty)
end

cities = ['bogota', 'medellin', 'cali', 'los angeles', 'san francisco', 'miami', 'newyork', 'dallas', 'houston', 'knoxville', 'albuquerque']
s = Specialization.all

puts 'Creating Doctors'

60.times do
  name = Faker::Name.unique.first_name
  lastname = Faker::Name.last_name
  Doctor.create!( docname: name+lastname,
                  location: cities.sample,
                  fullname: name + " " +lastname,
                  specialization_id: s.sample.id,
                  experience: (1..20).to_a.sample,
                  price: (50..500).step(50).to_a.sample )
end

puts 'Part: 1/4, Creating atends ...'
(-10..30).to_a.each do |x|
  Atend.create(date: Time.now() + x.day)
end

def createAfternoonBookings(d, a)
  Booking.create(doctor_id: d, atend_id: a, label: "2:00 PM", hour: 14, minutes: 00)
end

def createMorningBookings(d, a)
  Booking.create(doctor_id: d, atend_id: a, label: "8:00 AM", hour: 8, minutes: 00)
end

puts 'Part: 2/4'
random_doctors = 20
Doctor.all.shuffle[0..random_doctors].each_with_index do | d, index |
  puts "Creating Bookings in the afternoon for Doctor: #{d.fullname}, progress: %#{index*100/random_doctors}"
  Atend.all.each do | a |
    createMorningBookings(d.id, a.id)
  end
end

puts 'Part: 3/4'
doctor_length = Doctor.all.length
Doctor.all.each_with_index do | d, index |
  puts "Creating Bookings at the morning for Doctor: #{d.fullname}, progress: %#{index*100/doctor_length}"
  Atend.all.each do | a |
    createAfternoonBookings(d.id, a.id)
  end
end

puts 'Part 4/4'
puts 'creating apointments to users'

User.all.each do | user |
  Doctor.all.shuffle[0..5] do | doctor |
    booking = Booking.where(doctor_id: doctor.id, user_id: nil).sample
    booking.user_id = user.id
    booking.save
  end
end

u = User.first
d = Doctor.first
booking = Atend.where(date: Time.now - 10.day)[0].bookings.where(doctor_id: d.id)[0]
booking.user_id = u.id
booking.save

booking = Atend.where(date: Time.now - 8.day)[0].bookings.where(doctor_id: d.id)[0]
booking.user_id = u.id
booking.save

booking = Atend.where(date: Time.now - 3.day)[0].bookings.where(doctor_id: d.id)[0]
booking.user_id = u.id
booking.save


