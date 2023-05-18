<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use Illuminate\Http\Request;

class TVShowController extends Controller
{
    public function show(Request $request){

        $episode = Episode::where('id_episode','=',$request['episode'])
                            ->where('id_season','=',$request['season'])
                            ->where('tvshow','=',$request['tvshow'])->get();
        
        $info = $episode->map(function ($epi) {
            return collect($epi->toArray())
             ->only(['name', 'description', 'director'])
             ->all();
        });
        if(!($info->isEmpty())){
            return response()->json([
                'message' => 'Episode info', 'data' => $info], 200);
        }else{
            return response()->json([
                'message' => 'Not Found'], 404);
        }
    }
}
