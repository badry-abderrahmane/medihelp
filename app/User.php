<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;
use Illuminate\Database\Eloquent;
use DB;

class User extends Authenticatable
{
    use Notifiable;
    use EntrustUserTrait;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','mailpass'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Detach all roles from a user
     *
     * @return object
     */
      public function detachAllRoles()
      {
          DB::table('role_user')->where('user_id', $this->id)->delete();

      return $this;
      }

    function withRole($name)
    {
    }

    function can($ability, $arguments = [])
    {
      return !is_null($ability) && $this->checkPermission($ability);
    }

    function ability($roles, $permissions, $options)
    {
    }

    public function tickets()
    {
      return $this->belongsToMany('App\Ticket');
    }

    public function clients()
    {
      return $this->belongsToMany('App\Client');
    }

    public function appels()
    {
      return $this->hasMany('App\Appel');
    }

    public function emails()
    {
      return $this->hasMany('App\Email');
    }
}
