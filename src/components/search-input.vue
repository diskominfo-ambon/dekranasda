<template>
<b-form @submit.prevent="onSubmit">
  <b-form-group
    label="Telusuri produk"
  >
  <div class="form-group__with-categories">
    <b-form-input
      v-model="keyword"
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
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.keyword);
    }
  }
}
</script>