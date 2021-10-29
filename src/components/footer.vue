<template>
<footer>
  <Divider
    class="border-bottom"
    title="Kontak"
    subtitle="Hubungi kami"
  />

  <b-container>
    <b-row>
      <b-col sm="12" md="3">
        <h3>Hubungi kami</h3>
        <ul>
          <li><a href="">Facebook</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Email</a></li>
          <li><a href="">+628525414033</a></li>
        </ul>
      </b-col>
      <b-col sm="12" md="3">
        <h3>Dukungan</h3>
        <ul>
          <li><a href="">Dekranas Indonesia</a></li>
          <li><a href="">Pemerintahan Provinsi Maluku</a></li>
          <li><a href="">Dinas Komunikasi dan Persandian Kota Ambon</a></li>
          <li><a href="">Facebook Perajin Maluku</a></li>
        </ul>
      </b-col>
    </b-row>
  </b-container>

  <b-container>
    <b-row>
      <b-col cols="12" class="text-center">
        <small class="text-secondary">Dekranas Pemerintah Kota Ambon &copy; 2021 • Dibuat dengan 💖</small>
      </b-col>
    </b-row>
  </b-container>
</footer>
</template>
<script>
import Divider from '~@/components/divider';

export default {
  name: 'Footer',
  components: {
    Divider
  }
}
</script>