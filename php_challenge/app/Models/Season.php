<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Season extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
    ];

    public function tvshow()
    {
        return $this->hasOne(TvShow::class);
    }
    
    public function episodes()
    {
        return $this->hasMany(Episode::class);
    }


}