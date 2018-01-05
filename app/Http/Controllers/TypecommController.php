<?php

namespace App\Http\Controllers;

use App\Typecomm;
use Illuminate\Http\Request;
use App\Http\Requests\TypecommRequest;
use Illuminate\Support\Facades\Response;

class TypecommController extends Controller
{
      public function index()
      {
          $typecomms = Typecomm::all();
          return $typecomms;
      }

      public function store(TypecommRequest $request)
      {
          $typecomm = Typecomm::create($request->toArray());
          return Response::json(['message' => 'Type communication bien ajouté'], 200);
      }

      public function show($id)
      {
          $typecomm = Typecomm::findOrfail($id);
          return Response::json($typecomm, 200);
      }

      public function update(TypecommRequest $request, $id)
      {
          $typecomm = Typecomm::findOrfail($id);
          $typecomm->update($request->toArray());
          return Response::json(['message' => 'Type communication bien mis à jour'], 200);
      }

      public function destroy($id)
      {
          Typecomm::destroy($id);
          return Response::json(['message' => 'Type communication bien supprimé'], 200);
      }
}
