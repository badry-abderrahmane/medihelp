<?php

namespace App\Http\Controllers;

use App\Role;
use App\Http\Requests\RoleRequest;
use Illuminate\Support\Facades\Response;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::all();
        $roles->filter->perms;
        $roles->filter->users;
        return $roles;
    }

    public function store(RoleRequest $request)
    {
        $role = new Role();
        $role->name         = $request['name'];
        $role->display_name = $request['display_name']; // optional
        $role->description  = $request['description']; // optional
        $role->save();
        return Response::json(['message' => 'Role bien ajouté'], 200);
    }

    public function show($id)
    {
        $role = Role::findOrfail($id);
        $role->perms;
        $role->users;
        return Response::json($role, 200);
    }

    public function update(RoleRequest $request, $id)
    {
        $role = Role::findOrfail($id);
        $role->update($request->toArray());
        return Response::json(['message' => 'Role bien mis à jour'], 200);
    }

    public function destroy($id)
    {
        Role::destroy($id);
        return Response::json(['message' => 'Role bien supprimé'], 200);
    }
}
