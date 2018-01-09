<template lang="html">
  <table-warper>
    <div class="table-responsive" slot="content">
      <datatable-buttons>
        <tr slot="thead">
          <th>#ID</th>
          <th>Nom</th>
          <th></th>
        </tr>
        <tr slot="tbody" v-for="typecomm in typecomms">
          <td>{{ typecomm.id }}</td>
          <td>{{ typecomm.value }}</td>
          <td>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/typecomms/edit/`+typecomm.id })"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/typecomms/delete/`+typecomm.id })"><i class="fa fa-trash"></i></button>
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
      typecomms:  [],
    }
  },

  created(){
    axios.get('/typecomms')
      .then(response => {
        this.typecomms = response.data;
        Vue.nextTick(function () {
          Event.$emit('init-datatable', 'tableAdd');
        })
    });
  }
}
</script>

<style lang="css">
</style>
