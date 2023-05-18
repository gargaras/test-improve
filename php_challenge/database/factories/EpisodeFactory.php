<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Episode>
 */
class EpisodeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'id_episode' => $this->faker->randomDigitNotNull(),
            'id_season' => $this->faker->randomDigitNotNull(),
            'name' => $this->faker->text(10),
            'description' => $this->faker->text(50),
            'director' => $this->faker->name,
            'tvshow' => $this->faker->text(20),
        
        
        ];
    }
}
