<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->text(20),
            'director'=> $this->faker->name(),
            'genre' => $this->faker->randomElement(['terror','romance' ,'comedy', 'thriller','action','fantasy'])
        ];
    }
}
