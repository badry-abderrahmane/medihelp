<template lang="html">
  <table-warper>
    <div class="table-responsive" slot="content">
      <datatable-buttons>
        <tr slot="thead">
          <th>#ID</th>
          <th>Nom</th>
          <th>Type</th>
          <th>Tel</th>
          <th>Secteur</th>
          <th>Action</th>
        </tr>
        <tr slot="tbody" v-for="entreprise in entreprises">
          <td>{{ entreprise.id }}</td>
          <td>{{ entreprise.name }}</td>
          <td>{{ entreprise.type }}</td>
          <td>{{ entreprise.phone }}</td>
          <td>{{ entreprise.secteur }}</td>
          <td>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/entreprises/show/`+entreprise.id })"><i class="fa fa-eye"></i></button>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/entreprises/edit/`+entreprise.id })"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-default btn-icon-anim btn-circle" @click="$router.push({ path: `/entreprises/delete/`+entreprise.id })"><i class="fa fa-trash"></i></button>
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
      entreprises:  [
        { id:1, name:'Mega Trans', type:'Client', phone:'0622321456', secteur:'Transport'},
        { id:2, name:'Firdawss Trans', type:'Client test', phone:'0623344563', secteur:'Transport'},
      ],
    }
  },

  created(){
    Vue.nextTick(function () {
      Event.$emit('init-datatable', 'tableAdd');
    })
    // axios.get('/entreprises')
    //   .then(response => {
    //     this.entreprises = response.data;
    //     Vue.nextTick(function () {
    //       Event.$emit('init-datatable', 'tableAdd');
    //     })
    // });
  }
}
</script>

<style lang="css">
</style>
