<?php

namespace App\Services;

use Mail;
use Auth;
use Config;

class MailService
{

  public function send($email){
    try {
      $user = Auth::user();
      Config::set('mail.username', $user->email);
      Config::set('mail.password', $user->mailpass);

      Mail::send('emails.support', ['title' => $email->title, 'content' => $email->body], function ($message) use($email)
      {
          $message->replyTo($email->address, $name = null);
          $message->subject($email->subject);
          $message->priority($email->level);
          $message->from($email->from, 'STG SUPPORT');
          $message->to($email->to);
      });
    } catch (\Exception $e) {
      return 'Problem Sending Email';
    }

  return 'Mail Sent';
  }

}
