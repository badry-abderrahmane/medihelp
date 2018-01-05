<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTicketsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->increments('id');
            $table->string('reference');
            $table->date('date');
            $table->string('sujet');
            $table->string('note')->nullable();
            $table->integer('action_id')->unsigned();
            $table->integer('contact_id')->unsigned();

            $table->foreign('action_id')
                  ->references('id')->on('actions')
                    ->onDelete('cascade');

            $table->foreign('contact_id')
                  ->references('id')->on('contacts')
                    ->onDelete('cascade');

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
        Schema::dropIfExists('tickets');
    }
}
