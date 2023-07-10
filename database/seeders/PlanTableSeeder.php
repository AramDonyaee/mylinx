<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Plan;

class PlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Plan::create([
            'name' => 'PRO Monthly',
            'slug' => 'pro-monthly',
            'stripe_name' => 'pro-monthly',
            'stripe_id' => 'price_1NMYgTGRBlz0WO8MrxjNWPIv',
            'price' => 3.50,
            'abbreviation' => '/month',
        ]);

        Plan::create([
            'name' => 'PRO Yearly',
            'slug' => 'pro-yearly',
            'stripe_name' => 'pro-yearly',
            'stripe_id' => 'price_1NN9BOGRBlz0WO8MdXcNKa0z',
            'price' => 35,
            'abbreviation' => '/year',
        ]);
    }
}
