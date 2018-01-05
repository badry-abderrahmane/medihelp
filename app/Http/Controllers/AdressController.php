<?php

namespace App\Http\Controllers;

use App\Adress;
use Illuminate\Http\Request;
use App\Http\Requests\AdressRequest;
use Illuminate\Support\Facades\Response;

class AdressController extends Controller
{

    public function index()
    {
        $adresses = Adress::all();
        $adresses->filter->client;
        return $adresses;
    }

    public function store(AdressRequest $request)
    {
        $adress = Adress::create($request->toArray());
        return Response::json(['message' => 'Adresse bien ajoutée'], 200);
    }

    public function show($id)
    {
        $adress = Adress::findOrfail($id);
        $adress->client;
        return Response::json($adress, 200);
    }

    public function update(AdressRequest $request, $id)
    {
        $adress = Adress::findOrfail($id);
        $adress->update($request->toArray());
        return Response::json(['message' => 'Adresse bien mise à jour'], 200);
    }

    public function destroy($id)
    {
        Adress::destroy($id);
        return Response::json(['message' => 'Adresse bien supprimée'], 200);
    }
}
