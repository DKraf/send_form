<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableRequest extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('request', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('pdf');
            $table->string('legal_address');
            $table->integer('post_code');
            $table->string('company_phone');
            $table->string('company_email');
            $table->string('bin');
            $table->string('iik');
            $table->string('bank_name');
            $table->string('bik');
            $table->string('director_name');
            $table->string('respons_person');
            $table->string('respons_phone');
            $table->string('respons_email');
            $table->string('domen');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_request');
    }
}
