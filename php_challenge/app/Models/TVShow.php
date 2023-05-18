<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TVShow extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'genre'
    ];

    public function actors()
    {
        return $this->hasMany(Actor::class);
    }

    public function director()
    {
        return $this->hasOne(Director::class);
    }

    public function seasons()
    {
        return $this->hasMany(Season::class);
    }
    
   // It has seasons with episodes inside each one, each episode has one director ( can have more 
   // than one director?) Actors are in all "seasons and episodes" by default.

}
