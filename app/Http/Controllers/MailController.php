<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Mail;

class MailController extends Controller
{

    public function send(Request $request){


        Mail::send('emails.support', ['title' => 'Test Support HelpDesk', 'content' => 'Messge Ticket HelpDesk'], function ($message)
        {

            $message->from('support@t.stg.ma', 'STG Support Technique');

            $message->to('badry1992@gmail.com');

        });

    return response()->json(['message' => 'Request completed']);
    }

}
