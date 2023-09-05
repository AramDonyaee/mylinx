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
        Schema::dropIfExists('data_rows');
        Schema::dropIfExists('data_types');
        Schema::dropIfExists('menu_items');
        Schema::dropIfExists('menus');
        Schema::dropIfExists('permission_role');
        Schema::dropIfExists('permissions');
        Schema::dropIfExists('user_roles');
        Schema::dropIfExists('settings');
        Schema::dropIfExists('translations');

    }

};
