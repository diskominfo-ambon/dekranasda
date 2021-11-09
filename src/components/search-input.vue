<template>
<b-form @submit.prevent="onSubmit">
  <b-form-group
    label="Telusuri produk"
  >
  <div class="form-group__with-categories">
    <b-form-input
      v-model="filter.keyword"
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
  props: ['value'],
  computed: {
    filter: {
      set(newValue) {
        this.$emit('input', newValue)
      },
      get() {
        return this.value;
      }
    },
  },
  methods: {
    keywordIsEmpty() {
      return this.value.keyword
        .trim()
        .length <= 0;
    },
    onSubmit() {
      if (this.keywordIsEmpty()) {
        console.warn('Keyword is empty.');
        return;
      }

      this.value.submitted = true;
      this.$emit('submit');
    }
  }
}
</script>