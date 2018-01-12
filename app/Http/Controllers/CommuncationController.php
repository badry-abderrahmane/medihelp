<?php

namespace App\Http\Controllers;

use App\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;


class CommuncationController extends Controller
{
    public function getComms($id)
    {
      $ticket = Ticket::findOrfail($id);
      $ticket->emails;

      $ticket->emails->filter->etat;
      $ticket->emails->filter->action;
      $ticket->emails->filter->typecomm;

      $ticket->appels->filter->etat;
      $ticket->appels->filter->action;
      $ticket->appels->filter->typecomm;

      $merged = $ticket->emails->merge($ticket->appels);
      $sorted = $merged->sortBy('date');
      return Response::json($sorted, 200);
    }
}
