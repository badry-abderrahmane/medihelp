<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
      protected $fillable = [
        'date','sujet','message','typecomm_id','action_id','etat_id','ticket_id','user_id'
      ];

      public function typecomm(){
          return $this->belongsTo('App\Typecomm');
      }

      public function action(){
          return $this->belongsTo('App\Action');
      }

      public function etat(){
          return $this->belongsTo('App\Etat');
      }

      public function ticket(){
          return $this->belongsTo('App\Ticket');
      }

      public function user(){
          return $this->belongsTo('App\User');
      }
}
