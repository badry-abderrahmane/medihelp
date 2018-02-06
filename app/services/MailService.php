<?php

namespace App\Services;

use Mail;

class MailService
{


  public function send($email){
      $send = Mail::send('emails.support', ['title' => $email->title, 'content' => $email->body], function ($message) use($email)
      {
          $message->from($email->from, 'STG Maroc');
          $message->to($email->to);
      });

  return $send;
  }



}
