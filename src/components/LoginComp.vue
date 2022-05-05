<template>
  <v-app>
    <div class="" id="form-login">
      <v-card>
          <v-container fluid class="container elevation-12">
            <h1>Login</h1>

            <v-form>
              <v-text-field
                prepend-icon="mdi-account"
                name="username"
                label="username"
                type="text"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
                name="password"
                label="password"
                hint="at least 8 character"
                class="input-group--focused"
              ></v-text-field>
            </v-form>
            <br>
            <v-card-action>
              <v-btn color="primary" to="/" block>Login</v-btn>
            </v-card-action>
          </v-container>
      </v-card>
    </div>
  </v-app>
</template>

<style lang="css">
#form-login {
  width: 60%;
  margin: auto;
}



</style>

<script>
export default {
  name: "LoginComp",
  data() {
    return {
      show: false,
    };
  },
};
</script>