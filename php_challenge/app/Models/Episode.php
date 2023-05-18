<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Episode extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_episode',
        'name',
        'description',
        'director',
        'id_season',
        'tvshow'  

    ];

    public function director()
    {
        return $this->hasOne(Director::class);
    }

    public function season()
    {
        return $this->hasOne(Season::class); 
    }

}
