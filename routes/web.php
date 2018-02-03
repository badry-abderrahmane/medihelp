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


Route::get('/', 'HomeController@index');

Route::get('/mail/send', 'MailController@send');

Auth::routes();

Route::get('/wayway', function() {
    return Auth::user();
});

Route::get('/islogged', function(){
  $user = Auth::user();
  $user->roles = $user->roles->filter->perms;
  return $user;
});

Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');
Route::post('/changepassword', 'UserController@changePassword');

Route::get('/home', 'HomeController@index')->name('home');


Route::resources([
    'typeclients' => 'TypeclientController',
    'clients'     => 'ClientController',
    'adresses'    => 'AdressController',
    'contacts'    => 'ContactController',
    'actions'     => 'ActionController',
    'tickets'     => 'TicketController',
    'typecomms'   => 'TypecommController',
    'etats'       => 'EtatController',
    'emails'      => 'EmailController',
    'appels'      => 'AppelController',
    'users'       => 'UserController',
    'roles'       => 'RoleController',
    'permissions' => 'PermissionController',
]);

/**
** Communcations Routes
**
**/
Route::get('tickets/communications/{id}', 'CommuncationController@getComms' );

/**
** Roles-utilisateurs-permissions Routes
**
**/
Route::post('users/roles/attach', 'UserController@attachRole' );


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

Route::get('list/users', function(){
  $list = \App\User::pluck('name','id')->toJson();
  return $list;
});

Route::get('list/roles', function(){
  $list = \App\Role::pluck('name','id')->toJson();
  return $list;
});

Route::get('list/tickets', function(){
  $list = \App\Ticket::pluck('sujet','id')->toJson();
  return $list;
});
