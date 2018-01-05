<?php

namespace App\Http\Controllers;

use App\Appel;
use Illuminate\Http\Request;
use App\Http\Requests\AppelRequest;
use Illuminate\Support\Facades\Response;

class AppelController extends Controller
{

    public function index()
    {
        $appels = Appel::all();
        $appels->filter->typecomm;
        $appels->filter->action;
        $appels->filter->etat;
        $appels->filter->ticket;
        return $appels;
    }

    public function store(AppelRequest $request)
    {
        $appel = Appel::create($request->toArray());
        return Response::json(['message' => 'Appel bien ajouté'], 200);
    }

    public function show($id)
    {
        $appel = Appel::findOrfail($id);
        $appel->typecomm;
        $appel->action;
        $appel->etat;
        $appel->ticket;
        return Response::json($appel, 200);
    }

    public function update(AppelRequest $request, $id)
    {
        $appel = Appel::findOrfail($id);
        $appel->update($request->toArray());
        return Response::json(['message' => 'Appel bien mis à jour'], 200);
    }

    public function destroy($id)
    {
        Appel::destroy($id);
        return Response::json(['message' => 'Appel bien supprimé'], 200);
    }
}
