<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Plan;

class ATNETPlanTableSeeder extends Seeder
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
            'price' => 5.95,
        ]);

        Plan::create([
            'name' => 'PRO Yearly',
            'price' => 27,
        ]);
    }
}
