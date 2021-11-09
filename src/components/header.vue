<template>
<header>
  <div class="header__social-contact">
    <b-container>
      <p>Ikuti kami</p>
      <ul>
        <li>
          <a href="#"><Icon :icon="['fab', 'facebook']" color="#1977F2" /></a>
        </li>
        <li>
          <a href="#"><Icon :icon="['fab', 'youtube']" color="#DA251A"/></a>
        </li>
      </ul>
    </b-container>
  </div>
  <b-navbar toggleable="lg">
    <b-container>
      <router-link class="navbar-brand" :to="{ name: 'Home'} ">
        Logo
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home'} ">
              Beranda
            </router-link>
          </li>
          <b-nav-item href="#dekranasda">Dekranasda Maluku</b-nav-item>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Product' }">
              Produk
            </router-link>
          </li>
          <b-nav-item href="#post">Kegiatan dan Berita</b-nav-item>
          <b-nav-item href="#footer">Kontak</b-nav-item>
          <b-nav-item target="__blank" :href="routeToLinkPage">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</header>

</template>

<script>
export default {
  name: 'Header',
  mounted() {
    console.log({
      env: process.env
    });
  },
  computed: {
    routeToLinkPage() {
      return process.env.VUE_APP_ENDPOINT + '/login';
    }
  }
}
</script>