<template>
  <v-app>

    <Navbar />

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer />

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Login from '@/views/Login'

export default {
  name: 'App',
  components: { Navbar, Footer, Login, },
  data () {
    return {

    }
  }
};
</script>
