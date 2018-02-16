<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Services\MailService;
//use Webklex\IMAP\Client;
use Ddeboer\Imap\Server;
use Ddeboer\Imap\Search\Date\Since;
use Carbon\Carbon;

class MailController extends Controller
{
  protected $server;
  protected $connection;

  function __construct() {
    $this->server = new Server('imap.gmail.com');
    $this->connection = $this->server->authenticate('abderrahmane@t.stg.ma', 'stgmaroc2018');
  }

  public function send(Request $request){

    $send_instance = new MailService;

    $response      = $send_instance->send($request);

  return response()->json(['message' => $response]);
  }

  public function getFolders()
  {
    $mailboxes = $this->connection->getMailboxes();
    $folders = array();
    $i = 0;
    foreach ($mailboxes as $mailbox) {
        if ($mailbox->getAttributes() & \LATT_NOSELECT) {
            continue;
        }
        $folderName = str_replace("[Gmail]/", "", $mailbox->getName());
        $folders[$i]["name"] = $folderName;
        $folders[$i]["count"] = $mailbox->count();
        $i++;
    }

  return Response::json($folders, 200);
  }

  public function getMail()
  {
    $folders = $this->getReadyFolders();
    $mails = array();
    foreach ($folders as $key => $folder) {
      $folderName = str_replace("[Gmail]/", "", $folder);
      $mails[$folderName] = $this->getFolderContent($folder);
    }

  return Response::json($mails, 200);
  }

  public function getFolderContent($folder)
  {
      $mailbox = $this->connection->getMailbox($folder);
      $lastday = Carbon::now()->subDay(2);
      $messages = $mailbox->getMessages(
          new Since($lastday),
          \SORTDATE, // Sort criteria
          true // Descending order
      );

      $mails = array();
      $i     = 0;
      foreach ($messages as $message) {
          //$mails[$i]["subject"]    = $message->getAll();
          $header = $message->getHeaders();
          $mails[$i]["nb"]         = $message->getNumber();
          $mails[$i]["id"]         = $message->getId();
          $mails[$i]["subject"]    = isset($header["subject"]) ? $header["subject"] : 'Pas de sujet';
          $mails[$i]["fromName"]   = isset($header["from"]) ? $header["from"][0]->mailbox : 'From Adress n\'éxiste pas';
          $mails[$i]["fromEmail"]  = isset($header["from"]) ? $header["from"][0]->mailbox.'@'.$header["from"][0]->host : 'From Adress n\'éxiste pas';
          $mails[$i]["to"]         = isset($header["to"]) ? $header["to"] : 'Pas d\'adress TO';
          $dt = Carbon::parse($header["date"]);
          $mails[$i]["date"]       = $dt->toDateTimeString();
          $mails[$i]["isAnswered"] = $message->isAnswered();
          $mails[$i]["isDeleted"]  = $message->isDeleted();
          $mails[$i]["bodyText"]   = $message->getBodyText();

          $i++;
      }

  return $mails;
  }

  public function getMailFolder(Request $request)
  {
    if ($request->folder != 'INBOX') {
      $mailbox = $this->connection->getMailbox('[Gmail]/'.$request->folder);
    }else{
      $mailbox = $this->connection->getMailbox($request->folder);
    }

    $lastday = Carbon::now()->subDay(10);
    $messages = $mailbox->getMessages(
        new Since($lastday),
        \SORTDATE, // Sort criteria
        true // Descending order
    );

    $mails = array();
    $i     = 0;
    foreach ($messages as $message) {
        //$mails[$i]["subject"]    = $message->getAll();
        $header = $message->getHeaders();
        $mails[$i]["nb"]         = $message->getNumber();
        $mails[$i]["id"]         = $message->getId();
        $mails[$i]["subject"]    = isset($header["subject"]) ? $header["subject"] : 'Pas de sujet';
        $mails[$i]["fromName"]   = $header["from"][0]->mailbox;
        $mails[$i]["fromEmail"]  = $header["from"][0]->mailbox.'@'.$header["from"][0]->host;
        $mails[$i]["to"]         = $header["to"];
        $dt = Carbon::parse($header["date"]);
        $mails[$i]["date"]       = $dt->toDateTimeString();
        $mails[$i]["isAnswered"] = $message->isAnswered();
        $mails[$i]["isDeleted"]  = $message->isDeleted();
        $mails[$i]["bodyText"]   = $message->getBodyText();

        $i++;
    }
  return Response::json($mails, 200);
  }

  public function toSpam(Request $request)
  {
    $selected = $this->getSelected($request->selected);
    $mailbox = $this->connection->getMailbox('[Gmail]/'.$request->folder);
    foreach ($selected as $key => $value) {
      $message = $mailbox->getMessage(intval($value));
      $mailbox = $this->connection->getMailbox('[Gmail]/Spam');
      $message->move($mailbox);
      $this->connection->expunge();
    }

  return Response::json(['message' => 'Message(s) marqué(s) comme spam'], 200);
  }

  public function toTrash(Request $request)
  {
    $selected = $this->getSelected($request->selected);
    $mailbox = $this->connection->getMailbox('[Gmail]/'.$request->folder);
    foreach ($selected as $key => $value) {
      $message = $mailbox->getMessage(intval($value))->delete();
      $this->connection->expunge();
    }

  return Response::json(['message' => 'Message(s) supprimé(s)'], 200);
  }

  public function transfer(Request $request)
  {
    $selected = $this->getSelected($request->selected);

  return $request->selected;
  }

  public function attachTicket(Request $request)
  {
    $selected = $this->getSelected($request->selected);

  return $request->selected;
  }

  public function unread(Request $request)
  {
    $selected = $this->getSelected($request->selected);

  return $request->selected;
  }


  // Functions Utiles
  public function getSelected($array)
  {
    $selected = array();
    foreach ($array as $key => $value) {
      if ($value) {
        array_push($selected, $key);
      }
    }

  return $selected;
  }

  public function getReadyFolders()
  {
    $mailboxes = $this->connection->getMailboxes();
    $folders = array();
    foreach ($mailboxes as $mailbox) {
        if ($mailbox->getAttributes() & \LATT_NOSELECT) {
            continue;
        }
        array_push($folders,$mailbox->getName());
    }

  return $folders;
  }
}
