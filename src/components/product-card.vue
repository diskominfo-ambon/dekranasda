<template>
<div class="product-card">
  <div class="product-card__header">
    <img :src="require('~@/assets/img/download.jpg')"/>
  </div>
  <div class="product-card__body">
    <h3 class="product-card__body-title">
      {{ data.title | limit(30) }}
    </h3>
    <span class="product-card__body-published">
      {{ data.user.name }} • dilihat {{ data.views }} pengguna
    </span>

    <div class="product-card__body-price">
      <span>Tertarik dengan produknya?</span>
      <p>{{ data.priceToRupiah }}</p>
    </div>
  </div>
</div>
</template>
<script>
import helperFilter from '~@/mixins/helper-filter';

export default {
  props: ['data'],
  mixins: [helperFilter]
}
</script>