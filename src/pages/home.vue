<template functional>
<div>
  <!-- banner -->
  <section></section>
  <!-- end -->

  <!-- information -->
  <section class="home__information">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="mb-3">
            Sekilas Tentang Dekranasda Maluku
            <span class="text-primary">
              #PerajinBerdaya
            </span>
          </h1>
          <p>
            Dekranasda Jawa Timur merupakan wadah untuk mengembangkan dan membangun industri kerajinan yang memiliki citra budaya lokal di Provinsi Jawa Timur. Dekranasda mengajak para perajin untuk bergabung dan mengembangkan potensi produk kerajinan Jawa Timur bersama-sama.
          </p>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="10">
          <h1 class="mb-4">Visi dan Misi Dekranasda Maluku</h1>
          <b-card class="position-relative card__label">
            <p class="label-box">Visi</p>
            <p>
              Menjadikan Dekranasda Provinsi jawa Timur sebagai wadah pembinaan serta pengendalian anggota pengerajin dan pengusaha yang bersaing di tingkat nasional.
            </p>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col md="10">
          <b-card class="position-relative card__label">
            <p class="label-box">Misi</p>
            <p>
              Menjadikan Dekranasda Provinsi jawa Timur sebagai wadah pembinaan serta pengendalian anggota pengerajin dan pengusaha yang bersaing di tingkat nasional.
            </p>
            <hr/>
            <p>
              Meningkatkan kualitas produk dan desain produk serta memperluas jaringan pasar dalam dan luar negeri.
            </p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end -->

  <!-- qoute -->
  <section class="home__gubernur">
    <b-container>
      <b-row>
        <b-col cols="3" lg><img :src="require('~@/assets/img/gubernur.png')" alt="Gubernur Maluku"/></b-col>
        <b-col md="12" lg="9">
          <h1 class="gubernur__qoute-title">Sambutan Gubernur Provinsi Maluku</h1>
          <div class="gubernur__qoute-content">
            <blockquote>
              Dekranasda itu berdiri untuk untuk mengawal kelestarian dan kearifan lokal yang ada di Indonesia dan khususnya kita yang ada di Ambon, Maluku. Harapannya kearifan lokal ini bukan hanya bertahan, tetapi juga bisa menambah nilai lebih khususnya nilai ekonomi bagi masyarakat.
            </blockquote>
            <span>Gubernur Provinsi Maluku - IRJEN POL (PURN) DRS. MURAD ISMAIL 2021.</span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end -->


  <!-- ads -->
  <section>

  </section>
  <!-- end -->

  <!-- articel -->
  <!-- end -->
</div>
</template>

<style lang="scss" scoped>
@import '~@/assets/sass/home.scss';
</style>