<?php


namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class NewsSeeder extends Seeder
{
    /**
     * Посев тестовых данных в БД для таблицы News
     * @return void
     * @author Kravchenko Dmitriy
     */
    public function run()
    {
        DB::table('news')->insert([
            'title'       => Str::random(10),
            'description' => Str::random(10),
            'text'        => Str::random(10),
            'created_at'  => Carbon::today()->subDays(rand(0, 365))
        ]);
    }
}
