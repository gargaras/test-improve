<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Actor::factory(10)->create();
        \App\Models\TVShow::factory(10)->create();
        \App\Models\Episode::factory(10)->create();
        \App\Models\Movie::factory(10)->create();
        \App\Models\Director::factory(10)->create();

    }
}
