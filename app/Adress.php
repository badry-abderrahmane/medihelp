<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adress extends Model
{
      protected $fillable = [
        'libele','adress','phone','client_id'
      ];

      public function client(){
          return $this->belongsTo('App\Client');
      }
}
