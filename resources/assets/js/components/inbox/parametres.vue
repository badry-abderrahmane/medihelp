<template lang="html">
<div class="row">
  <div class="col-md-6">
    <part-panel color="success">
      <div slot="heading" >
        Paramètres Authentification
      </div>
      <div slot="body">
        <div class="row">
          <div class="col-md-12">
            <part-input-warper name="server" label="Server" :form="form" vclass="col-md-12">
              <input name="server" v-model="form['server']" class="form-control" disabled slot="input">
            </part-input-warper>
            <part-input-warper name="port" label="Port" :form="form" vclass="col-md-12">
              <input name="port" v-model="form['port']" class="form-control" disabled slot="input">
            </part-input-warper>
            <part-input-warper name="email" label="Email" :form="form" vclass="col-md-12">
              <input name="email" v-model="form['email']" class="form-control" slot="input">
            </part-input-warper>
            <part-input-warper name="pasword" label="Password" :form="form" vclass="col-md-12">
              <input name="password" v-model="form['password']" class="form-control" slot="input">
            </part-input-warper>
            <button class="btn btn-warning btn-block" @click="onSubmit">
              <i class="fa fa-refresh m-r-10"></i>Mettre à jour
            </button>
          </div>
        </div>
        <br>
      </div>
    </part-panel>
  </div>
  <div class="col-md-6">
    <part-panel color="warning">
      <div slot="heading" >
        Test Output
      </div>
      <div slot="body">
        <div class="row">
          <div class="col-md-12">
            <part-input-warper name="server" label="Server" :form="form" vclass="col-md-12">
              <input name="server" v-model="form['server']" class="form-control" disabled slot="input">
            </part-input-warper>
            <part-input-warper name="port" label="Port" :form="form" vclass="col-md-12">
              <input name="port" v-model="form['port']" class="form-control" disabled slot="input">
            </part-input-warper>
            <part-input-warper name="email" label="Email" :form="form" vclass="col-md-12">
              <input name="email" v-model="form['email']" class="form-control" slot="input">
            </part-input-warper>
            <part-input-warper name="pasword" label="Password" :form="form" vclass="col-md-12">
              <input name="password" v-model="form['password']" class="form-control" slot="input">
            </part-input-warper>
            <button class="btn btn-success btn-block" @click="onSubmit">
              <i class="fa fa-inbox-in m-r-10"></i>Test InComing
            </button>
            <button class="btn btn-success btn-block" @click="onSubmit">
              <i class="fa fa-inbox-out m-r-10"></i>Test OutGoing
            </button>
          </div>
        </div>
        <br>
      </div>
    </part-panel>
  </div>
</div>
</template>

<script>
    import { Form } from './../../api/form.js';
    export default {
        data(){
          return{
            form : new Form({
              id:'',
              server: 'imap.gmail.com',
              port: '456',
              email: '',
              password: '',
            }),
          }
        },
        created(){

        },
        methods: {
        }
    }
</script>

<style lang="css">
</style>
