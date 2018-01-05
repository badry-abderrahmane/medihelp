<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
      protected $fillable = [
        'value'
      ];

      public function tickets(){
          return $this->hasMany('App\Ticket');
      }

      public function emails(){
          return $this->hasMany('App\Email');
      }

      public function appels(){
          return $this->hasMany('App\Appel');
      }
}
