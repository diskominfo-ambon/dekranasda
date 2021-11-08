<template>
<div class="post__card">
  <!-- image -->
  <div class="post__card-cover">
    <p>Gambar</p>
  </div>
  <!-- content -->
  <div class="post__card-body">
    <h2>{{ data.title }}</h2>
    <span><span class="text-primary">
      <!-- eslint-disable-next-line no-irregular-whitespace -->
      <Icon icon="calendar-week"/> {{ data.created.calendar }} </span> • Sudah dilihat oleh {{ data.views }} pengguna • Admin</span>
    <div>
      <p>
        {{ data.content | simplifyContent }} <router-link class="text-primary" :to="{ name: 'Post', params: { slug: `${data.slug}_${data.id}` }}">Lihat selengkapnya</router-link>
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PostCard',
  props: ['data'],
  filters: {
    simplifyContent(text) {
      return text.length > 200
        ? text.substr(0, 200) + '...'
        : text;
    }
  }
}
</script>