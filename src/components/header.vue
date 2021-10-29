<template functional>
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
      <b-navbar-brand href="#">LOGO</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>Beranda</b-nav-item>
          <b-nav-item>Dekranasda Maluku</b-nav-item>
          <b-nav-item>Produk</b-nav-item>
          <b-nav-item>Kegiatan dan Berita</b-nav-item>
          <b-nav-item>Kontak</b-nav-item>
          <b-nav-item>Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</header>

</template>