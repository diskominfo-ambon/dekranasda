<template>
<div class="product-card">
  <div class="product-card__header">
    <img :src="`${endpoint}/storage/${data.attachments[0].path}`"/>
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
import helpers from '~@/mixins/helpers';

export default {
  props: ['data'],
  mixins: [helpers]
}
</script>