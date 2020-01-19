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
s = Specialization.all

50.times do
  name = Faker::Name.unique.first_name
  lastname = Faker::Name.last_name
  Doctor.create!( docname: name+lastname,
                  location: cities.sample,
                  fullname: name + " " +lastname,
                  specialization_id: s.sample.id )
end

doctors = Doctor.all
users = User.all
confirmed_array = [true, false]
doctors.each do |doctor|
  u = users.sample
  d = Date.today + 1.day
  t = Time.new(d.year, d.month, d.day, 8)
  doctor.appointments.create!(
    user_id: u.id,
    date: d,
    time: t,
    duration: 1,
    confirmed: confirmed_array.sample,
  )

  u = users.sample
  t = Time.new(d.year, d.month, d.day, 9)
  doctor.appointments.create!(
    user_id: u.id,
    date: d,
    time: t,
    duration: 1,
    confirmed: confirmed_array.sample,
  )

  u = users.sample
  t = Time.new(d.year, d.month, d.day, 11)
  doctor.appointments.create!(
    user_id: u.id,
    date: d,
    time: t,
    duration: 1,
    confirmed: confirmed_array.sample,
  )

  u = users.sample
  d = Date.today + 1.day
  t = Time.new(d.year, d.month, d.day, 12)
  doctor.appointments.create!(
    user_id: u.id,
    date: d,
    time: t,
    duration: 1,
    confirmed: confirmed_array.sample,
  )
end

Atend.create(date: Time.now() + 1.day)
Atend.create(date: Time.now() + 2.day)
Atend.create(date: Time.now() + 3.day)
Atend.create(date: Time.now() + 4.day)
Atend.create(date: Time.now() + 5.day)
Atend.create(date: Time.now() + 6.day)
Atend.create(date: Time.now() + 7.day)
Atend.create(date: Time.now() + 8.day)

def createBookings(d, a)
  Booking.create(doctor: d, atend: a, label: "8:00 AM", hour: 8, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "8:30 AM", hour: 8, minutes: 30, booked: false )
  Booking.create(doctor: d, atend: a, label: "9:00 AM", hour: 9, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "9:30 AM", hour: 9, minutes: 30, booked: false )
  Booking.create(doctor: d, atend: a, label: "10:00 AM", hour: 10, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "10:30 AM", hour: 10, minutes: 30, booked: false )
  Booking.create(doctor: d, atend: a, label: "11:00 AM", hour: 11, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "11:30 AM", hour: 11, minutes: 30, booked: false )
  Booking.create(doctor: d, atend: a, label: "12:00 AM", hour: 12, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "2:00 PM", hour: 14, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "2:30 PM", hour: 14, minutes: 30, booked: false )
  Booking.create(doctor: d, atend: a, label: "3:00 PM", hour: 15, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "3:30 PM", hour: 15, minutes: 30, booked: false )
  Booking.create(doctor: d, atend: a, label: "4:00 PM", hour: 16, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "4:30 PM", hour: 16, minutes: 30, booked: false )
end

def createMorningBookings(d, a)
  Booking.create(doctor: d, atend: a, label: "8:00 AM", hour: 8, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "8:30 AM", hour: 8, minutes: 30, booked: false )
  Booking.create(doctor: d, atend: a, label: "9:00 AM", hour: 9, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "9:30 AM", hour: 9, minutes: 30, booked: false )
  Booking.create(doctor: d, atend: a, label: "10:00 AM", hour: 10, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "10:30 AM", hour: 10, minutes: 30, booked: false )
  Booking.create(doctor: d, atend: a, label: "11:00 AM", hour: 11, minutes: 00, booked: false )
  Booking.create(doctor: d, atend: a, label: "11:30 AM", hour: 11, minutes: 30, booked: false )
  Booking.create(doctor: d, atend: a, label: "12:00 AM", hour: 12, minutes: 00, booked: false )
end

a1 = Atend.first
a2 = Atend.second
a3 = Atend.third
a4 = Atend.all[4]
a5 = Atend.all[5]
a6 = Atend.all[6]

Doctor.all.each do | d |
  createBookings(d, a1)
end


Doctor.all.shuffle[0..35].each do | d |
  createBookings(d, a2)
  createBookings(d, a3)
end

Doctor.all.shuffle[0..35].each do | d |
  createMorningBookings(d, a4)
  createMorningBookings(d, a5)
end

Doctor.all.shuffle[0..35].each do | d |
  createMorningBookings(d, a6)
end


  
