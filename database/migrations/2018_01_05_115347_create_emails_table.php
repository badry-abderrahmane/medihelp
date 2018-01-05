<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('emails', function (Blueprint $table) {
            $table->increments('id');
            $table->date('date');
            $table->string('sujet');
            $table->string('message')->nullable();

            $table->foreign('typecomm_id')
                  ->references('id')->on('typecomms')
                    ->onDelete('cascade');
            $table->foreign('action_id')
                  ->references('id')->on('actions')
                    ->onDelete('cascade');
            $table->foreign('etat_id')
                  ->references('id')->on('etats')
                    ->onDelete('cascade');
            $table->foreign('ticket_id')
                  ->references('id')->on('tickets')
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
        Schema::dropIfExists('emails');
    }
}
