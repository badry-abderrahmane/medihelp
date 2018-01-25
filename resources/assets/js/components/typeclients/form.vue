<template lang="html">
  <div>
    <part-panel color="success">
      <div slot="heading">
        Types de clients
      </div>
      <div slot="body">
        <div class="row">
          <div class="col-md-8">
            <input type="text" name="name" class="form-control" v-model="value">
          </div>
          <div class="col-md-4">
            <div v-if="!editing">
              <button v-if="!editing" class="btn btn-success" @click="onSubmit">
                <i class="fa fa-plus m-r-10"></i>Ajouter
              </button>
            </div>
            <div v-else>
              <button class="btn btn-warning" @click="onSubmit">
                <i class="fa fa-save"></i>
              </button>
              <button class="btn btn-success" @click="prepareAdd">
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <br>
        <TypeclientsList></TypeclientsList>
      </div>
    </part-panel>
  </div>
</template>

<script>
    import TypeclientsList from './../typeclients/list.vue';
    export default {
        components: {
          TypeclientsList
        },
        data(){
          return{
            id: '',
            value: '',
            editing: false,
          }
        },
        created(){
          Event.$on('edit-typeclient', (typeclient) => {
            this.id    = typeclient.id;
            this.value = typeclient.value;
            this.editing = true;
          });
        },
        methods: {
          onSubmit(){
            if (this.value != '') {
              if (this.id != '') {
                axios.put('/typeclients/'+this.id, {
                  id: this.id,
                  value: this.value,
                })
                .then((response) => {
                  this.$store.dispatch('LOAD_TYPECLIENTS_LIST')
                  Event.$emit('publish-success-message', data.message);
                  this.prepareAdd();
                })
                .catch(function (error) {
                  console.log(error);
                });
              }else{
                axios.post('/typeclients', {
                  value: this.value,
                })
                .then((response) => {
                  this.$store.dispatch('LOAD_TYPECLIENTS_LIST')
                  Event.$emit('publish-success-message', data.message);
                  this.prepareAdd();
                })
                .catch(function (error) {
                  console.log(error);
                });
              }
            }
          },
          prepareAdd(){
            this.id    = '';
            this.value = '';
            this.editing = false;
          }
        }
    }
</script>

<style lang="css">
</style>
