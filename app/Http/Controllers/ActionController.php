<?php

namespace App\Http\Controllers;

use App\Action;
use Illuminate\Http\Request;
use App\Http\Requests\ActionRequest;
use Illuminate\Support\Facades\Response;

class ActionController extends Controller
{

    public function index()
    {
        $actions = Action::all();
        return $actions;
    }

    public function store(ActionRequest $request)
    {
        $action = Action::create($request->toArray());
        return Response::json(['message' => 'Action bien ajouté'], 200);
    }

    public function show($id)
    {
        $action = Action::findOrfail($id);
        return Response::json($action, 200);
    }

    public function update(ActionRequest $request, $id)
    {
        $action = Action::findOrfail($id);
        $action->update($request->toArray());
        return Response::json(['message' => 'Action bien mise à jour'], 200);
    }

    public function destroy($id)
    {
        Action::destroy($id);
        return Response::json(['message' => 'Action bien supprimée'], 200);
    }
}
