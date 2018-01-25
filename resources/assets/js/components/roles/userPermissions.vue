<template lang="html">
  <div class="table-responsive">
    <table v-if="permissions.length >= 1" class="table" >
        <thead>
            <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Display</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="permission in permissions">
                <td>{{ permission.id }}</td>
                <td><span class="label label-danger">{{ permission.name }}</span></td>
                <td>{{ permission.display_name }}</td>
                <td>{{ permission.description }}</td>
            </tr>
        </tbody>
    </table>
    <span v-else><center><i class="fa fa-battery-empty fa-2x" aria-hidden="true"></i> <br>Ce role n'a pas encore de permissions</center></span>
    <br><br>
    <div class="modal-footer">
      <center>
        <button v-if="permissions.length >= 1" type="submit" class="btn btn-warning waves-effect waves-light m-r-10">
                <span class="icon is-small">
                  <i class="fa fa-edit m-r-10"></i>
                </span>
                Modifier
        </button>
        <button v-else type="submit" class="btn btn-success waves-effect waves-light m-r-10">
                <span class="icon is-small">
                  <i class="fa fa-plus m-r-10"></i>
                </span>
                Ajouter
        </button>
    </center>
    </div>


  </div>
</template>

<script>
export default {
  props:["roleid"],
  data(){
    return {
      permissions: []
    }
  },
  created(){
    if (this.roleid) {
      axios.get('/roles/'+this.roleid)
        .then(response => {
          this.permissions = response.data.perms;
          console.log(response.data);
      });
    }
  },
}
</script>

<style lang="css">
</style>
