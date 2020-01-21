# Doctor's Appointments

This is a Doctor's Appointment application that is intended to show some of the skills of a full-stack web developer that uses Ruby on Rails and React.

**Doctor's appointments** is a an API tied to a frontend written in react, made using the methodology and indications of the Capstone Project provided by [Microverse](https://microverse.org). This project ask us to make a industry level application to show some of the skills learnt during the course. [here](https://www.notion.so/Final-Capstone-Project-Doctor-appointments-9b345aad940b4f0a951049fcb3da159f) to see the project requirements.


## Tools used

In this project we used:
* Ruby
* Ruby on Rails Framework
* HTML
* CSS
* React
* Redux

# Author

This project was created by:

* Carlos Del Real [Github Account https://github.com/carloshdelreal](https://github.com/carloshdelreal)

# The Web App

The live version of this project is on [Doctor's Appointments](https://doctorscapstone.herokuapp.com/)

# Required Installations

If you want a copy of this project running on your machine you have to install:

* Ruby 2.6.5
* gem 3.0.3
* Bundler 2.1.4
* Rails 6.0.2.1
* Node v13.5.0
* React

For installation instructions follow [The Instalation Guide](https://www.tutorialspoint.com/ruby-on-rails/rails-installation)


# Instalation of This App

Once you have installed the requiered packages shown on the [Required Installations](), proceed with the following steps

Clone the Repository, the folder toy_app will be downloaded

```Shell
your@pc:~$ git clone https://github.com/carloshdelreal/doctors.git
```

Move to the downloaded folder

```Shell
your@pc:~$ cd capstone
```

install gems

```Shell
your@pc:~$ bundle install --without production
```

migrate the database

```Shell
your@pc:~$ rails db:create
your@pc:~$ rails db:migrate
```
Finally, run the test suite to verify that everything is working correctly:

```Shell
your@pc:~$ rspec
```
If the test suite passes, you'll be ready to run the app in a local server:

If you desire to create dummy data to see the apps functionallity run

```Shell
your@pc:~$ rails db:seed

```

To enable the facebook login system you have to provide two environment variables with the keys to do that you have to 
```Shell
your@pc:~$ export FACEBOOK_ID=heregoesyourfacebookappid
your@pc:~$ export FACEBOOK_KEY=heregoesyourfacebookappkey

```
lastly run the server

```Shell
your@pc:~$ rails server

```

Then, go to [http://localhost:3000/](http://localhost:3000/)

Voila!

# License

This code is licensed under the Creative Commons Attribution CC BY therefore if you use this code partially or totally don't forget to reference.

This license lets others distribute, remix, adapt, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.

# External Resources

* [How to Run react components on rails](https://www.youtube.com/watch?v=5F_JUvPq410)
* [Building Awesome react apps](http://collectiveidea.com/blog/archives/2013/06/13/building-awesome-rails-apis-part-1)