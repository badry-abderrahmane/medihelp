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

      public function adresses(){
          return $this->hasMany('App\Adress');
      }
}
