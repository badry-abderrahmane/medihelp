<?php

namespace App\Services;

use Mail;

class MailService
{


  public function send($email){
    try {
      Mail::send('emails.support', ['title' => $email->title, 'content' => $email->body], function ($message) use($email)
      {
          $message->replyTo($email->address, $name = null);

          $message->subject($email->subject);
          
          $message->priority($email->level);
          $message->from($email->from, 'STG Maroc');
          $message->to($email->to);
      });
    } catch (\Exception $e) {
      return 'Problem Sending Email';
    }

  return 'Mail Sent';
  }



}
