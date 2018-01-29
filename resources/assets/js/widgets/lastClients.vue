<template lang="html">
  <div>
    <table-warper>
      <div slot="heading">
        Dérniers clients ajoutés
      </div>
      <div class="table-responsive" slot="content">
        <datatable-buttons>
          <tr slot="tbody" v-for="client in clients">
            <td>{{ client.text }}</td>
            <td>
              <button class="btn btn-outline-info" @click="$router.push({ path: `/clients/show/`+client.value })"><i class="fa fa-eye"></i></button>
            </td>
          </tr>
        </datatable-buttons>
      </div>
    </table-warper>
  </div>
</template>

<script>
export default {
  computed:{
    clients: function(){
      return this.$store.state.clients.slice(0, 10)
    },
  }
}
</script>

<style lang="css">
</style>
