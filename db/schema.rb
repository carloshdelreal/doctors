# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_19_192711) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "atends", force: :cascade do |t|
    t.date "date", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.string "label"
    t.integer "hour"
    t.integer "minutes"
    t.boolean "booked"
    t.bigint "doctor_id", null: false
    t.bigint "atend_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.index ["atend_id"], name: "index_bookings_on_atend_id"
    t.index ["doctor_id"], name: "index_bookings_on_doctor_id"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "doctors", force: :cascade do |t|
    t.string "docname"
    t.string "location"
    t.string "fullname"
    t.bigint "specialization_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["docname"], name: "index_doctors_on_docname", unique: true
    t.index ["specialization_id"], name: "index_doctors_on_specialization_id"
  end

  create_table "specializations", force: :cascade do |t|
    t.string "area"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "bookings", "atends"
  add_foreign_key "bookings", "doctors"
  add_foreign_key "bookings", "users"
  add_foreign_key "doctors", "specializations"
end
