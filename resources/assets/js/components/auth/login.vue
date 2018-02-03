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
              <div class="headline">Login</div>
            </v-card-title>

              <v-flex xs12>
                <v-form v-model="valid">
                  <v-text-field dark color="green"
                    label="Email"
                    v-model="email"
                    :counter="10"
                    :error="emailError"
                    required
                  ></v-text-field>
                  <v-text-field dark color="green"
                    v-model="password"
                    label="Enter your password"
                    :append-icon="show ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (show = !show)"
                    :type="show ? 'password' : 'text'"
                    :error="passwordError"
                  ></v-text-field>

                    <ul v-if="errors">
                      <li v-for="error in errors">
                        <span class="body-2 error--text ml-5">{{ error[0] }}</span>
                      </li>
                    </ul>

                </v-form>
              </v-flex>

            <v-card-actions>
              <v-btn flat dark @click="login">Login</v-btn>&nbsp;Or&nbsp;
              <v-btn flat dark @click="$router.push({ path:'register' })">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      show: true,
      email: '',
      password: '',
      errors:'',
      emailError: false,
      passwordError: false,
    }
  },
  methods:{
    login(){
      axios.post('/login', {
        email: this.email,
        password: this.password
      })
      .then((response) => {
        this.$router.push({ path:"/" })
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
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
