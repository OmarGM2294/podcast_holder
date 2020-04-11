<template>
  <div id="app">
    <v-app>
      <v-app-bar
        color="primary"
        flat
        dark
        app
        hide-on-scroll
      >
        <v-spacer></v-spacer>

        <router-link to="/">
          <v-btn text :ripple="false">
            Inicio
          </v-btn>
        </router-link>

        <!--<router-link to="/about">
          <v-btn text :ripple="false">
            METALLIUM
          </v-btn>
        </router-link>-->
      </v-app-bar>
      <v-content>
        <router-view/>
      </v-content>
      <v-footer dark>
        <v-col
          class="text-center"
          cols="12"
        >
          &copy; {{ new Date().getFullYear() }}
        </v-col>
      </v-footer>
    </v-app>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  a {
    text-decoration: none;
  }
</style>
