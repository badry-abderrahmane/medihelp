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

// Route::get('/users', function() {
//     return \App\User::All();
// });

// Route::get('/user', function() {
//     $user = Auth::user();
//     $user->roles->filter->perms;
//     return $user;
// });

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
    'users' => 'UserController',
    'roles' => 'RoleController',
    'permissions' => 'PermissionController',
]);

/**
** Communcations Routes
**
**/
Route::get('tickets/communications/{id}', 'CommuncationController@getComms' );

/**
** Get Lists
**
**/
Route::get('list/typeclients', function(){
  $list = \App\Typeclient::pluck('value as name','id')->toJson();
  return $list;
});

Route::get('list/clients', function(){
  $list = \App\Client::pluck('name','id')->toJson();
  return $list;
});

Route::get('list/actions', function(){
  $list = \App\Action::pluck('value as name','id')->toJson();
  return $list;
});

Route::get('list/typecomms', function(){
  $list = \App\Typecomm::pluck('value as name','id')->toJson();
  return $list;
});

Route::get('list/etats', function(){
  $list = \App\Etat::pluck('value as name','id')->toJson();
  return $list;
});
