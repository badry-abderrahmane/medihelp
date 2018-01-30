<?php

namespace App\Http\Controllers;

use App\Ticket;
use Illuminate\Http\Request;
use App\Http\Requests\TicketRequest;
use Illuminate\Support\Facades\Response;
use Auth;

class TicketController extends Controller
{
      public function index()
      {
          $tickets = Ticket::all();
          $tickets->filter->action;
          $tickets->filter->contact;
          $tickets->filter->client;
          $tickets->filter->emails;
          $tickets->filter->appels;
          $tickets->filter->responsable(Auth::user());
          return $tickets;
      }

      public function store(TicketRequest $request)
      {
          $ticket = Ticket::create($request->toArray());
          $ticket->users()->sync($request->users);

      return Response::json(['message' => 'Ticket bien ajouté','ticket' => $ticket], 200);
      }

      public function show($id)
      {
          $ticket = Ticket::findOrfail($id);
          $ticket->action;
          $ticket->contact;
          $ticket->client;
          $ticket->emails;
          $ticket->appels;
          $ticket->users;
          return Response::json($ticket, 200);
      }

      public function update(TicketRequest $request, $id)
      {
          $ticket = Ticket::findOrfail($id);
          $ticket->update($request->toArray());
          $ticket->users()->sync($request->users);
          return Response::json(['message' => 'Ticket bien mis à jour'], 200);
      }

      public function destroy($id)
      {
          Ticket::destroy($id);
          return Response::json(['message' => 'Ticket bien supprimé'], 200);
      }
}
