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
        Schema::table('pages', function (Blueprint $table) {
            $table->string('link_border_thickness')->default(0)->nullable()->change();
            $table->string('link_border_radius')->default(0)->nullable()->change();
            $table->string('link_background_color')->default('white')->nullable()->change();
            $table->string('link_border_color')->default('black')->nullable()->change();
            $table->string('link_text_color')->default('black')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pages', function (Blueprint $table) {
            $table->string('link_border_thickness')->default(0)->change();
            $table->string('link_border_radius')->default(0)->change();
            $table->string('link_background_color')->default('white')->change();
            $table->string('link_border_color')->default('black')->change();
            $table->string('link_text_color')->default('black')->change();
        });
    }
};
