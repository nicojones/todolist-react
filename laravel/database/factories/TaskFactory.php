<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $randomProject = Project::all()->random();
        $allSubtasks = Task::all();

        if (fake()->boolean() && count($allSubtasks)) {
            $randomTask = $allSubtasks->random();

            return [
                'name' => fake()->words(3, true),
                'description' => fake()->words(rand(0, 10), true),
                // 'done' => fake()->boolean(),
                // 'expanded' => fake()->boolean(),
                'level' => $randomTask->level + 1,
                // 'parentTask' => $randomTask,
                'priority' => fake()->randomElement([0, 0, 0, 1, 2, 3]),
                'parent_id' => $randomTask->id,
                'project_id' => $randomTask->project->id
            ];
        } else {
            
            return [
                'name' => fake()->words(3, true),
                'description' => fake()->words(rand(0, 10), true),
                'priority' => fake()->randomElement([0, 0, 0, 1, 2, 3]),
                // 'done' => fake()->boolean(),
                // 'expanded' => fake()->boolean(),
                // 'level' => 1,
                // 'parent_task_id' => null,
                'project_id' => $randomProject->id
            ];
        }
    }
}
