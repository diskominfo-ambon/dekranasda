<template>
<main>
  <b-container>
    <header class="post-header">
      <b-row>
        <b-col sm="12" md="6" lg="6" offset-lg="1">
          <h1 class="post-title">Kembali Gelar 3D Printing Competition, Upaya Dekranasda Jatim Menggali Inovasi Desainer</h1>
          <!-- eslint-disable-next-line no-irregular-whitespace -->
          <span class="post-published"><span class="text-primary"><Icon icon="calendar-week"/> 12 Januari 2000</span> • Meta data • <Icon icon="grin-beam" /> Sudah dilihat oleh 239K pengguna</span>
          <div class="share-this">
            <p class="share-this__title">Bagikan</p>
            <!-- This is the placement code ShareThis provides. -->
            <div class="sharethis-inline-share-buttons"></div>
          </div>
        </b-col>
        <b-col sm="12" md="6" lg="5">
          <div class="post-cover">
            <p>Gambar tidak tersedia</p>
          </div>
        </b-col>
      </b-row>
    </header>
  </b-container>
  <b-container>
    <p>Kementerian Perhubungan (Kemenhub) bersama Dewan Kerajinan Nasional (Dekranas) memberikan pelatihan kewirausahaan berbasis teknologi digital kepada 52 pengrajin usaha mikro dan kecil (UMK) Yogyakarta. Berlangsung selama 5 hari mulai 24 hingga 28 November 2020, pelatihan yang berlangsung di Balai Besar Kerajinan dan Batik (BBKB) Yogyakarta tersebut bertujuan untuk menumbuhkan wirausaha baru kriya untuk mendukung pengembangan Destinasi Pariwisata Super Prioritas Borobudur.</p>
  </b-container>
</main>
</template>

<script>
export default {
  mounted() {
    const st = window.__sharethis__
    if (!st) {
      const script = document.createElement('script')
      script.src =
        'https://platform-api.sharethis.com/js/sharethis.js#property=617cb7a3f80065001934eb1b&product=inline-share-buttons'
      document.body.appendChild(script)
    } else if (typeof st.initialize === 'function') {
      st.href = window.location.href
      st.initialize()
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/sass/post.scss';
</style>