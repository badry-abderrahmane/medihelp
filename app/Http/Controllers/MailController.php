<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Services\MailService;

class MailController extends Controller
{
  public function send(Request $request){

    $send_instance = new MailService;

    $email = $request;
    // $email->title = 'STG Support Feedback';
    // $email->body  = 'This is support ticket feedback';
    // $email->from  = 'abderrahmane@t.stg.ma';
    // $email->to    = 'walid@stg.ma';

    $response = $send_instance->send($email);

    var_dump($response);

  return response()->json(['message' => 'Request completed']);
  }


}
