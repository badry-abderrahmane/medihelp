<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/wayway', function() {
    return Auth::user();
});

Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

Route::get('/home', 'HomeController@index')->name('home');


Route::resources([
    'typeclients' => 'TypeclientController',
    'clients' => 'ClientController',
    'adresses' => 'AdressController',
    'contacts' => 'ContactController',
    'actions' => 'ActionController',
    'tickets' => 'TicketController',
    'typecomms' => 'TypecommController',
    'etats' => 'EtatController',
    'emails' => 'EmailController',
    'appels' => 'AppelController',
]);
