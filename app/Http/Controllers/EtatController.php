<?php

namespace App\Http\Controllers;

use App\Etat;
use Illuminate\Http\Request;
use App\Http\Requests\EtatRequest;
use Illuminate\Support\Facades\Response;

class EtatController extends Controller
{
      public function index()
      {
          $etats = Etat::all();
          return $etats;
      }

      public function store(EtatRequest $request)
      {
          $etat = Etat::create($request->toArray());
          return Response::json(['message' => 'Etat bien ajoutée'], 200);
      }

      public function show($id)
      {
          $etat = Etat::findOrfail($id);
          return Response::json($etat, 200);
      }

      public function update(EtatRequest $request, $id)
      {
          $etat = Etat::findOrfail($id);
          $etat->update($request->toArray());
          return Response::json(['message' => 'Etat bien mise à jour'], 200);
      }

      public function destroy($id)
      {
          Etat::destroy($id);
          return Response::json(['message' => 'Etat bien supprimée'], 200);
      }
}
