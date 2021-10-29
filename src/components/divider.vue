<template>
<div class="divider">
  <b-container>
    <h1>{{ title }}</h1>
    <span></span>
    <p>{{ subtitle }}</p>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'Divider',
  props: ['title', 'subtitle']
}
</script>
