<template>
<div>
  <!-- search -->
  <section class="product__search">
    <b-container>
      <b-row>
        <b-col sm="12" md="8">
          <SearchInput/>

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
        <b-col cols="12">
            <b-skeleton-wrapper :loading="!productsIsLoaded">
              <template #loading>
                <div class="product-lists">
                  <ProductCardSkeleton v-for="n in 10" :key="n"/>
                </div>
              </template>
              <div class="product-lists">
                <ProductCard 
                  v-for="product in products" 
                  :key="product.id" 
                  :data="product"
                  @click.native="onProductCardClicked(product)"
                />
              </div>
            </b-skeleton-wrapper>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- end -->
  <!-- modal product detail -->
  <b-modal id="bv-modal-product" size="lg" hide-footer>
    <template #modal-title>
      <span>Informasi selengkapnya</span>
    </template>
    <div class="d-block text-center">
      <ProductDetail :data="selectedProduct"/>
    </div>
  </b-modal>
  <!-- end -->
</div>
</template>

<script>
import ProductCard from '~@/components/product-card';
import ProductDetail from '~@/components/product-detail';
import BadgeGroup from '~@/components/badge-group';
import SearchInput from '~@/components/search-input';
import ProductCardSkeleton from '~@/components/product-card-skeleton';
import useFetch from '~@/utils/use-fetch';

export default {
  components: {
    ProductCard,
    ProductDetail,
    BadgeGroup,
    SearchInput,
    ProductCardSkeleton
  },
  data() {
    return {
      products: [],
      selectedProduct: {},
      badge: ''
    }
  },
  computed: {
    productsIsLoaded() {
      return this.products.length > 0;
    }
  },
  methods: {
    onClicked(value) {
      console.log('badge ditekan ' + value);
    },
    onProductCardClicked(product) {
      this.selectedProduct = product;
      this.$bvModal.show('bv-modal-product');
    },
    fetchProductById() {},
    async fetchProducts() {
      try {
        const result = await useFetch('/products');

        if (result.error) {
          throw new Error('Error Backend: Exception response json');
        }

        setTimeout(() => {
          this.products = result.data;
        }, 2000);

      } catch (res) {
        alert('Error: Terjadi kesalahan memuat data.');
        console.warn(res.message);
      }
    },
  },
  mounted() {
    this.fetchProducts();
  }
}
</script>

<style lang="scss">
@import '~@/assets/sass/product.scss';
</style>