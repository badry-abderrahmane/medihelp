<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
      protected $fillable = [
        'name','phone','fax','email','adress','secteur','typeclient_id'
      ];

      public function typeclient(){
          return $this->belongsTo('App\Typeclient');
      }

      public function contacts(){
          return $this->hasMany('App\Contact');
      }

      public function tickets(){
          return $this->hasMany('App\Ticket');
      }

      public function adresses(){
          return $this->hasMany('App\Adress');
      }

      public function users()
      {
        return $this->belongsToMany('App\User');
      }

      public function responsable($user)
      {
        return $this->responsable = $this->users
                    ->contains(function($value) use($user) {
                        return $value->pivot->user_id == $user->id;
                    });
      }
}
