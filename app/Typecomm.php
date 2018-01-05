<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Typecomm extends Model
{
      protected $fillable = [
        'value'
      ];

      public function appels(){
          return $this->hasMany('App\Appel');
      }

      public function emails(){
          return $this->hasMany('App\Email');
      }
}
