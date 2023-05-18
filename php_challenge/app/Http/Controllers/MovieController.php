<?php


namespace App\Http\Controllers;

use App\Models\Movie;
use App\Service\MovieQuery;
use Illuminate\Http\Request;

class MovieController extends Controller
{

    public function index(Request $request){

        $filter = new MovieQuery();
        $queryitems = $filter->transform($request);

        if (count($queryitems) == 0){
            return Movie::all();    
        }else {
            return Movie::where($queryitems)->get();   
        }

    }
}
