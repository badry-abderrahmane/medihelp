<?php

namespace App\Http\Controllers;

use App\Permission;
use App\Http\Requests\PermissionRequest;
use Illuminate\Support\Facades\Response;

class PermissionController extends Controller
{
  public function index()
  {
      $permissions = Permission::all();
      //$permissions->filter->perms;
      return $permissions;
  }

  public function store(PermissionRequest $request)
  {
      $permission = new Permission();
      $permission->name         = $request['name'];
      $permission->display_name = $request['display_name']; // optional
      $permission->description  = $request['description']; // optional
      $permission->save();
      return Response::json(['message' => 'Permission bien ajouté'], 200);
  }

  public function show($id)
  {
      $permission = Permission::findOrfail($id);
      $permission->perms;
      return Response::json($permission, 200);
  }

  public function update(PermissionRequest $request, $id)
  {
      $permission = Permission::findOrfail($id);
      $permission->update($request->toArray());
      return Response::json(['message' => 'Permission bien mis à jour'], 200);
  }

  public function destroy($id)
  {
      Permission::destroy($id);
      return Response::json(['message' => 'Permission bien supprimé'], 200);
  }
}
