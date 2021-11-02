<template>
<div>
  <!-- search -->
  <section class="product__search">
    <b-container>
      <b-row>
        <b-col sm="12" md="8">
          <b-form>
            <b-form-group
              label="Telusuri produk"
            >
            <div class="form-group__with-categories">
              <b-form-input
                placeholder="Contoh: Kain tenun"
              />
              <!-- categories -->
              <!-- end -->

              <!-- submit -->
              <button class="btn text-primary">
                <Icon icon="search"/>
              </button>
              <!-- end -->
            </div>
            </b-form-group>
          </b-form>


          <!-- badges -->
          <div class="badge-container">
            <p class="badge-title">Orang-orang juga menelusuri</p>
            <BadgeGroup :badges="['Kain', 'Anyaman', 'Rajutan']" v-model="badge"/>
          </div>
          <!-- end -->
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end -->

  <!-- title -->
  <section class="product__title">
    <b-container>
      <b-row>
        <b-col sm="12" md="8" lg="8">
          <h1>#BanggaBuatanIndonesia</h1>
          <p>Dekranasda mengajak para perajin untuk bergabung dan mengembangkan potensi produk kerajinan Jawa Timur bersama-sama.</p>


          <!-- search keyword -->
          <div class="searchable">
            <h2>
              Pencarian untuk “kain katun” tersedia 20 produk yang relevan.
            </h2>
          </div>
          <!-- end -->
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end -->

  <!-- product content -->
  <section class="product__content">
    <b-container>
      <b-row>
        <b-col cols="12" lg="5">
          <div class="product-lists">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </b-col>
        <b-col cols="12" lg="7">
          <div class="product-detail__modal">
            <ProductDetail/>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end -->
  <!-- badges disini -->
  
    <h1>Badge: {{ badge }}</h1>
</div>
</template>

<script>
import ProductCard from '~@/components/product-card';
import ProductDetail from '~@/components/product-detail';
import BadgeGroup from '~@/components/badge-group';


export default {
  components: {
    ProductCard,
    ProductDetail,
    BadgeGroup,
  },
  data() {
    return {
      badge: ''
    }
  },
  methods: {
    onClicked(value) {
      console.log('badge ditekan ' + value);
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/sass/product.scss';
</style>