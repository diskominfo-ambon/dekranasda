<template>
<div class="product-card">
  <div class="product-card__header">
    <b-skeleton width="100%" height="100%"/>
  </div>
  <div class="product-card__body">
    <b-skeleton class="product-card__body-title" width="100%" height="8%"/>
    
    <span class="product-card__body-published d-flex">
      <b-skeleton width="15%" height="8%"/>
      <b-skeleton class="mx-2" width="30%" height="8%"/>
      <b-skeleton width="50%" height="8%"/>
    </span>

    <div class="product-card__body-price">
      <b-skeleton width="60%" height="8%"/>
      <b-skeleton class="mt-2" width="70%" height="20%"/>
    </div>
  </div>
</div>
</template>

<style scoped>
.product-card__header {
  height: 11rem;
}
</style>