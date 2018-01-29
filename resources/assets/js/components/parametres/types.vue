<template lang="html">
  <div class="row">
    <div class="col-md-3">
      <ActionForm></ActionForm>
    </div>
    <div class="col-md-3">
      <TypeclientsForm></TypeclientsForm>
    </div>
    <div class="col-md-3">
      <TypecommsForm v-if="$store.state.role < 2"></TypecommsForm>
    </div>
    <div class="col-md-3">
      <EtatsForm v-if="$store.state.role < 2"></EtatsForm>
    </div>
  </div>
</template>

<script>
import ActionForm from './../actions/form.vue';
import TypeclientsForm from './../typeclients/form.vue';
import TypecommsForm from './../typecomms/form.vue';
import EtatsForm from './../etats/form.vue';

export default {
  components: {
    ActionForm,
    TypeclientsForm,
    TypecommsForm,
    EtatsForm
  },
}
</script>

<style lang="css">
</style>
