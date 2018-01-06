<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = [
      'reference','date','sujet','note','state','action_id','contact_id','client_id'
    ];

    public function action(){
        return $this->belongsTo('App\Action');
    }

    public function contact(){
        return $this->belongsTo('App\Contact');
    }

    public function client(){
        return $this->belongsTo('App\Client');
    }

    public function emails(){
        return $this->hasMany('App\Email');
    }

    public function appels(){
        return $this->hasMany('App\Appel');
    }
}
