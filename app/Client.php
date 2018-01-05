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
}
