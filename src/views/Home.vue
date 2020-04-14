<template>
  <div>
    <v-row justify="center" class="pa-5">
      <div class="blue-background primary"></div>
      <v-col md="4" sm="10">
        <v-card raised elevation="10">
          <v-img
            src="../assets/logo.jpg"
          />
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="8" sm="10" lg="6">
        <p>
          La industria de los videojuegos se ha vuelto uno de los negocios más
          rentables del último siglo, pero como cualquier industria no es perfecta.
          Metallium habla en este podcast temas relacionados con la industria dando
          su perspectiva del asunto. Únete a este podcast y escucha como la
          industria se mueve para que juntos la mejoremos.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="8" sm="10" lg="6">
        <h4 class="title">
          Escuchanos en...
        </h4>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn
        href="https://podcasts.apple.com/co/podcast/triple-a-gaming-podcast/id1507492268"
        target="_blank"
        rel="noopener"
        class="pa-5 ma-5"
        icon>
        <v-icon size="50" color="#8932c3">fas fa-podcast</v-icon>
      </v-btn>
      <v-btn
        href="https://open.spotify.com/show/0qpVwJDUbD5cqwDHQKpThb?si=LhqmkLjFTDGBoqGWybgRtw"
        target="_blank"
        rel="noopener"
        class="pa-5 ma-5"
        icon>
        <v-icon size="50" color="#1ed760">fab fa-spotify</v-icon>
      </v-btn>
    </v-row>
    <v-row justify="center">
      <v-col md="8" sm="10" lg="6">
        <iframe
          src="https://open.spotify.com/embed-podcast/show/0qpVwJDUbD5cqwDHQKpThb"
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"></iframe>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="8" sm="10" lg="6">
        <p class="justify-center">
          Music by: <a href="https://josephmcdade.com/music">JOSEPH MCDADE</a>
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="8" sm="10" lg="6">
        <h4 class="title">
          Siguenos en...
        </h4>
      </v-col>
    </v-row>
    <v-row justify="center">
      <a href="https://twitter.com/AAAGamingPod" target="_blank" rel="noopener">
        <v-icon class="pa-5" size="50" color="#1c9deb">fab fa-twitter</v-icon>
      </a>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
  .blue-background {
    height: 80%;
    margin-top: -50px;
    position: absolute;
    width: 100%;
  }

  .row {
    position: relative;
  }
</style>