<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Models\Actor;
use Illuminate\Http\Request;

class ActorController extends Controller
{
    public function store(Request $request){
        
        $data = $request->only('name');
        $validator = Validator::make($data, [
            'name' => 'required|string',
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
         
        $actor = Actor::create($request->all());
         
         return response()->json([
            "status" => "200",
            'message' => 'Actor added successfully',        
            "data" => $actor
         ]);       

    }

}
