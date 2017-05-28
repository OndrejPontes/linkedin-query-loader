# README

### Before Instalation
* you need Ruby version 2.3.1 or change project Ruby version (you may encounter with some problems)
* register your app on [LinkedIn registration](https://www.linkedin.com/secure/developer)
* add your key and secret into config/initializer/omniauth.rb
* set your PostgreSQL database and edit config/database.rb

### Instalation
```sh
$ git clone https://github.com/OndrejPontes/linkedin-query-loader.git
$ cd linkedin-query-loader
$ bundle && yarn
$ foreman start -f Procfile.dev
```
Go to [localhost:3000](http://localhost:3000) where you can find your running app.