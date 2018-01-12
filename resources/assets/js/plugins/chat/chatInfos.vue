<template lang="html">
  <div class="panel panel-primary contact-card card-view">
    <div class="panel-wrapper collapse in">
      <div class="panel-body row">
        <div class="emp-detail pl-15 pr-15">
          <center>
          <div class="mb-5">
            <span class="inline-block capitalize-font mr-5">Ticket #Ref:</span><br>
            <span class="txt-dark">{{ ticket.reference }}</span><br>
          </div><br>
          <div class="mb-5">
            <span class="inline-block capitalize-font mr-5">Sujet:</span><br>
            <span class="txt-dark">{{ ticket.sujet }}</span><br>
          </div><br>
          <div class="mb-5">
            <span class="inline-block capitalize-font mr-5">Entreprise:</span><br>
            <span class="txt-dark">{{ ticket.client.name }}</span><br>
          </div><br>
          <div class="mb-5">
            <span class="inline-block capitalize-font mr-5">Date d'incident:</span><br>
            <span class="txt-dark">{{ ticket.date }}</span><br>
          </div><br>

          <div class="row">
            <div class="col-xs-6 text-center">
              <span class="counts block head-font"><i class="fa fa-phone-square mr-10"></i>Appels</span>
              <span class="counts-text block txt-dark">246</span>
            </div>
            <div class="col-xs-6 text-center">
              <span class="counts block head-font"><i class="fa fa-envelope mr-10"></i>Emails</span>
              <span class="counts-text block txt-dark">898</span>
            </div>
          </div><br>
          <div>
            <span class="inline-block capitalize-font mr-5">Responsable:</span><br>
            <span class="txt-dark">Walid</span><br>
          </div><br>
          <div>
            <span class="inline-block capitalize-font mr-5">Status:</span><br>
            <button v-if="ticket.state == 1" class="btn btn-danger btn-sm  btn-anim" @click="$router.push({ path: '/tickets/edit/'+ticket.client.id+'/'+ticket.id })">
              <i class="fa fa-pencil"></i>
              <span class="btn-text">FERME</span>
            </button>
            <button v-if="ticket.state == 2" class="btn btn-warning btn-sm  btn-anim" @click="$router.push({ path: '/tickets/edit/'+ticket.client.id+'/'+ticket.id })">
              <i class="fa fa-pencil"></i>
              <span class="btn-text">EN COURS</span>
            </button>
            <button v-if="ticket.state == 3" class="btn btn-success btn-sm  btn-anim" @click="$router.push({ path: '/tickets/edit/'+ticket.client.id+'/'+ticket.id })">
              <i class="fa fa-pencil"></i>
              <span class="btn-text">OUVERT</span>
            </button>
          </div><br>
          <div>
            <span class="inline-block capitalize-font mr-5">Action:</span><br>
            <button class="btn btn-primary btn-sm btn-outline btn-anim" @click="$router.push({ path: '/tickets/edit/'+ticket.client.id+'/'+ticket.id })">
              <i class="fa fa-pencil"></i>
              <span class="btn-text">{{ ticket.action.value }}</span>
            </button>
          </div><br>
          <div>
            <span class="inline-block capitalize-font mr-5">Note:</span><br>
            <span class="txt-dark">{{ ticket.note }}</span>
          </div><br>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["ticket"]
}
</script>

<style lang="css">
</style>
