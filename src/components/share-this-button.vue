<template>
  <div class="share-this">
    <p class="share-this__title">Bagikan</p>
    <!-- This is the placement code ShareThis provides. -->
    <div class="sharethis-inline-share-buttons"></div>
  </div>
</template>

<script>
export default {
  props: ['uri'],
  mounted() {
    const st = window.__sharethis__;
    if (!st) {
      const script = document.createElement('script');
      script.src = this.uri;
      document.body.appendChild(script);
    } else if (typeof st.initialize === 'function') {
      st.href = window.location.href;
      st.initialize();
    }
  }
}
</script>