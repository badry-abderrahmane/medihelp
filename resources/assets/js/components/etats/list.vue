<template lang="html">
  <table-warper>
    <div class="table-responsive" slot="content">
      <datatable-buttons>
        <tr slot="thead">
          <th>#ID</th>
          <th>Nom</th>
          <th></th>
        </tr>
        <tr slot="tbody" v-for="etat in etats">
          <td>{{ etat.id }}</td>
          <td>{{ etat.value }}</td>
          <td>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/etats/edit/`+etat.id })"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/etats/delete/`+etat.id })"><i class="fa fa-trash"></i></button>
          </td>
        </tr>
      </datatable-buttons>
    </div>
  </table-warper>
</template>

<script>
export default {
  data(){
    return {
      etats:  [],
    }
  },

  created(){
    axios.get('/etats')
      .then(response => {
        this.etats = response.data;
        Vue.nextTick(function () {
          Event.$emit('init-datatable', 'tableAdd');
        })
    });
  }
}
</script>

<style lang="css">
</style>
