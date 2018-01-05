<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Typeclient extends Model
{
      protected $fillable = [
        'value'
      ];

      public function clients(){
          return $this->hasMany('App\Client');
      }

}
