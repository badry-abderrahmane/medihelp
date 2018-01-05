<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
      protected $fillable = [
        'reference','date','sujet','note','action_id','contact_id'
      ];

      public function action(){
          return $this->belongsTo('App\Action');
      }

      public function contact(){
          return $this->belongsTo('App\Contact');
      }
}
