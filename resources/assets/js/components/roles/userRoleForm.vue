<template lang="html">
  <div>
      <form v-on:submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6">
              <div v-bind:class="[ form.errors.get('user_id') ? 'has-danger' : '', 'form-group']">
                <label for="State" class="control-label mb-10">Utilisateur</label>
                <basic-select :options="users"
                              :selected-option="selectedUser"
                              placeholder="select user"
                              @select="onSelectUser">
                </basic-select>
                <!-- <model-select :options="users" v-model="selectedUser">
               </model-select> -->
               <div class="form-control-feedback" v-if="form.errors.has('user_id')" v-text="form.errors.get('user_id')"></div>
              </div>
            </div>
            <div class="col-md-6">
              <div v-bind:class="[ form.errors.get('role_id') ? 'has-danger' : '', 'form-group']">
                <label for="State" class="control-label mb-10">Role</label>
                <basic-select :options="roles"
                              :selected-option="selectedRole"
                              placeholder="select role"
                              @select="onSelectRole">
                </basic-select>
                <!-- <model-select :options="roles" v-model="selectedRole">
               </model-select> -->
               <div class="form-control-feedback" v-if="form.errors.has('role_id')" v-text="form.errors.get('role_id')"></div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <center>
            <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">
                    <span class="icon is-small">
                      <i class="fa fa-save m-r-10"></i>
                    </span>
                    Enregistrer
            </button>
          </center>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import { ModelSelect } from 'vue-search-select'
import { BasicSelect } from 'vue-search-select'
import { Form } from './../../api/form.js';
export default {
  components: {
    ModelSelect,
    BasicSelect
  },
  props:["userid","roleid"],
  data(){
      return{
        form : new Form({
          user_id:'',
          role_id:'',
        }),
        selectedRole:'',
        selectedUser:'',
      }
    },
    computed:{
      users: function(){
        return this.$store.state.users
      },
      roles: function(){
        return this.$store.state.roles
      },
    },
    mounted(){
      this.getUser()
      this.getRole()
    },
    methods: {
      onSelectUser (item) {
        this.selectedUser = item
      },
      onSelectRole (item) {
        this.selectedRole = item
      },
      getUser(){
        this.selectedUser = {}
        if (this.userid) {
          this.$store.state.users.map((value,key) => {
            if (value.value == this.userid) {
              this.selectedUser = value
            }
          });
        }
      },
      getRole(){
        this.selectedRole = {}
        if (this.roleid) {
          this.$store.state.roles.map((value,key) => {
            if (value.value == this.roleid) {
              this.selectedRole = value
            }
          });
        }
      },
      onSubmit(){
        this.form.user_id = this.selectedUser.value;
        this.form.role_id = this.selectedRole.value;
        this.form.post('/users/roles/attach')
          .then(data => {
            //this.$store.dispatch('LOAD_CLIENTS_LIST')
            Event.$emit('publish-success-message', data.message);
            this.$router.go({ path:'users' })
          })
          .catch(errors =>{
            console.log(errors);
          });
      },

      goback(){
          this.$router.go(-1);
      }
    }
}
</script>

<style lang="css">
</style>
