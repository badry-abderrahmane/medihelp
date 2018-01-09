<template lang="html">
  <table-warper>
    <div class="table-responsive" slot="content">
      <datatable-buttons>
        <tr slot="thead">
          <th>#ID</th>
          <th>Nom</th>
          <th></th>
        </tr>
        <tr slot="tbody" v-for="action in actions">
          <td>{{ action.id }}</td>
          <td>{{ action.value }}</td>
          <td>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/actions/edit/`+action.id })"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/actions/delete/`+action.id })"><i class="fa fa-trash"></i></button>
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
      actions:  [],
    }
  },

  created(){
    axios.get('/actions')
      .then(response => {
        this.actions = response.data;
        Vue.nextTick(function () {
          Event.$emit('init-datatable', 'tableAdd');
        })
    });
  }
}
</script>

<style lang="css">
</style>
