<?php

namespace App\Http\Controllers;

use App\Typeclient;
use Illuminate\Http\Request;
use App\Http\Requests\TypeclientRequest;
use Illuminate\Support\Facades\Response;

class TypeclientController extends Controller
{
      public function index()
      {
          $typeclients = Typeclient::all();
          return $typeclients;
      }

      public function store(TypeclientRequest $request)
      {
          $typeclient = Typeclient::create($request->toArray());
          return Response::json(['message' => 'Typeclient bien ajouté'], 200);
      }

      public function show($id)
      {
          $typeclient = Typeclient::findOrfail($id);
          return Response::json($typeclient, 200);
      }

      public function update(TypeclientRequest $request, $id)
      {
          $typeclient = Typeclient::findOrfail($id);
          $typeclient->update($request->toArray());
          return Response::json(['message' => 'Typeclient bien mis à jour'], 200);
      }

      public function destroy($id)
      {
          Typeclient::destroy($id);
          return Response::json(['message' => 'Typeclient bien supprimé'], 200);
      }
}
