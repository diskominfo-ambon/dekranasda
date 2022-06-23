<template>
<div>
  <!-- banner -->
  <section class="home__banner">
    <b-container>
      <b-row>
        <b-col sm="12" lg="6">
          <h1>Bergabung bersama perajin Maluku, untuk terus berkarya di Masa Pandemi.</h1>
          <div class="mt-4">
            <a class="btn btn-lg btn-primary">
              Ikut bergabung
            </a>
            <span>Dengan bargabung Anda sudah menyetujui semua <a class="text-primary" href="#">kebijakan dan ketentuan</a> yang berlaku.</span>
          </div>
        </b-col>
        <b-col sm="12" lg="6" class="is-d-sm-none">
          <!-- carousel -->
          <b-carousel
            class="carousel__banner"
            indicators
            background="#ababab"
            img-width="1024"
            img-height="580"
          >
            <b-carousel-slide img-blank caption="Gambar 1"></b-carousel-slide>
            <b-carousel-slide img-blank caption="Gambar 2"></b-carousel-slide>
            <b-carousel-slide img-blank caption="Gambar 3"></b-carousel-slide>
          </b-carousel>
          <!-- end -->
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end -->

  <!-- information -->
  <section class="home__information" id="dekranasda">
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
            Dekranasda Kota Maluku merupakan wadah untuk mengembangkan dan membangun industri kerajinan yang memiliki citra budaya lokal di Kota Maluku. Dekranasda mengajak para perajin untuk bergabung dan mengembangkan potensi produk kerajinan Maluku bersama-sama.
          </p>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col md="12" lg="10">
          <h1 class="mb-4">Visi dan Misi Dekranasda Maluku</h1>
          <b-card>
            <p class="label-box">Visi</p>
            <p>
              Menjadikan Dekranasda Kota Maluku sebagai wadah pembinaan serta pengendalian anggota pengerajin dan pengusaha yang bersaing di tingkat nasional.
            </p>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col md="12" lg="10">
          <b-card>
            <p class="label-box">Misi</p>
            <p>
              Menjadikan Dekranasda Kota Maluku sebagai wadah pembinaan serta pengendalian anggota pengerajin dan pengusaha yang bersaing di tingkat nasional.
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
        <b-col cols="3"><img :src="require('~@/assets/img/ibu-walikota.png')" alt="Gubernur Maluku"/></b-col>
        <b-col md="12" lg="8">
          <h1 class="gubernur__qoute-title">Sambutan Ketua Dekranasda Kota Maluku</h1>
          <div class="gubernur__qoute-content">
            <blockquote>
              Dekranasda itu berdiri untuk untuk mengawal kelestarian dan kearifan lokal yang ada di Indonesia dan khususnya kita yang ada di Ambon, Maluku. Harapannya kearifan lokal ini bukan hanya bertahan, tetapi juga bisa menambah nilai lebih khususnya nilai ekonomi bagi masyarakat.
            </blockquote>
            <span>Felisa Maria Kalalo - Ketua Dekranasda kota Ambon.</span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end -->


  <!-- ads -->
  <section class="home__ads">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1>Batik Indonesia</h1>
          <p>Selamat Hari Batik Nasional! Yuk Bangga Pakai Batik! <span class="text-primary">#BanggaBuatanIndonesia</span></p>
        </b-col>
        <b-col cols="12">
          <iframe src="https://www.youtube.com/embed/c-R3Vd1Gyu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <span>Sumber DEKRANAS Indonesia • Youtube</span>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end -->

  <!-- articel -->
  <section class="home__post" id="post">
    <b-row>
      <b-col>
        <Divider
          class="bg-primary"
          title="Kegiatan dan Berita"
          subtitle="Semua kegiatan serta informasi liputan media"
        />
      </b-col>
    </b-row>
    <b-container class="mt-5">
      <b-row>
        <b-col cols="12">
          <b-skeleton-wrapper :loading="postsIsLoaded">
            <template #loading>
              <PostCardSkeleton v-for="n in 3" :key="n" />
            </template>
            <PostCard v-for="post in posts" :key="post.id" :data="post"/>
          </b-skeleton-wrapper>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end -->
</div>
</template>

<script>
import Divider from '~@/components/divider';
import PostCard from '~@/components/post-card';
import PostCardSkeleton from '~@/components/post-card-skeleton';
import useFetch from '~@/utils/use-fetch';

export default {
  components: {
    Divider,
    PostCard,
    PostCardSkeleton
  },
  data() {
    return {
      posts: []
    }
  },
  computed: {
    postsIsLoaded() {
      return this.posts.length <= 0;
    }
  },
  methods: {
    fetchPosts() {
      useFetch('/posts')
        .then(res => {
          if (res.error) throw new Error('Error 500: Terjadi masalah, saat memuat [posts].');
          this.posts = res.data;

        }).catch(err => {
          alert(err.message);
        });
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/home.scss';
</style>