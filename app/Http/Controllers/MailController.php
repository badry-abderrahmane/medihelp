<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Services\MailService;

class MailController extends Controller
{
  public function send(Request $request){

    $send_instance = new MailService;
    
    $response      = $send_instance->send($request);

  return response()->json(['message' => $response]);
  }


}
