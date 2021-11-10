<template>
  <div class="product-detail">
    <div class="product-detail__header">
      <div class="product-detail__title">
        <h3>
          {{ data.title }}
        </h3>
        <p>
          <span class="text-primary">
            <Icon icon="calendar-week"/> {{ data.created.calendar }}  
          </span> • {{ data.user.name }} • Sudah dilihat {{ data.views }} kali
        </p>
      </div>
      <div class="product-detail__carousell">
        <img :src="require('~@/assets/img/download.jpg')"/>
      </div>
    </div>

    <div class="product-detail__content">
      <details open>
        <summary>
          Informasi Produk
        </summary>
        <p>
          {{ data.content }}
        </p>
      </details>
      <details class="mt-4">
        <summary>
          Informasi Pengguna
        </summary>
        <p>
          Tidak disertakan
        </p>
      </details>
    </div>

    <div class="product-detail__footer">
      <div>
        <span>
          Tertarik dengan produknya?
        </span>
        <p>
          {{ data.priceToRupiah }}
        </p>
      </div>

      <a :href="`https://wa.me/${data.user.phone_number}`" target="__blank" class="btn btn-primary">
        <Icon :icon="['fab', 'whatsapp']" class="mr-1"/> Pesan sekarang
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data']
}
</script>