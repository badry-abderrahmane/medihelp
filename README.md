
# Laravel 5 Ticket Management System
Laravel 5.5 and Vue JS 2.5 project.

# Official documentations
- <a href="https://laravel.com/docs/5.5">Laravel 5.5</a> Full docs.
- Every thing you want to know about<a href="https://laravel.com/docs/5.5"> Vue Js 2.0</a>.

# Download
- Clone the project into a folder of your choice with "git clone https://github.com/badry-abderrahmane/medihelp.git ."
- Through composer run "composer install"
(To get the latest packages, run <code>composer update</code>)

# Install
To get this working, you need to install dependencies and set up your .env...

- run <code>composer install</code>
- run <code>php artisan key:generate</code>
- Now add the app key to your .env file, this is also where you define your database (there is an example in root called .env.example)
- Next, you need to run the database migrations...
- <code>php artisan migrate</code> Creates the tables in the database

# Deployment

## Configuration for production

Go to your Apache virtual host configurations, If you are using Xampp on Windows so the file will be located in : C:\xampp\apache\conf\extra\httpd-vhosts.conf .
You need to add these lines:


```
NameVirtualHost *:80
<VirtualHost *:80>
  DocumentRoot "C:/xampp/webdav/medihelp/public"
  ServerName 127.0.0.1
  ServerAlias 127.0.0.1
  <Directory  "C:/xampp/webdav/medihelp/public">
       Options +Indexes +FollowSymLinks +MultiViews
       AllowOverride All
       Allow from all
       Require all granted
   </Directory>
</VirtualHost>
```



You will need to change _C:/xampp/webdav/medihelp/public_ to your exact full path to public folder.

## Configuration for developpement

You need just to execute this command on application folder: `php artisan serv`
And then you can access it in the navigator: 127.0.0.1:8000

