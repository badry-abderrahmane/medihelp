<template lang="html">
  <v-container
      fluid
      style="min-height: 0;"
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12 md4 offset-md4>
          <v-card color="teal darken-3" class="white--text">
            <v-card-title primary-title>
              <div class="headline">Register</div>
            </v-card-title>

              <v-flex xs12>
                <v-form v-model="valid">
                  <v-text-field dark color="green"
                    label="Name"
                    v-model="name"
                    :counter="10"
                    :error="nameError"
                    required
                  ></v-text-field>
                  <v-text-field dark color="green"
                    label="E-mail"
                    v-model="email"
                    :error="emailError"
                    required
                  ></v-text-field>
                  <v-text-field dark color="green"
                    label="Password"
                    v-model="password"
                    :error="passwordError"
                    required
                  ></v-text-field>
                  <v-text-field dark color="green"
                    label="Confirm Password"
                    v-model="password_confirmation"
                    required
                  ></v-text-field>

                  <ul v-if="errors">
                    <li v-for="error in errors">
                      <span class="body-2 error--text ml-5">{{ error[0] }}</span>
                    </li>
                  </ul>

                </v-form>
              </v-flex>

            <v-card-actions>
              <v-btn flat dark @click="register">Register</v-btn>&nbsp;Or&nbsp;
              <v-btn flat dark @click="$router.push({ path:'login' })">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  data(){
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      nameError: false,
      emailError: false,
      passwordError: false,

      valid: false,
      show: true,
      errors:'',
    }
  },
  methods:{
    register(){
      this.nameError = false
      this.emailError = false
      this.passwordError = false

      axios.post('/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
      .then((response) => {
        this.$router.push({ path:"/" })
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
        if (this.errors.name) {
          this.nameError = true
        }
        if (this.errors.email) {
          this.emailError = true
        }
        if (this.errors.password) {
          this.passwordError = true
        }
      });
    }
  }
}
</script>

<style lang="css">
</style>
