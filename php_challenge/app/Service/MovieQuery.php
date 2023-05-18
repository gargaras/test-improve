<?php

namespace App\Service;

use Illuminate\Http\Request;

class MovieQuery{

    protected $safeParams = [
        'name' => ['eq'],
        'genre' => ['eq'],
        'director' => ['eq']
    ];

    protected $operatorMap = [
        'eq' => '='
    ];


    public function transform(Request $request){

        $movieQuery= [];

        foreach($this->safeParams as $param => $operators){
            $query = $request->query($param);

            if (!isset($query)){
                continue;
            }

            foreach($operators as $operator){
                if (isset($query[$operator])) {
                    $movieQuery[] = [$param, $this->operatorMap[$operator], $query[$operator]];
                }
            }
           
        } 
        
        return $movieQuery;

    }
}
