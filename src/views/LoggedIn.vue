<template>
    <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center mr-2">
        <router-link to="/">
            <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
            />
        </router-link>
      </div>

      <v-btn to="/" text>
        Data
      </v-btn>
      <v-btn to="/report" text>
        Report  
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn to="/login" color="white" class="blue--text">Logout&nbsp;<v-icon>mdi-logout</v-icon></v-btn>
    </v-app-bar>

    <v-main style="margin-bottom:1%">
      <router-view></router-view>
    </v-main>

    <Footer/>
  </v-app>
    
</template>

<script>
import Footer from '@/components/FooterComp.vue'

export default {
    name: "LoggedIn",
    components: {
      Footer
    }
}
</script>