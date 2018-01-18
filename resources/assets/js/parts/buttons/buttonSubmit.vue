<template lang="html">
  <div class="col-md-6">
    <div class="pull-right">
      <button type="submit"
              v-bind:class="[editing ? 'btn-warning' : 'btn-success', 'btn waves-effect waves-light m-r-10']"
              >
              <span class="icon is-small">
                <i v-bind:class="[editing ? 'fa-refresh' : 'fa-save', 'fa m-r-10']"></i>
              </span>
              {{ editing ? 'Mettre à jour' : 'Enregistrer' }}
      </button>
    </div>

  </div>
</template>

<script>
export default {
  props:["value","editing"],
}
</script>

<style lang="css">
</style>
