<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('background_color')->nullable();
            $table->string('background_path', 2048)->nullable();
            $table->string('avatar_path', 2048)->nullable();
            $table->string('bio')->nullable();
            $table->string('title');
            $table->unsignedBigInteger('font_id')->nullable();
            $table->string('link_border_thickness')->default(0);
            $table->string('link_border_radius')->default(0);
            $table->string('link_background_color')->default('white');
            $table->string('link_border_color')->default('black');
            $table->string('link_text_color')->default('black');

            $table->unsignedBigInteger('user_id');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
};
