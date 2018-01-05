<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
      protected $fillable = [
        'name','civilite','adress','phone','email','fonction','client_id'
      ];

      public function client(){
          return $this->belongsTo('App\Client');
      }

      public function tickets(){
          return $this->hasMany('App\Ticket');
      }
}
