<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;
use App\Http\Requests\ContactRequest;
use Illuminate\Support\Facades\Response;

class ContactController extends Controller
{
      public function index()
      {
          $contacts = Contact::all();
          return $contacts;
      }

      public function store(ContactRequest $request)
      {
          $contact = Contact::create($request->toArray());
          return Response::json(['message' => 'Contact bien ajouté'], 200);
      }

      public function show($id)
      {
          $contact = Contact::findOrfail($id);
          return Response::json($contact, 200);
      }

      public function update(ContactRequest $request, $id)
      {
          $contact = Contact::findOrfail($id);
          $contact->update($request->toArray());
          return Response::json(['message' => 'Contact bien mis à jour'], 200);
      }

      public function destroy($id)
      {
          Contact::destroy($id);
          return Response::json(['message' => 'Contact bien supprimé'], 200);
      }
}
