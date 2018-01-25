<?php namespace App;

use Zizaco\Entrust\EntrustRole;
use Config;

class Role extends EntrustRole
{
  protected $fillable = [
    'name','display_name','discription'
  ];

  public function users() {
      return $this->belongsToMany(
          Config::get('auth.providers.users.model'),
          Config::get('entrust.role_user_table'),
          Config::get('entrust.role_foreign_key'),
          Config::get('entrust.user_foreign_key'));
  }

}
