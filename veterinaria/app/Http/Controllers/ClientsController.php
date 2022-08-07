<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientsController extends Controller
{

    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'lastName' => 'required',
            'identification' => 'required|unique:tus_clients',
            'email' => 'required|email|unique:tus_clients',
            'address' => 'required',
            'password' => 'required|min:4|regex:/^.*(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!$#%]).*$/',
        ]);
        $client = new Client();
        $client->name = $request->name;
        $client->lastName = $request->lastName;
        $client->identification = $request->identification;
        $client->email = $request->email;
        $client->address = $request->address;
        $client->password = $request->password;
        $client->save();
        return response()->json($client->toArray());
    }

    public function getClients(){
        $clients = Client::all();
        return response()->json($clients->toArray());
    }

    public function getClient(Request $request){
        $client = Client::find($request->clientId);
        return $client;
    }

    public function destroy($clientId){
        $client = Client::find($clientId);
        $client->delete();
        return $client;
    }

    public function update(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:4|regex:/^.*(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!$#%]).*$/',
        ]);
        $client = Client::find($request->clientId);

        $client->name = $request->name;
        $client->lastName = $request->lastName;
        $client->identification = $request->identification;
        $client->email = $request->email;
        $client->address = $request->address;
        $client->password = $request->password;
        $client->save();
        return $client;
    }
}
