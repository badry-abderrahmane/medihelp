<template lang="html">
  <div class="card text-center">
      <div class="card-header">
          Paramètres compte
      </div>
      <div class="card-body">
          <h4 class="card-title">Changement de mot de passe</h4>
          <p class="card-text">Attention si vous oublier le mot de passe vous allez perdre l'accès à votre compte!<br>Assurer vous d'introduire un mot de passe contenant plus que 6 caractères: Chiffres et Lettres</p>
          <input type="text" name="password" class="form-control col-md-2" v-model="password">
          <a @click="changePassword" class="btn btn-danger">Changer</a>
      </div>
      <div class="card-footer text-muted">
          Dérnière mise à jour {{ $store.state.user.updated_at }}
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      password: ''
    }
  },
  methods:{
    changePassword(){
      axios.post('/changepassword', {
        password: this.password,
      })
      .then(function (response) {
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style lang="css">
</style>
